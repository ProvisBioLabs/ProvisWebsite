/**
 * compress-images.js
 * Converts all PNG/JPG/JPEG images in the public directory to WebP
 * using Sharp (bundled with Next.js). Originals are kept unless removed manually.
 * Run with: node scripts/compress-images.js
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUBLIC_DIR = path.join(__dirname, "..", "public");

// Quality settings
const WEBP_QUALITY = 80;   // 0-100, 80 is great balance of quality vs size
const MAX_WIDTH = 1920;    // Never upscale beyond original

async function getImages(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(await getImages(full));
    } else if (/\.(png|jpe?g)$/i.test(item.name)) {
      results.push(full);
    }
  }
  return results;
}

async function compress(filePath) {
  const ext = path.extname(filePath);
  const outPath = filePath.replace(/\.(png|jpe?g)$/i, ".webp");

  try {
    const meta = await sharp(filePath).metadata();
    const width = meta.width && meta.width > MAX_WIDTH ? MAX_WIDTH : undefined;

    await sharp(filePath)
      .resize(width ? { width } : undefined)
      .webp({ quality: WEBP_QUALITY })
      .toFile(outPath);

    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outPath).size;
    const saved = (((originalSize - newSize) / originalSize) * 100).toFixed(1);

    console.log(
      `✓ ${path.relative(PUBLIC_DIR, filePath)} → ${path.basename(outPath)}  ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB  (-${saved}%)`
    );
  } catch (err) {
    console.error(`✗ Failed: ${filePath}`, err.message);
  }
}

(async () => {
  const images = await getImages(PUBLIC_DIR);
  console.log(`\nCompressing ${images.length} images to WebP...\n`);
  for (const img of images) {
    await compress(img);
  }
  console.log("\nDone! WebP files created. Update image src paths from .png/.jpg to .webp");
  console.log("Then delete the originals once you've verified everything looks correct.\n");
})();
