const DEFAULT_ALLOWED_ORIGINS = [
  'https://www.ecobrandjapan.com',
  'https://ecobrandjapan.com',
  'http://localhost:8000',
  'http://localhost:3000',
  'http://127.0.0.1:8000',
];

const TEXT_FIELD_LIMIT = 12000;
const MAX_FILES = 4;

function json(data, status = 200, origin = '') {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...corsHeaders(origin),
    },
  });
}

function corsHeaders(origin) {
  return {
    'access-control-allow-origin': origin || 'https://www.ecobrandjapan.com',
    'access-control-allow-methods': 'POST, OPTIONS',
    'access-control-allow-headers': 'content-type, accept',
    'access-control-max-age': '86400',
    vary: 'Origin',
  };
}

function getAllowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || DEFAULT_ALLOWED_ORIGINS.join(','))
    .split(',')
    .map(value => value.trim())
    .filter(Boolean);
}

function isAllowedOrigin(request, env) {
  const origin = request.headers.get('origin') || '';
  if (!origin) return { allowed: false, origin: '' };
  return { allowed: getAllowedOrigins(env).includes(origin), origin };
}

function sanitizeSegment(value, fallback = 'value') {
  const cleaned = String(value || '')
    .normalize('NFKD')
    .replace(/[^\w.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 96);
  return cleaned || fallback;
}

function fieldValue(value) {
  return String(value || '').trim().slice(0, TEXT_FIELD_LIMIT);
}

function timestampId() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

async function verifyTurnstile(token, request, env) {
  if (!env.TURNSTILE_SECRET_KEY) return true;
  if (!token) return false;

  const body = new FormData();
  body.append('secret', env.TURNSTILE_SECRET_KEY);
  body.append('response', token);
  body.append('remoteip', request.headers.get('cf-connecting-ip') || '');

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  const result = await response.json().catch(() => null);
  return Boolean(result?.success);
}

async function storeFiles(formData, env, baseKey) {
  const uploads = [];

  for (const [name, value] of formData.entries()) {
    if (!(value instanceof File) || !value.name || value.size === 0) continue;
    if (uploads.length >= MAX_FILES) {
      throw new Error(`Too many files. Maximum ${MAX_FILES} files allowed.`);
    }

    const safeName = sanitizeSegment(value.name, 'upload');
    const key = `${baseKey}/files/${sanitizeSegment(name, 'file')}-${uploads.length + 1}-${safeName}`;
    await env.FORM_UPLOADS.put(key, value.stream(), {
      httpMetadata: {
        contentType: value.type || 'application/octet-stream',
      },
      customMetadata: {
        originalName: value.name,
        fieldName: name,
      },
    });
    uploads.push({
      field: name,
      name: value.name,
      type: value.type || 'application/octet-stream',
      size: value.size,
      key,
    });
  }

  return uploads;
}

function collectFields(formData) {
  const fields = {};
  for (const [name, value] of formData.entries()) {
    if (value instanceof File) continue;
    if (name === 'cf-turnstile-response') continue;
    fields[name] = fieldValue(value);
  }
  return fields;
}

function buildSubmission(fields, uploads, request, baseKey) {
  return {
    id: baseKey.split('/').at(-1),
    submittedAt: new Date().toISOString(),
    type: fields.formType || 'unknown',
    language: fields.language || 'en',
    role: fields.role || '',
    roleSlug: fields.roleSlug || '',
    name: fields.name || '',
    email: fields.email || '',
    fields,
    uploads,
    request: {
      origin: request.headers.get('origin') || '',
      ip: request.headers.get('cf-connecting-ip') || '',
      country: request.headers.get('cf-ipcountry') || '',
      userAgent: request.headers.get('user-agent') || '',
    },
  };
}

function notificationText(submission) {
  const lines = [
    `New ${submission.type} submission`,
    `Name: ${submission.name || '-'}`,
    `Email: ${submission.email || '-'}`,
  ];
  if (submission.role) lines.push(`Role: ${submission.role}`);
  if (submission.fields.topic) lines.push(`Topic: ${submission.fields.topic}`);
  if (submission.uploads.length) {
    lines.push('Files:');
    submission.uploads.forEach(file => lines.push(`- ${file.name} (${file.key})`));
  }
  lines.push(`Metadata: ${submission.metadataKey}`);
  return lines.join('\n');
}

async function sendSlackNotification(submission, env) {
  if (!env.SLACK_WEBHOOK_URL) return;
  await fetch(env.SLACK_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ text: notificationText(submission) }),
  });
}

async function sendResendNotification(submission, env) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL || !env.FROM_EMAIL) return;
  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: env.FROM_EMAIL,
      to: [env.NOTIFY_EMAIL],
      reply_to: submission.email || undefined,
      subject: `Eco Brand Japan ${submission.type}: ${submission.role || submission.fields.topic || submission.name || 'new submission'}`,
      text: notificationText(submission),
    }),
  });
}

async function notify(submission, env) {
  const tasks = [sendSlackNotification(submission, env), sendResendNotification(submission, env)];
  const results = await Promise.allSettled(tasks);
  results.forEach(result => {
    if (result.status === 'rejected') console.warn('Notification failed:', result.reason);
  });
}

async function handleSubmit(request, env, origin) {
  if (!env.FORM_UPLOADS) {
    return json({ ok: false, error: 'R2 binding FORM_UPLOADS is not configured.' }, 500, origin);
  }

  const formData = await request.formData();
  const fields = collectFields(formData);

  if (fields.website) {
    return json({ ok: true }, 200, origin);
  }

  const turnstileOk = await verifyTurnstile(formData.get('cf-turnstile-response'), request, env);
  if (!turnstileOk) {
    return json({ ok: false, error: 'Verification failed. Please refresh and try again.' }, 403, origin);
  }

  if (!fields.formType || !fields.name || !fields.email) {
    return json({ ok: false, error: 'Missing required fields.' }, 400, origin);
  }

  if (fields.formType === 'job-application' && !fields.role) {
    return json({ ok: false, error: 'Missing application role.' }, 400, origin);
  }

  const baseKey = [
    sanitizeSegment(fields.formType, 'submission'),
    sanitizeSegment(fields.roleSlug || fields.topic || 'general', 'general'),
    `${timestampId()}-${crypto.randomUUID()}`,
  ].join('/');

  const uploads = await storeFiles(formData, env, baseKey);
  const submission = buildSubmission(fields, uploads, request, baseKey);
  submission.metadataKey = `${baseKey}/submission.json`;

  await env.FORM_UPLOADS.put(submission.metadataKey, JSON.stringify(submission, null, 2), {
    httpMetadata: { contentType: 'application/json; charset=utf-8' },
  });

  await notify(submission, env);
  return json({ ok: true, id: submission.id }, 200, origin);
}

export default {
  async fetch(request, env) {
    const { allowed, origin } = isAllowedOrigin(request, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: allowed ? 204 : 403, headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname === '/health') {
      return json({ ok: true }, 200, origin || 'https://www.ecobrandjapan.com');
    }

    if (request.method !== 'POST' || url.pathname !== '/submit') {
      return json({ ok: false, error: 'Not found.' }, 404, origin);
    }

    if (!allowed) {
      return json({ ok: false, error: 'Origin is not allowed.' }, 403, origin);
    }

    try {
      return await handleSubmit(request, env, origin);
    } catch (error) {
      console.error('Submission failed:', error);
      return json({ ok: false, error: error.message || 'Submission failed.' }, 500, origin);
    }
  },
};
