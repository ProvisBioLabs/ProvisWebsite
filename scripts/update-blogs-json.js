const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "app", "blogs", "blogsData.json");
let content = fs.readFileSync(filePath, "utf8");
// Replace all .png, .jpg, .jpeg references in the blog data with .webp
const updated = content
  .replace(/\/blogs\/([^"\\]+)\.png/g, "/blogs/$1.webp")
  .replace(/\/blogs\/([^"\\]+)\.jpeg/g, "/blogs/$1.webp")
  .replace(/\/blogs\/([^"\\]+)\.jpg/g, "/blogs/$1.webp");
fs.writeFileSync(filePath, updated, "utf8");
console.log("blogsData.json updated - all .png/.jpg/.jpeg → .webp");
