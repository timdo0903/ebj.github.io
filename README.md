# Eco Brand Japan Website

A static marketing and recruiting site for [Eco Brand Japan](https://www.ecobrandjapan.com). This repository contains the production-ready assets that power https://www.ecobrandjapan.com/ and related landing pages.

## ✨ Features

- Responsive marketing pages for multiple roles and campaigns.
- Centralised application form configuration with optional progressive enhancement.
- Image optimisation workflow that generates modern formats (AVIF/WebP) alongside the original JPEGs.
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

- `submitUrl`: HTML form endpoint (e.g. FormSubmit or your own API).
- `allowedOrigins`: Origins permitted to access the AJAX endpoint when progressive enhancement is enabled.
- `maxAttachmentBytes` / `maxTotalBytes`: Client-side validation thresholds (FormSubmit limits combined payloads to 5 MB).
- `data-next-path`: Optional thank-you redirect per role.

### Bring Your Own Submission Backend

1. Provision durable storage (S3 + DynamoDB, Google Cloud Storage, Supabase, etc.) for payloads and file uploads.
2. Expose an HTTPS endpoint (Cloudflare Workers, AWS Lambda/API Gateway, Netlify Functions, etc.) that accepts `multipart/form-data`, enforces attachment limits, validates input, and writes to the store.
3. Trigger notifications (email/Slack/ATS) so hiring managers receive submissions immediately.
4. Configure CORS (`POST` + `OPTIONS`) to allow `https://www.ecobrandjapan.com`.
5. Add monitoring (HTTP metrics + dead-letter queue) to catch provider throttling.
6. Update the CSP `connect-src` and `form-action` directives in your HTML files to include the new API origin before deploying.

## 🔍 Recommended Load Checks

- Run `npm run optimize:images` before major campaigns to keep hero assets cached and lightweight.
- Use a synthetic load tool (k6, Artillery, etc.) against both the static site and the application API ahead of hiring pushes.
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
2. Upload the static assets to your hosting platform (e.g. GitHub Pages, Netlify, Vercel, AWS S3 + CloudFront).
3. Configure DNS to point to your hosting provider (see `CNAME` for the canonical domain).
4. Enable HTTPS and set appropriate caching headers for static assets.

## 🤝 Contributing

Issues and pull requests are welcome! Please open an issue to discuss major changes before submitting a PR.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
