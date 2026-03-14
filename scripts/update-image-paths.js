/**
 * update-image-paths.js
 * Replaces all /path/to/image.png and .jpg/.jpeg references in .tsx/.ts/.js
 * files with .webp — but ONLY for files that now exist as .webp in /public.
 */

const fs = require("fs");
const path = require("path");

const PUBLIC = path.join(__dirname, "..", "public");
const SRC = path.join(__dirname, "..", "app");
const LIB = path.join(__dirname, "..", "lib");

// Build a set of WebP files that exist
function collectWebP(dir, base = dir, results = new Set()) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      collectWebP(full, base, results);
    } else if (item.name.endsWith(".webp")) {
      // Store as URL path e.g. /partners/amerigo.webp
      results.add("/" + path.relative(base, full).replace(/\\/g, "/"));
    }
  }
  return results;
}

function processDir(dir, webpFiles) {
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      processDir(full, webpFiles);
    } else if (/\.(tsx|ts|js)$/.test(item.name)) {
      let content = fs.readFileSync(full, "utf8");
      let changed = false;
      // Replace .png and .jpg/.jpeg references when a webp counterpart exists
      content = content.replace(/(["'`])([^"'`\s]+)\.(png|jpe?g)(["'`])/gi, (match, q1, base, ext, q2) => {
        const webpPath = base + ".webp";
        // Handle relative and absolute paths
        const cleanBase = base.startsWith("/") ? base : null;
        if (cleanBase && webpFiles.has(cleanBase + ".webp")) {
          changed = true;
          return `${q1}${webpPath}${q2}`;
        }
        // Also handle filenames without leading slash (e.g. "who-gmp.png")
        const candidates = [...webpFiles].filter(f => f.endsWith("/" + base.split("/").pop() + ".webp"));
        if (candidates.length === 1) {
          changed = true;
          return `${q1}${base}.webp${q2}`;
        }
        return match;
      });
      if (changed) {
        fs.writeFileSync(full, content, "utf8");
        console.log(`✓ Updated: ${path.relative(path.join(__dirname, ".."), full)}`);
      }
    }
  }
}

const webpFiles = collectWebP(PUBLIC);
console.log(`\nFound ${webpFiles.size} WebP files.\n`);
processDir(SRC, webpFiles);
try { processDir(LIB, webpFiles); } catch {}
console.log("\nDone! All .png/.jpg references updated to .webp where WebP exists.\n");
