const fs = require('fs');
const path = require('path');

const root = __dirname;
const errors = [];

function fail(message) {
  errors.push(message);
}

function exists(filePath) {
  return fs.existsSync(path.join(root, filePath));
}

function read(filePath) {
  return fs.readFileSync(path.join(root, filePath), 'utf8');
}

function walk(dirPath, matcher, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath, matcher, files);
    } else if (matcher(entryPath)) {
      files.push(entryPath);
    }
  }
  return files;
}

for (const file of ['index.html', 'ja/index.html', 'robots.txt', 'sitemap.xml', 'images/social-preview.jpg']) {
  if (!exists(file)) fail(`Missing required file: ${file}`);
}

for (const file of ['styles.min.css', 'subpages.min.css', 'careers.min.css', 'contact-form.min.css', 'job.min.css']) {
  if (!exists(file)) fail(`Missing generated CSS file: ${file}`);
}

if (exists('style.css')) {
  fail('Legacy style.css should not exist.');
}

const allowedRasterAssets = new Set([
  path.join(root, 'images', 'social-preview.jpg'),
]);

for (const file of walk(path.join(root, 'images'), filePath => /\.(?:jpe?g|png)$/i.test(filePath))) {
  if (!allowedRasterAssets.has(file)) {
    fail(`${path.relative(root, file)} should not be committed. Keep only optimized web assets in the public repo.`);
  }
}

for (const file of walk(path.join(root, 'catalog'), filePath => /\.(?:jpe?g|png)$/i.test(filePath))) {
  fail(`${path.relative(root, file)} should not be committed. Use catalog/highlights-web WebP assets instead.`);
}

const htmlFiles = walk(root, filePath => filePath.endsWith('.html'));
for (const absolutePath of htmlFiles) {
  const relPath = path.relative(root, absolutePath);
  const html = fs.readFileSync(absolutePath, 'utf8');
  const isRedirect = /http-equiv="refresh"/i.test(html);

  if (/\/style\.css|\/styles\.css|\/subpages\.css|\/careers\.css|\/contact-form\.css|\/job\.css/.test(html)) {
    fail(`${relPath} references an unminified or legacy stylesheet.`);
  }

  if (isRedirect) {
    if (!/name="robots" content="noindex,follow"/.test(html)) {
      fail(`${relPath} redirect page is missing noindex,follow.`);
    }
    continue;
  }

  for (const marker of ['SEO-BEGIN', 'hreflang=', 'property="og:title"', 'property="og:image"', 'name="twitter:card"']) {
    if (!html.includes(marker)) fail(`${relPath} is missing ${marker}.`);
  }

  if (!html.includes('https://www.ecobrandjapan.com/images/social-preview.jpg')) {
    fail(`${relPath} does not use the generated social preview image.`);
  }
}

const activeImageSources = [
  'src/Hero.jsx',
  'src/Gallery.jsx',
  'src/about/AboutAtelier.jsx',
  'src/highlights/highlights-data.js',
];

for (const file of activeImageSources) {
  const source = read(file);
  if (/\/(?:images|catalog)\/(?!highlights-web\/)[^'"]+\.(?:jpe?g|png)/i.test(source)) {
    fail(`${file} references an unoptimized active image.`);
  }
}

for (const file of ['src/Hero.jsx', 'src/Gallery.jsx', 'src/about/AboutAtelier.jsx', 'src/highlights/HighlightsGallery.jsx']) {
  const source = read(file);
  if (!/width=/.test(source) || !/height=/.test(source) || !/decoding=/.test(source)) {
    fail(`${file} is missing image dimension or decoding hints.`);
  }
}

if (errors.length) {
  console.error(errors.map(error => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Site checks passed.');
