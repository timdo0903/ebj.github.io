const DEFAULT_ALLOWED_ORIGINS = [
  'https://www.ecobrandjapan.com',
  'https://ecobrandjapan.com',
  'http://localhost:8000',
  'http://localhost:3000',
  'http://127.0.0.1:8000',
];

const TEXT_FIELD_LIMIT = 12000;
const MAX_FILES = 4;
const DEFAULT_MAX_ATTACHMENT_BYTES = 10 * 1024 * 1024;
const DEFAULT_MAX_TOTAL_BYTES = 20 * 1024 * 1024;
const DEFAULT_NOTIFICATION_TIMEOUT_MS = 8000;
const DEFAULT_TURNSTILE_TIMEOUT_MS = 5000;

function httpError(message, status = 400) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function positiveNumber(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : fallback;
}

function getUploadLimits(env) {
  return {
    maxAttachmentBytes: positiveNumber(env.MAX_ATTACHMENT_BYTES, DEFAULT_MAX_ATTACHMENT_BYTES),
    maxTotalBytes: positiveNumber(env.MAX_TOTAL_BYTES, DEFAULT_MAX_TOTAL_BYTES),
  };
}

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

function submissionId(fields) {
  return sanitizeSegment(fields.idempotencyKey, `${timestampId()}-${crypto.randomUUID()}`);
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
    signal: AbortSignal.timeout(positiveNumber(env.TURNSTILE_TIMEOUT_MS, DEFAULT_TURNSTILE_TIMEOUT_MS)),
  });
  if (!response.ok) {
    console.warn(`Turnstile verification failed with HTTP ${response.status}.`);
    return false;
  }
  const result = await response.json().catch(() => null);
  return Boolean(result?.success);
}

function collectUploadFiles(formData, env) {
  const { maxAttachmentBytes, maxTotalBytes } = getUploadLimits(env);
  const files = [];
  let totalBytes = 0;

  for (const [name, value] of formData.entries()) {
    if (!(value instanceof File) || !value.name || value.size === 0) continue;
    if (files.length >= MAX_FILES) {
      throw httpError(`Too many files. Maximum ${MAX_FILES} files allowed.`, 413);
    }
    if (value.size > maxAttachmentBytes) {
      throw httpError(`Each file must be ${maxAttachmentBytes} bytes or less.`, 413);
    }
    totalBytes += value.size;
    if (totalBytes > maxTotalBytes) {
      throw httpError(`Combined attachments must be ${maxTotalBytes} bytes or less.`, 413);
    }
    files.push({ name, value });
  }

  return files;
}

async function storeFiles(files, env, baseKey) {
  const uploads = [];

  for (const { name, value } of files) {
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
  if (submission.fields.subject) lines.push(`Subject: ${submission.fields.subject}`);
  if (submission.fields.topic) lines.push(`Topic: ${submission.fields.topic}`);
  if (submission.uploads.length) {
    lines.push('Files:');
    submission.uploads.forEach(file => lines.push(`- ${file.name} (${file.key})`));
  }
  lines.push(`Metadata: ${submission.metadataKey}`);
  return lines.join('\n');
}

async function responseSnippet(response) {
  const text = await response.text().catch(() => '');
  return text.slice(0, 240);
}

async function postJsonWithStatusCheck(provider, url, payload, env, extraHeaders = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', ...extraHeaders },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(positiveNumber(env.NOTIFICATION_TIMEOUT_MS, DEFAULT_NOTIFICATION_TIMEOUT_MS)),
  });

  if (!response.ok) {
    const detail = await responseSnippet(response);
    throw new Error(`${provider} notification failed with HTTP ${response.status}: ${detail}`);
  }
}

async function sendSlackNotification(submission, env) {
  if (!env.SLACK_WEBHOOK_URL) return;
  await postJsonWithStatusCheck('Slack', env.SLACK_WEBHOOK_URL, { text: notificationText(submission) }, env);
}

async function sendResendNotification(submission, env) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL || !env.FROM_EMAIL) return;
  await postJsonWithStatusCheck(
    'Resend',
    'https://api.resend.com/emails',
    {
      from: env.FROM_EMAIL,
      to: [env.NOTIFY_EMAIL],
      reply_to: submission.email || undefined,
      subject: `Eco Brand Japan ${submission.type}: ${submission.role || submission.fields.subject || submission.fields.topic || submission.name || 'new submission'}`,
      text: notificationText(submission),
    },
    env,
    {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
    }
  );
}

async function notify(submission, env) {
  const tasks = [sendSlackNotification(submission, env), sendResendNotification(submission, env)];
  const results = await Promise.allSettled(tasks);
  results.forEach(result => {
    if (result.status === 'rejected') console.warn(`Notification failed for ${submission.id}:`, result.reason);
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

  const id = submissionId(fields);
  const baseKey = [
    sanitizeSegment(fields.formType, 'submission'),
    sanitizeSegment(fields.roleSlug || fields.subject || fields.topic || 'general', 'general'),
    id,
  ].join('/');
  const metadataKey = `${baseKey}/submission.json`;

  if (await env.FORM_UPLOADS.head(metadataKey)) {
    return json({ ok: true, id, duplicate: true }, 200, origin);
  }

  const uploadFiles = collectUploadFiles(formData, env);
  const uploads = await storeFiles(uploadFiles, env, baseKey);
  const submission = buildSubmission(fields, uploads, request, baseKey);
  submission.metadataKey = metadataKey;

  await env.FORM_UPLOADS.put(metadataKey, JSON.stringify(submission, null, 2), {
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
      const status = error.status || 500;
      if (status >= 500) {
        console.error('Submission failed:', error);
      } else {
        console.warn(`Submission rejected with HTTP ${status}:`, error.message);
      }
      return json({ ok: false, error: error.message || 'Submission failed.' }, status, origin);
    }
  },
};
