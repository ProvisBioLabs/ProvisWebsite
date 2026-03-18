/**
 * Image optimization script — run once with: node scripts/optimize-images.mjs
 * Requires: sharp (a Next.js transitive dependency)
 *
 * Strategy: write each optimized file to a NEW path (products/bioapi-s.webp etc.)
 * so we never try to overwrite files that the dev server has open.
 * The main code files should reference the -s (small/optimised) variants.
 */

import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");

async function run() {
  const jobs = [
    {
      src: path.join(publicDir, "products/bioapi.webp"),
      dest: path.join(publicDir, "products/bioapi-s.webp"),
      width: 900,
      quality: 82,
    },
    {
      src: path.join(publicDir, "products/biosimilars.webp"),
      dest: path.join(publicDir, "products/biosimilars-s.webp"),
      width: 900,
      quality: 80,
    },
    {
      src: path.join(publicDir, "hero-bg.webp"),
      dest: path.join(publicDir, "hero-bg-s.webp"),
      width: null, // keep original dimensions — just recompress more aggressively
      quality: 68,
    },
    {
      src: path.join(publicDir, "products/syntheticpeptides.png"),
      dest: path.join(publicDir, "products/syntheticpeptides.webp"),
      width: 500,
      quality: 80,
    },
  ];

  for (const job of jobs) {
    if (!fs.existsSync(job.src)) {
      console.warn(`⚠  Skipping (not found): ${job.src}`);
      continue;
    }

    const originalSize = fs.statSync(job.src).size;

    let pipeline = sharp(job.src);
    if (job.width) {
      pipeline = pipeline.resize({ width: job.width, withoutEnlargement: true });
    }
    await pipeline.webp({ quality: job.quality }).toFile(job.dest);

    const newSize = fs.statSync(job.dest).size;
    const saving = ((1 - newSize / originalSize) * 100).toFixed(1);
    console.log(
      `✓ ${path.basename(job.dest).padEnd(30)} ${(originalSize / 1024).toFixed(1).padStart(7)} KiB → ${(newSize / 1024).toFixed(1).padStart(7)} KiB  (saves ${saving}%)`
    );
  }

  console.log("\nDone! Old large files (bioapi.webp, biosimilars.webp, hero-bg.webp) can be deleted once verified.");
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
