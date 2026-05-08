# Cloudflare Worker + R2 Forms

This site now posts contact and job application forms to a Cloudflare Worker instead of forms.app.

## 1. Create the R2 bucket

In Cloudflare:

1. Go to **R2 Object Storage**.
2. Create a bucket named `ebj-form-submissions`.
3. Keep it private.

The Worker stores each submission under:

```text
contact/<topic>/<timestamp-id>/submission.json
job-application/<role>/<timestamp-id>/submission.json
job-application/<role>/<timestamp-id>/files/<field>-<n>-<filename>
```

## 2. Create the Worker

From this repo:

```bash
cd cloudflare/forms-worker
cp wrangler.toml.example wrangler.toml
npx wrangler login
npx wrangler r2 bucket create ebj-form-submissions
npx wrangler deploy
```

If the bucket already exists, the create command can be skipped.

## 3. Worker endpoint

The site currently posts to the Worker preview domain:

```text
https://ebj-forms.tim-dee.workers.dev/submit
```

This does not require `ecobrandjapan.com` DNS to be active in Cloudflare.

If the domain is later active in Cloudflare, you can switch the endpoint to:

```text
https://forms.ecobrandjapan.com/submit
```

Then add a custom domain or route for `forms.ecobrandjapan.com` pointing to the Worker and check:

```bash
curl https://forms.ecobrandjapan.com/health
```

Expected response:

```json
{"ok":true}
```

## 4. Optional notifications

Submissions are stored in R2 even without notifications. To receive alerts, set one or both of these.

Slack webhook:

```bash
npx wrangler secret put SLACK_WEBHOOK_URL
```

Email through Resend:

```bash
npx wrangler secret put RESEND_API_KEY
```

Then set `NOTIFY_EMAIL` and `FROM_EMAIL` in `wrangler.toml`. The sender domain must be verified in Resend.

## 5. Turnstile spam protection

The browser reads the public Turnstile site key from `/form-config.json`.

After the website update is live, add the private Turnstile secret key to the `ebj-forms` Worker:

```bash
npx wrangler secret put TURNSTILE_SECRET_KEY
```

Do not commit the secret key to the repository.

## 6. Site config

The browser reads `/form-config.json`. The important value is:

```json
"submitUrl": "https://ebj-forms.tim-dee.workers.dev/submit"
```

For local testing, temporarily change `submitUrl` to a local Worker URL, or add a role-specific override under `roles`.

## 7. File limits

The website and Worker both validate:

- 10 MB per file
- 20 MB total per submission

Cloudflare Free currently allows larger request bodies, but this repo keeps the limit conservative to protect R2 storage. The Worker-side values are controlled by:

```toml
MAX_ATTACHMENT_BYTES = "10485760"
MAX_TOTAL_BYTES = "20971520"
```

## 8. Duplicate retry protection

The browser adds an `idempotencyKey` to each form attempt. If a browser retries after a timeout and the Worker has already written `submission.json`, the Worker returns the existing id with `duplicate: true` and does not write files or send another notification.

## 9. Notification failure handling

Slack and Resend notifications are optional. If either provider returns a non-2xx response or times out, the submission still remains stored in R2 and the Worker logs a warning with the submission id. Notification timeouts are controlled by:

```toml
NOTIFICATION_TIMEOUT_MS = "8000"
```

## 10. Live smoke test

After changing form code, run the deployment and verification checklist in `docs/live-form-smoke-test.md`.
