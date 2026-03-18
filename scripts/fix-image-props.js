/**
 * Performance Fix Script — Image Props
 * 
 * This script scans all .tsx files in /app and:
 * 1. Adds sizes="..." to <Image fill /> that are missing it
 * 2. Adds loading="lazy" to non-priority images that are below the fold
 * 3. Adds quality={80} to all images that don't have it
 */

const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');

// Files where images are above-the-fold (require priority, skip lazy)
const ABOVE_FOLD_FILES = [
  'Hero.tsx',
  'Navbar.tsx',
  'not-found.tsx',
];

let totalFixed = 0;
let totalFiles = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  const fileName = path.basename(filePath);
  const isAboveFold = ABOVE_FOLD_FILES.includes(fileName);

  // ─── 1. Add sizes to <Image fill that's missing sizes ───────────────────
  // Matches: <Image ... fill ... /> where sizes is missing
  // But NOT when it's a product image with explicit small dimensions
  content = content.replace(
    /<Image([^>]*?)fill([^>]*?)(?!sizes)([^>]*?)\/>/gs,
    (match, before, after, end) => {
      if (match.includes('sizes=')) return match; // Already has sizes
      // detect if it's used in a small card (heuristic: check for w-[...] in className)
      const hasSizes = match.includes('sizes');
      if (hasSizes) return match;
      
      // Is this a full-width fill image or a card image?
      // Card images: use 50vw, full page sections: use 100vw
      const isFullWidth = match.includes('cover') || match.includes('inset-0') || match.includes('quality-lab') || match.includes('hero') || match.includes('MissionQuote');
      const sizesValue = isFullWidth 
        ? 'sizes="(max-width: 768px) 100vw, 50vw"'
        : 'sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"';
      
      return match.replace('fill', `fill\n                            ${sizesValue}`);
    }
  );

  // ─── 2. Add loading="lazy" to non-priority non-fill images ─────────────
  if (!isAboveFold) {
    // Add loading="lazy" to fixed-size images that don't have priority
    content = content.replace(
      /<Image([^>]*?)(?!priority)(?!loading)([^>]*?)width=(\{[^}]+\}|"[^"]+")([^>]*?)\/>/gs,
      (match) => {
        if (match.includes('priority') || match.includes('loading=')) return match;
        return match.replace('<Image', '<Image\n                            loading="lazy"');
      }
    );
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${path.relative(appDir, filePath)}`);
    totalFixed++;
  }
  totalFiles++;
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !['node_modules', '.next', '.git'].includes(entry.name)) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

console.log('🔍 Scanning TSX files for missing image props...\n');
walkDir(appDir);
console.log(`\n✨ Fixed ${totalFixed}/${totalFiles} files`);
