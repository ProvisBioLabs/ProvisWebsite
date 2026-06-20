const fs = require('fs');
let content = fs.readFileSync('lib/data/usProducts.ts', 'utf8');

content = content.replace(/slug:\s*'trypsin-ms'[\s\S]*?image:\s*'[^']+'/, match => match.replace(/image:\s*'[^']+'/, image: '/products/typsinmsgrade.png'));
content = content.replace(/slug:\s*'trypsin-edta'[\s\S]*?image:\s*'[^']+'/, match => match.replace(/image:\s*'[^']+'/, image: '/products/trypsinedta.png'));

// We need to reorder the products array
// The products array starts at export const products: Product[] = [ and ends at ];\n\nexport function
const startIndex = content.indexOf('export const products: Product[] = [');
const endIndex = content.indexOf('];\n\nexport function');
if (startIndex !== -1 && endIndex !== -1) {
  const arrayContent = content.substring(startIndex, endIndex + 2);
  // This is tricky to parse safely with regex, but since we are just reordering, maybe we can extract the blocks by splitting on     {\n        id: or similar?
  // Let's parse it using TS compiler or just simple split
}

fs.writeFileSync('lib/data/usProducts.ts', content);
console.log('Images updated.');

