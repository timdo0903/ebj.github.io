import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const siteOrigin = 'https://www.ecobrandjapan.com';
const socialPreviewPath = path.join(rootDir, 'images', 'social-preview.jpg');
const ogImage = `${siteOrigin}/images/social-preview.jpg`;
const defaultDescription =
  'Eco Brand Japan is a Tokyo atelier sourcing, authenticating, restoring, and photographing circular luxury pieces.';

const cssFiles = ['styles.css', 'subpages.css', 'careers.css', 'contact-form.css', 'job.css'];
const pairedPaths = new Set(['/', '/about/', '/principles/', '/highlights/', '/contact/', '/careers/', '/job-detail/']);

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git') continue;
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
    } else if (entry.name.endsWith('.html')) {
      files.push(entryPath);
    }
  }

  return files;
}

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,>+~])\s*/g, '$1')
    .replace(/;}/g, '}')
    .trim();
}

async function buildCss() {
  for (const fileName of cssFiles) {
    const sourcePath = path.join(rootDir, fileName);
    try {
      const source = await fs.readFile(sourcePath, 'utf8');
      const minPath = path.join(rootDir, fileName.replace(/\.css$/, '.min.css'));
      await fs.writeFile(minPath, `${minifyCss(source)}\n`);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }
}

async function buildSocialPreview() {
  const heroImage = await sharp(path.join(rootDir, 'catalog/highlights-web/portrait-leopard-wallet.webp'))
    .resize(620, 630, { fit: 'cover', position: 'center' })
    .modulate({ saturation: 0.92 })
    .jpeg({ quality: 88 })
    .toBuffer();

  const overlay = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stop-color="#ede6d9"/>
          <stop offset="0.64" stop-color="#ede6d9"/>
          <stop offset="1" stop-color="#ede6d9" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="820" height="630" fill="url(#fade)"/>
      <text x="76" y="96" font-family="Georgia, serif" font-size="24" fill="#8a7545" letter-spacing="3">ECO BRAND JAPAN</text>
      <text x="76" y="238" font-family="Georgia, serif" font-size="82" fill="#1a1d1a">Circular luxury,</text>
      <text x="76" y="326" font-family="Georgia, serif" font-size="82" font-style="italic" fill="#8a7545">curated in Tokyo.</text>
      <text x="78" y="408" font-family="Arial, sans-serif" font-size="25" fill="#2d322d">Sourcing, authenticating, restoring, and photographing</text>
      <text x="78" y="446" font-family="Arial, sans-serif" font-size="25" fill="#2d322d">rare maison pieces for their next chapter.</text>
      <line x1="76" y1="525" x2="470" y2="525" stroke="#8a7545" stroke-width="2"/>
      <text x="76" y="566" font-family="Arial, sans-serif" font-size="18" fill="#2d322d" letter-spacing="4">TOKYO ATELIER</text>
    </svg>
  `);

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 3,
      background: '#ede6d9',
    },
  })
    .composite([
      { input: heroImage, left: 580, top: 0 },
      { input: overlay, left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(socialPreviewPath);
}

function getAttr(html, pattern) {
  return html.match(pattern)?.[1]?.trim() || '';
}

function getDescription(html) {
  const tags = [...html.matchAll(/<meta\s+[^>]*name="description"[^>]*>/gi)].map(match => match[0]);
  const lastTag = tags.at(-1);
  if (!lastTag) return '';
  return getAttr(lastTag, /content="([^"]*)"/i);
}

function setSingleDescription(html, description) {
  const withoutDescriptions = html.replace(/\n?\s*<meta\s+[^>]*name="description"[^>]*>\n?/gi, '\n');
  return withoutDescriptions.replace(
    /(<link rel="canonical" href="[^"]+" \/>\n?)/i,
    `$1<meta name="description" content="${escapeHtml(description)}" />\n`
  );
}

function getAlternatePaths(canonicalUrl) {
  if (!canonicalUrl.startsWith(siteOrigin)) return null;
  const url = new URL(canonicalUrl);
  if (url.search) return null;

  const currentPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
  if (currentPath.startsWith('/ja/')) {
    const enPath = currentPath === '/ja/' ? '/' : currentPath.replace(/^\/ja/, '');
    if (!pairedPaths.has(enPath)) return null;
    return {
      en: `${siteOrigin}${enPath}`,
      ja: `${siteOrigin}${currentPath}`,
    };
  }

  if (!pairedPaths.has(currentPath)) return null;
  return {
    en: `${siteOrigin}${currentPath}`,
    ja: `${siteOrigin}${currentPath === '/' ? '/ja/' : `/ja${currentPath}`}`,
  };
}

function buildSeoBlock({ canonicalUrl, description, lang, title }) {
  const alternates = getAlternatePaths(canonicalUrl);
  const locale = lang === 'ja' ? 'ja_JP' : 'en_US';
  const lines = ['<!-- SEO-BEGIN -->'];

  if (alternates) {
    lines.push(`  <link rel="alternate" hreflang="en" href="${alternates.en}" />`);
    lines.push(`  <link rel="alternate" hreflang="ja" href="${alternates.ja}" />`);
    lines.push(`  <link rel="alternate" hreflang="x-default" href="${alternates.en}" />`);
  }

  lines.push(`  <meta property="og:type" content="website" />`);
  lines.push(`  <meta property="og:site_name" content="Eco Brand Japan" />`);
  lines.push(`  <meta property="og:locale" content="${locale}" />`);
  lines.push(`  <meta property="og:title" content="${escapeHtml(title)}" />`);
  lines.push(`  <meta property="og:description" content="${escapeHtml(description)}" />`);
  lines.push(`  <meta property="og:url" content="${canonicalUrl}" />`);
  lines.push(`  <meta property="og:image" content="${ogImage}" />`);
  lines.push(`  <meta name="twitter:card" content="summary_large_image" />`);
  lines.push(`  <meta name="twitter:title" content="${escapeHtml(title)}" />`);
  lines.push(`  <meta name="twitter:description" content="${escapeHtml(description)}" />`);
  lines.push(`  <meta name="twitter:image" content="${ogImage}" />`);
  lines.push('<!-- SEO-END -->');
  return lines.join('\n');
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function updateCssLinks(html) {
  return html.replace(
    /href="\/(styles|subpages|careers|contact-form|job)(?:\.min)?\.css([^"]*)"/g,
    'href="/$1.min.css$2"'
  );
}

function updateHtml(html) {
  let next = updateCssLinks(html)
    .replace(/\n?<!-- SEO-BEGIN -->[\s\S]*?<!-- SEO-END -->\n?/g, '\n')
    .replace(/\n?\s*<meta name="robots" content="noindex,follow" \/>\n?/g, '\n');

  const isRedirect = /http-equiv="refresh"/i.test(next);
  if (isRedirect) {
    if (!/<meta\s+name="robots"/i.test(next)) {
      next = next.replace(/(<meta name="viewport"[^>]*>\n?)/i, '$1  <meta name="robots" content="noindex,follow" />\n');
    }
    return next;
  }

  const title = getAttr(next, /<title>([\s\S]*?)<\/title>/i) || 'Eco Brand Japan';
  const canonicalUrl = getAttr(next, /<link rel="canonical" href="([^"]+)"/i);
  if (!canonicalUrl) return next;

  const lang = getAttr(next, /<html lang="([^"]+)"/i) || 'en';
  const description = getDescription(next) || defaultDescription;
  next = setSingleDescription(next, description);

  const seoBlock = buildSeoBlock({ canonicalUrl, description, lang, title });
  const insertPattern = /(<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com">)/i;
  if (insertPattern.test(next)) {
    return next.replace(insertPattern, `${seoBlock}\n$1`);
  }

  return next.replace(/<\/head>/i, `${seoBlock}\n</head>`);
}

async function buildHtml() {
  const htmlFiles = await walk(rootDir);
  for (const filePath of htmlFiles) {
    const source = await fs.readFile(filePath, 'utf8');
    const next = updateHtml(source);
    if (next !== source) {
      await fs.writeFile(filePath, next);
    }
  }
}

await buildCss();
await buildSocialPreview();
await buildHtml();
console.log('Built minified CSS and refreshed static HTML metadata.');
