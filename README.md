# Eco Brand Japan Website

Static marketing and recruiting site for https://www.ecobrandjapan.com.

## Image Optimisation Workflow

- Install dependencies once: `npm install` (pulls in `sharp`).
- Dry run to preview outputs: `npm run optimize:images:dry`.
- Generate responsive assets: `npm run optimize:images`.
- New variants are written to `images/optimized/` and consumed via `<picture>` elements on the site.
- Rerun the command whenever you update hero/gallery photography. Use `--force` to regenerate everything after adjusting quality settings.

## Application Form Configuration

- Form behaviour is driven by `form-config.json`. Update this file when you are ready to point traffic at your production submission API.
- Keys to tailor:
  - `submitUrl`: HTML fallback (non-JS) endpoint.
  - `ajaxSubmitUrl`: CORS-enabled endpoint for progressive enhancement.
  - `allowedOrigins`: API origins whitelisted for XHR submissions.
  - `maxAttachmentBytes` / `maxTotalBytes`: Client-side validation thresholds.
- Once your new backend is stable, swap the FormSubmit URL for your API (for example `https://api.ecobrandjapan.com/applications`).
- The front end retries transient `408/429/5xx` responses with exponential backoff. Make sure the API returns JSON and 200 on success.

## Bringing Your Own Submission Backend

1. Provision a durable store (e.g. S3 + DynamoDB, Google Cloud Storage, or Supabase) for application payloads and file uploads.
2. Expose an HTTPS endpoint (Cloudflare Workers, AWS Lambda/API Gateway, Netlify Functions, etc.) that accepts `multipart/form-data`, enforces attachment limits, performs server-side validation, and writes to the store.
3. Trigger notifications (email/Slack/ATS) from the backend so hiring managers receive submissions immediately.
4. Configure CORS (`POST` + `OPTIONS`) to accept `https://www.ecobrandjapan.com`.
5. Add monitoring (HTTP metrics + dead-letter queue) so you can spot provider throttling.
6. Update the CSP `connect-src` and `form-action` directives in your HTML files to include the new API origin, then deploy.

## Recommended Load Checks

- Run `npm run optimize:images` before major campaigns to keep hero assets cached and lightweight.
- Use a synthetic load tool (e.g. k6, Artillery) against the static site and the application API before publishing hiring pushes.
- Enable CDN caching on `/images/optimized/**` with long `Cache-Control` headers; bust the cache by regenerating assets when artwork changes.
- Monitor API latency and error rates during campaigns; tune `retryAttempts` or `retryBackoffMs` in `form-config.json` if upstream throttling appears.

## Repository Scripts

- `npm run optimize:images:dry` – Show which image variants would be generated.
- `npm run optimize:images` – Build optimised AVIF/WebP variants for large imagery.
- `npm test` – Sanity check required HTML files exist.
