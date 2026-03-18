const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Ensure we installed sharp correctly
if (!sharp) {
  console.error("Sharp not found. Run npm i sharp --legacy-peer-deps");
  process.exit(1);
}

const imagesPath = path.join(process.cwd(), 'images-to-optimize.json');
const publicDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(imagesPath)) {
  console.error("No images to optimize found");
  process.exit(1);
}

const images = JSON.parse(fs.readFileSync(imagesPath, 'utf8'));
const filesToUpdate = [];

console.log(`Optimizing ${images.length} images...`);

(async () => {
  for (const img of images) {
    try {
      if (img.path.endsWith('.webp')) continue; // Already a webp or we don't want to convert it
      
      const inputPath = img.fullPath;
      const parsedPath = path.parse(inputPath);
      // We will output to same directory but .webp
      const outputPath = path.join(parsedPath.dir, parsedPath.name + '.webp');
      const relInputPath = img.path.replace(/\\/g, '/');
      const relOutputPath = relInputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

      console.log(`\nProcessing: ${relInputPath} (${(img.size / 1024 / 1024).toFixed(2)} MB)`);
      
      // Converting to WebP with good compression
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const outStat = fs.statSync(outputPath);
      const savedBytes = img.size - outStat.size;
      const savedPercent = ((savedBytes / img.size) * 100).toFixed(1);

      console.log(`  -> Optimized to WebP: ${(outStat.size / 1024 / 1024).toFixed(2)} MB (Saved ${savedPercent}%)`);
      
      filesToUpdate.push({
        oldExp: relInputPath,
        newExp: relOutputPath,
        oldPath: inputPath,
        newPath: outputPath
      });
      
    } catch (e) {
      console.error(`  -> Error processing ${img.path}:`, e.message);
    }
  }

  // Save the mapping so we can update the source code
  fs.writeFileSync(path.join(process.cwd(), 'optimization-map.json'), JSON.stringify(filesToUpdate, null, 2));
  console.log(`\nOptimization complete. Mapping saved to optimization-map.json.`);
})();
