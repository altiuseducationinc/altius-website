import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const logoDir = path.join(publicDir, 'logo');

async function optimizeDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (file !== 'logo') continue; // logo handled separately or recursively
    }

    const ext = path.extname(file).toLowerCase();
    if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const outputPath = path.join(dir, `${baseName}.webp`);

    try {
      const metadata = await sharp(fullPath).metadata();
      let pipeline = sharp(fullPath);

      // Resize huge images down to max width 1920px if larger
      if (metadata.width && metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      const oldSize = stat.size;
      const newSize = fs.statSync(outputPath).size;
      const savings = (((oldSize - newSize) / oldSize) * 100).toFixed(1);
      console.log(`[OPTIMIZED] ${file} (${(oldSize / 1024 / 1024).toFixed(2)} MB) -> ${baseName}.webp (${(newSize / 1024).toFixed(1)} KB) [Saved ${savings}%]`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

async function run() {
  console.log('--- Optimizing public/ images ---');
  await optimizeDirectory(publicDir);
  console.log('--- Optimizing public/logo/ images ---');
  await optimizeDirectory(logoDir);
}

run();
