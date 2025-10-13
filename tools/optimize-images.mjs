import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const imagesDir = path.join(projectRoot, 'images');
const outputDir = path.join(imagesDir, 'optimized');

const TARGET_WIDTHS = [480, 640, 960, 1280, 1600, 1920, 2560];
const FORMATS = [
  { format: 'webp', extension: 'webp', options: { quality: 72 } },
  { format: 'avif', extension: 'avif', options: { quality: 55 } },
];
const SIZE_THRESHOLD_BYTES = 400 * 1024;
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png']);

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run');
const force = args.has('--force');

const log = (...messages) => console.log('[optimize-images]', ...messages);

const ensureDir = async dir => {
  await fs.mkdir(dir, { recursive: true });
};

const collectImages = async dir => {
  const images = [];
  const queue = [dir];

  while (queue.length) {
    const currentDir = queue.pop();
    let entries = [];
    try {
      entries = await fs.readdir(currentDir, { withFileTypes: true });
    } catch (error) {
      log(`Skipping unreadable directory ${currentDir}:`, error.message);
      continue;
    }

    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const entryPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.toLowerCase() === 'optimized') continue;
        queue.push(entryPath);
        continue;
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXTENSIONS.has(ext)) {
        images.push(entryPath);
      }
    }
  }

  return images;
};

const generateVariants = async filePath => {
  const relativePath = path.relative(projectRoot, filePath);
  const fileInfo = await fs.stat(filePath);

  if (!force && fileInfo.size < SIZE_THRESHOLD_BYTES) {
    log(`Skipping ${relativePath} (below threshold)`);
    return { generated: 0, skipped: TARGET_WIDTHS.length * FORMATS.length };
  }

  let metadata;
  try {
    metadata = await sharp(filePath).metadata();
  } catch (error) {
    log(`Unable to read metadata for ${relativePath}:`, error.message);
    return { generated: 0, skipped: TARGET_WIDTHS.length * FORMATS.length };
  }

  const availableWidth = metadata.width || Math.max(...TARGET_WIDTHS);
  const widths = TARGET_WIDTHS.filter(width => width <= availableWidth).length
    ? TARGET_WIDTHS.filter(width => width <= availableWidth)
    : [Math.min(TARGET_WIDTHS[0], availableWidth)];

  let generated = 0;
  let skipped = 0;

  await ensureDir(outputDir);

  for (const width of widths) {
    for (const { format, extension, options } of FORMATS) {
      const baseName = path.basename(filePath, path.extname(filePath));
      const outputFileName = `${baseName}-${width}.${extension}`;
      const outputPath = path.join(outputDir, outputFileName);

      if (!force) {
        try {
          const existing = await fs.stat(outputPath);
          if (existing.mtimeMs >= fileInfo.mtimeMs) {
            skipped += 1;
            continue;
          }
        } catch {
          // File does not exist yet.
        }
      }

      if (dryRun) {
        log(`Would create ${path.relative(projectRoot, outputPath)} at width ${width}px (${format})`);
        generated += 1;
        continue;
      }

      try {
        await sharp(filePath)
          .resize({ width, withoutEnlargement: true })
          .toFormat(format, options)
          .toFile(outputPath);
        generated += 1;
      } catch (error) {
        log(`Failed to generate ${path.relative(projectRoot, outputPath)}:`, error.message);
      }
    }
  }

  return { generated, skipped };
};

const run = async () => {
  const imageFiles = await collectImages(imagesDir);
  if (!imageFiles.length) {
    log('No source images found to optimise.');
    return;
  }

  log(`Processing ${imageFiles.length} source image(s)...`);

  let totalGenerated = 0;
  let totalSkipped = 0;

  for (const filePath of imageFiles) {
    const { generated, skipped } = await generateVariants(filePath);
    totalGenerated += generated;
    totalSkipped += skipped;
  }

  if (dryRun) {
    log(`Dry run complete. Variants that would be generated: ${totalGenerated}. Potential skips: ${totalSkipped}.`);
  } else {
    log(`Optimisation complete. Variants written: ${totalGenerated}. Variants skipped (existing/newer): ${totalSkipped}.`);
  }
};

run().catch(error => {
  console.error('[optimize-images] Fatal error', error);
  process.exitCode = 1;
});
