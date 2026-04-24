import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promises as fs } from 'node:fs';
import { transformFileAsync } from '@babel/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const compiledDir = path.join(rootDir, 'compiled');
const compiledSrcDir = path.join(compiledDir, 'src');
const compiledVendorDir = path.join(compiledDir, 'vendor');

const babelOptions = {
  babelrc: false,
  configFile: false,
  comments: false,
  parserOpts: {
    plugins: ['jsx'],
  },
  presets: [
    ['@babel/preset-env', { targets: '> 0.5%, not dead' }],
    ['@babel/preset-react', { runtime: 'classic' }],
  ],
};

async function ensureDir(dirPath) {
  await fs.mkdir(dirPath, { recursive: true });
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(entryPath));
      continue;
    }

    files.push(entryPath);
  }

  return files;
}

async function compileSourceFile(filePath) {
  const relativePath = path.relative(srcDir, filePath);
  const outputPath = path.join(compiledSrcDir, relativePath.replace(/\.(jsx|js)$/i, '.js'));

  await ensureDir(path.dirname(outputPath));

  const result = await transformFileAsync(filePath, babelOptions);
  if (!result?.code) {
    throw new Error(`Babel produced no output for ${relativePath}`);
  }

  await fs.writeFile(outputPath, result.code);
  return outputPath;
}

async function copyVendorFile(packagePathParts, targetName) {
  const sourcePath = path.join(rootDir, 'node_modules', ...packagePathParts);
  const targetPath = path.join(compiledVendorDir, targetName);

  if (!(await fileExists(sourcePath))) {
    throw new Error(
      `Missing vendor asset: ${sourcePath}. Run npm install before build:client.`
    );
  }

  await ensureDir(path.dirname(targetPath));
  await fs.copyFile(sourcePath, targetPath);
}

async function main() {
  await fs.rm(compiledDir, { recursive: true, force: true });
  await ensureDir(compiledSrcDir);
  await ensureDir(compiledVendorDir);

  const sourceFiles = await walk(srcDir);
  const supportedFiles = sourceFiles.filter(
    filePath => filePath.endsWith('.jsx') || filePath.endsWith('.js')
  );

  for (const filePath of supportedFiles) {
    await compileSourceFile(filePath);
  }

  await copyVendorFile(['react', 'umd', 'react.production.min.js'], 'react.production.min.js');
  await copyVendorFile(
    ['react-dom', 'umd', 'react-dom.production.min.js'],
    'react-dom.production.min.js'
  );

  console.log(`Built ${supportedFiles.length} source files into ${path.relative(rootDir, compiledDir)}.`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
