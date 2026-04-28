# Eco Brand Japan Website

Static website for Eco Brand Japan, built for GitHub Pages and the canonical domain in `CNAME`.

The current site is a public, bilingual brand and recruiting website. It includes the main English and Japanese home pages, editorial brand pages, contact pages, a careers hub, and reusable job-detail pages for open and closed roles.

## Current Update

Last updated: April 25, 2026

- Careers hero metadata spacing was refined so the `Now hiring - 2 roles open` pill and the `Careers - N°001` label have clearer separation on tablet and mobile widths.
- The careers hub currently advertises 2 open roles: Inventory & Logistics Specialist and Product Photographer.
- Closed roles remain visible for reference: Luxury Buyer and Live Seller & Social Media Operator.
- The current page system uses source components in `src/` and compiled browser-ready scripts in `compiled/`.
- Contact and job application forms post to the Cloudflare Worker documented in `docs/cloudflare-forms.md`.

## Site Sections

- `index.html` and `ja/index.html`: main English and Japanese home pages.
- `about/` and `ja/about/`: company story and team pages.
- `principles/` and `ja/principles/`: brand principles.
- `highlights/` and `ja/highlights/`: editorial product highlights.
- `contact/` and `ja/contact/`: contact entry points.
- `careers/` and `ja/careers/`: bilingual careers hub.
- `job-detail/` and `ja/job-detail/`: reusable role detail pages driven by query parameters.
- Legacy role URLs such as `buyers-position/`, `inventory-logistics-specialist/`, `product-photographer/`, and `live-seller-social-media-operator/` are still present for campaign or redirect compatibility.

## Project Structure

```text
.
├── src/                    # React source components
├── compiled/               # Browser-ready compiled JS and vendor files
├── images/                 # Small generated social preview asset
├── catalog/highlights-web/ # Optimized WebP highlight/editorial imagery
├── careers.css             # Careers page styles
├── job.css                 # Job detail page styles
├── styles.css              # Current global styles
├── subpages.css            # Subpage-specific styling
├── form-config.json        # Application form configuration
├── cloudflare/forms-worker # Cloudflare Worker that receives forms and stores files in R2
├── docs/                   # Deployment notes
├── tools/                  # Build and image optimization scripts
└── index.html              # English home page
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run a local static server from the repository root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
http://127.0.0.1:8000/careers/
http://127.0.0.1:8000/ja/careers/
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run build` | Compile React components, refresh static SEO metadata, and regenerate minified CSS. |
| `npm run build:client` | Compile `src/` React components into `compiled/` and copy React vendor files. |
| `npm run build:static` | Refresh static SEO metadata and regenerate `.min.css` files. |
| `npm test` | Check that required top-level English and Japanese HTML files exist. |
| `npm run optimize:images:dry` | Preview image variants that would be generated from temporary source images. |
| `npm run optimize:images` | Generate WebP and AVIF variants in `assets/optimized/` from temporary source images. |

## Editing Workflow

1. Edit source components in `src/` when changing React-rendered sections.
2. Run `npm run build` after source component changes so `compiled/`, static metadata, and minified CSS stay in sync.
3. Edit CSS files directly for layout and visual changes.
4. Run `npm test` before publishing.
5. Preview the affected pages locally at realistic desktop, tablet, and mobile widths.

For the latest careers spacing change, only `careers.css` was required because the issue was layout spacing in the hero metadata row.

## Careers And Jobs

Careers content lives in:

- `src/careers/`: careers hub sections.
- `src/job/`: job detail page components and role data.
- `careers.css`: careers hub layout and responsive behavior.
- `job.css`: job detail page layout and application UI.

Open roles are managed in `src/careers/OpenRoles.jsx` and detailed role copy is managed in `src/job/jobs-data.jsx` and `src/job/jobs-data-jp.jsx`.

## Application Forms

Form behavior is configured in `form-config.json`.

Review these settings before changing application flows:

- `submitUrl`: submission endpoint.
- `allowedOrigins`: allowed origins for enhanced form submission.
- `maxAttachmentBytes` and `maxTotalBytes`: upload limits.

## Image Optimization

The public repository should only contain web-ready imagery:

- Keep active editorial photography in `catalog/highlights-web/` as optimized WebP files.
- Keep `images/social-preview.jpg` for Open Graph and Twitter previews.
- Do not commit raw source JPG/PNG photography to `images/` or the root of `catalog/`.

Run the optimizer locally when preparing new photography, then commit only the final optimized web asset:

```bash
npm run optimize:images:dry
npm run optimize:images
```

Use `--force` if existing generated variants need to be regenerated after quality or source-image changes.

## Deployment

The repository is static and can be hosted by GitHub Pages or another static host.

Before publishing:

1. Run `npm run build:client` if any `src/` files changed.
2. Run `npm test`.
3. Preview changed pages locally.
4. Confirm `CNAME` still points to the intended canonical domain.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
