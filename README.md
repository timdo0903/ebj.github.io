# Eco Brand Japan Website

A static, invitation-only site for Eco Brand Japan's partners, clients, and vetted collaborators. The content focuses on showcasing internal capabilities, private case studies, and specialised recruitment funnels that support targeted campaigns rather than a broad public launch.

## 🔒 Audience & Access

- The site is **not intended for general public consumption**; share URLs only with trusted stakeholders.
- Campaign pages (for example `career/`, `buyers-position/`, `live-seller/`) highlight roles under active recruitment and should be distributed on a need-to-know basis.
- Forms point to controlled submission endpoints. Review [`form-config.json`](./form-config.json) before enabling new campaigns to ensure payload limits and redirect paths align with expectations.

## ✨ Features

- Responsive landing pages tailored to multiple invite-only roles and service offerings.
- Centralised application form configuration with optional progressive enhancement for private submission flows.
- Image optimisation workflow that generates modern formats (AVIF/WebP) alongside the original JPEGs for efficient distribution.
- Lightweight dependency footprint—no runtime frameworks required.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [npm](https://www.npmjs.com/) (bundled with Node.js)

Clone the repository and install dependencies:

```bash
npm install
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run optimize:images:dry` | Preview the responsive image variants that would be generated. |
| `npm run optimize:images` | Generate AVIF/WebP variants for large imagery and write them to `images/optimized/`. |
| `npm test` | Check that required HTML files are present. |

## 🖼 Image Optimisation Workflow

Run the optimiser whenever you update hero or gallery photography:

1. `npm run optimize:images:dry` to confirm the planned outputs.
2. `npm run optimize:images` to produce optimised assets in `images/optimized/`.
3. Serve the generated AVIF/WebP sources alongside the base JPEGs when ready for production.
4. Use the `--force` flag if you change quality settings and need to regenerate existing variants.

## 📝 Application Form Configuration

Form behaviour is defined in [`form-config.json`](./form-config.json). Update this file before directing traffic to your submission backend.

Key properties:

- `submitUrl`: HTML form endpoint (for example FormSubmit or your own API).
- `allowedOrigins`: Origins permitted to access the AJAX endpoint when progressive enhancement is enabled.
- `maxAttachmentBytes` / `maxTotalBytes`: Client-side validation thresholds (FormSubmit limits combined payloads to 5 MB).
- `data-next-path`: Optional thank-you redirect per role.

### Bring Your Own Submission Backend

1. Provision durable storage (S3 + DynamoDB, Google Cloud Storage, Supabase, etc.) for payloads and file uploads.
2. Expose an HTTPS endpoint (Cloudflare Workers, AWS Lambda/API Gateway, Netlify Functions, etc.) that accepts `multipart/form-data`, enforces attachment limits, validates input, and writes to the store.
3. Trigger notifications (email/Slack/ATS) so hiring managers receive submissions immediately.
4. Configure CORS (`POST` + `OPTIONS`) to allow only approved origins (for example `https://www.ecobrandjapan.com`).
5. Add monitoring (HTTP metrics + dead-letter queue) to catch provider throttling.
6. Update the CSP `connect-src` and `form-action` directives in your HTML files to include the new API origin before deploying.

## 🔍 Operational Checklist

- Review `form-config.json` prior to each campaign launch to confirm submission targets and redirect behaviour.
- Run `npm run optimize:images` before sending invites to keep hero assets cached and lightweight.
- Use a synthetic load tool (k6, Artillery, etc.) against both the static site and the application API ahead of private releases.
- Enable CDN caching on `/images/**` with long `Cache-Control` headers; regenerate assets to bust the cache when artwork changes.
- Monitor API latency and error rates during campaigns; adjust `retryAttempts` or `retryBackoffMs` in `form-config.json` if upstream throttling occurs.

## 📁 Project Structure

```
.
├── images/                 # Source imagery and generated variants
├── career/                 # Role-specific landing pages
├── live-seller/, buyers-position/, etc. # Additional campaign pages
├── form-config.json        # Application form settings
├── script.js               # Client-side enhancements
├── style.css               # Global styles
└── index.html              # Main marketing page
```

## 🚢 Deployment

1. Build and optimise imagery locally (see above).
2. Upload the static assets to your hosting platform (for example GitHub Pages, Netlify, Vercel, AWS S3 + CloudFront).
3. Configure DNS to point to your hosting provider (see `CNAME` for the canonical domain).
4. Enable HTTPS and set appropriate caching headers for static assets.
5. Restrict access via password protection, VPN allowlisting, or similar controls when publishing sensitive campaign pages.

## 🤝 Internal Contributions

This repository is maintained by the Eco Brand Japan web team. Submit changes through the internal review process rather than public pull requests.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
