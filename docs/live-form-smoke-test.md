# Live Form Smoke Test

Use this checklist after changing `src/forms.jsx`, `form-config.json`, or `cloudflare/forms-worker/`.

## 1. Confirm the site build

In GitHub Actions, confirm the latest `Site checks` workflow for `main` passed.

Locally, the same checks are:

```bash
cd /home/ecobr/projects/ebj.github.io
npm test
npm run build
git diff --exit-code
```

## 2. Deploy the Worker

GitHub Pages does not deploy the Cloudflare Worker. Deploy Worker changes from WSL:

```bash
cd /home/ecobr/projects/ebj.github.io/cloudflare/forms-worker
npx wrangler deploy
```

Confirm the deploy output includes:

```text
env.FORM_UPLOADS (ebj-form-submissions)
env.MAX_ATTACHMENT_BYTES ("10485760")
env.MAX_TOTAL_BYTES ("20971520")
env.NOTIFICATION_TIMEOUT_MS ("8000")
env.TURNSTILE_TIMEOUT_MS ("5000")
```

If Slack notifications are expected, `SLACK_WEBHOOK_URL` should be set as a Worker secret. It may not appear in the normal deploy binding list.

## 3. Health check

Run:

```bash
curl https://ebj-forms.tim-dee.workers.dev/health
```

Expected:

```json
{"ok":true}
```

## 4. Contact form test

From the live site, submit a short contact form:

```text
https://www.ecobrandjapan.com/contact/
```

Verify:

- The browser shows the success message.
- R2 bucket `ebj-form-submissions` contains one new `contact/<subject>/<id>/submission.json`.
- Slack receives one notification if `SLACK_WEBHOOK_URL` is configured.

## 5. Job application test

From the live site, submit one job application with a small test attachment:

```text
https://www.ecobrandjapan.com/job-detail/?role=inventory-logistics-specialist
```

Verify:

- The browser shows the success message.
- R2 bucket `ebj-form-submissions` contains one new `job-application/<role>/<id>/submission.json`.
- The attachment appears under `job-application/<role>/<id>/files/`.
- Slack receives one notification if `SLACK_WEBHOOK_URL` is configured.

## 6. Duplicate retry check

If a submission appears to have timed out in the browser, check R2 before resubmitting. The Worker should return `duplicate: true` and skip duplicate writes only when the browser retries with the same `idempotencyKey`.

Manual repeat submissions from a refreshed page are treated as new submissions.

## 7. Troubleshooting

If submissions reach R2 but Slack does not post, check whether the Worker has the Slack secret:

```bash
cd /home/ecobr/projects/ebj.github.io/cloudflare/forms-worker
npx wrangler secret put SLACK_WEBHOOK_URL
```

Then submit another test. To inspect live logs while testing:

```bash
npx wrangler tail --format pretty
```

Look for:

```text
Notification failed for <submission-id>:
```

That means the Worker stored the submission, but Slack or Resend rejected the notification request or timed out.
