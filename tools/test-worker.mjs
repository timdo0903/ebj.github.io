import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const workerPath = path.join(rootDir, 'cloudflare/forms-worker/src/index.js');
const workerSource = await readFile(workerPath, 'utf8');
const workerModule = await import(`data:text/javascript;base64,${Buffer.from(workerSource).toString('base64')}`);
const worker = workerModule.default;

const allowedOrigin = 'https://www.ecobrandjapan.com';

function makeBucket() {
  const objects = new Map();
  return {
    objects,
    async put(key, value, options = {}) {
      let body = value;
      if (value instanceof ReadableStream) {
        body = await new Response(value).arrayBuffer();
      }
      objects.set(key, { body, options });
    },
    async head(key) {
      return objects.has(key) ? { key } : null;
    },
  };
}

function makeEnv(overrides = {}) {
  return {
    FORM_UPLOADS: makeBucket(),
    ALLOWED_ORIGINS: allowedOrigin,
    ...overrides,
  };
}

function makeRequest(fields = {}, files = []) {
  const formData = new FormData();
  const values = {
    formType: 'contact',
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Website enquiry',
    message: 'Hello',
    idempotencyKey: 'submission-key-1',
    ...fields,
  };

  Object.entries(values).forEach(([key, value]) => {
    formData.set(key, value);
  });

  files.forEach(({ field = 'attachment', name = 'file.txt', content = 'content', type = 'text/plain' }) => {
    formData.append(field, new File([content], name, { type }));
  });

  return new Request('https://ebj-forms.tim-dee.workers.dev/submit', {
    method: 'POST',
    headers: { origin: allowedOrigin },
    body: formData,
  });
}

test('health endpoint returns ok', async () => {
  const response = await worker.fetch(new Request('https://ebj-forms.tim-dee.workers.dev/health'), makeEnv());
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
});

test('rejects disallowed origins before handling submissions', async () => {
  const request = makeRequest();
  request.headers.set('origin', 'https://attacker.example');
  const response = await worker.fetch(request, makeEnv());
  assert.equal(response.status, 403);
  assert.equal((await response.json()).error, 'Origin is not allowed.');
});

test('rejects oversized uploads without writing to R2', async () => {
  const env = makeEnv({ MAX_ATTACHMENT_BYTES: '8', MAX_TOTAL_BYTES: '20' });
  const originalWarn = console.warn;
  console.warn = () => {};

  try {
    const response = await worker.fetch(
      makeRequest({}, [{ name: 'large.txt', content: '123456789' }]),
      env
    );

    assert.equal(response.status, 413);
    assert.equal(env.FORM_UPLOADS.objects.size, 0);
  } finally {
    console.warn = originalWarn;
  }
});

test('stores metadata and uploaded files for a valid submission', async () => {
  const env = makeEnv();
  const response = await worker.fetch(
    makeRequest({}, [{ field: 'resume', name: 'resume.txt', content: 'resume' }]),
    env
  );
  const payload = await response.json();

  assert.equal(response.status, 200);
  assert.equal(payload.ok, true);
  assert.equal(payload.id, 'submission-key-1');

  const keys = [...env.FORM_UPLOADS.objects.keys()];
  assert.equal(keys.length, 2);
  assert(keys.some(key => key.endsWith('/submission.json')));
  assert(keys.some(key => key.includes('/files/resume-1-resume.txt')));
});

test('does not rewrite or renotify duplicate idempotency keys', async () => {
  const env = makeEnv({ SLACK_WEBHOOK_URL: 'https://hooks.slack.test/form' });
  let notificationCount = 0;
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => {
    notificationCount += 1;
    return new Response('ok', { status: 200 });
  };

  try {
    const first = await worker.fetch(makeRequest(), env);
    const second = await worker.fetch(makeRequest(), env);
    const duplicatePayload = await second.json();

    assert.equal(first.status, 200);
    assert.equal(second.status, 200);
    assert.equal(duplicatePayload.duplicate, true);
    assert.equal(notificationCount, 1);
    assert.equal(env.FORM_UPLOADS.objects.size, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('logs notification provider HTTP failures without failing storage', async () => {
  const env = makeEnv({ SLACK_WEBHOOK_URL: 'https://hooks.slack.test/form' });
  const originalFetch = globalThis.fetch;
  const originalWarn = console.warn;
  const warnings = [];
  globalThis.fetch = async () => new Response('invalid webhook', { status: 500 });
  console.warn = (...args) => warnings.push(args.join(' '));

  try {
    const response = await worker.fetch(makeRequest({ idempotencyKey: 'notification-failure' }), env);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ok, true);
    assert.equal(env.FORM_UPLOADS.objects.size, 1);
    assert(warnings.some(message => message.includes('Notification failed for notification-failure')));
  } finally {
    globalThis.fetch = originalFetch;
    console.warn = originalWarn;
  }
});
