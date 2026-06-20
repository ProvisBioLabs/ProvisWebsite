const fs = require('fs');
let content = fs.readFileSync('lib/data/usProducts.ts', 'utf8');

const startIndex = content.indexOf('export const products: Product[] = [');
const endIndex = content.indexOf('];\n\nexport function');

const prefix = content.substring(0, startIndex + 36);
const suffix = content.substring(endIndex);
const arrayStr = content.substring(startIndex + 36, endIndex);

// A simple way to split objects is to use a regex that matches \n    },\n    {\n
// But the first object starts with \n    { and the last ends with \n    }
const parts = arrayStr.split(/\r?\n    },\r?\n    {/);

// Fix the parts to represent the full object blocks
for (let i = 0; i < parts.length; i++) {
    if (i > 0) parts[i] = '    {' + parts[i];
    if (i < parts.length - 1) parts[i] = parts[i] + '\n    }';
}
// Strip leading/trailing brackets from first/last if needed
parts[0] = parts[0].replace(/^\r?\n    {/, '    {');
parts[parts.length - 1] = parts[parts.length - 1].replace(/\r?\n    }$/, '\n    }');

const slugMap = {};
parts.forEach(part => {
    const slugMatch = part.match(/slug:\s*'([^']+)'/);
    if (slugMatch) {
        slugMap[slugMatch[1]] = part;
    } else {
        console.log('No slug found in a part');
    }
});

const desiredOrder = [
    'provinase',
    'pngase-f',
    'pngase-f-flash',
    'carboxypeptidase-b-gmp',
    'carboxypeptidase-b-sequencing',
    'streptavidin',
    'trypsin',
    'trypsin-ms',
    'trypsin-edta',
    'enterokinase',
    'kex2-protease',
    'recombinant-albumin',
    'l-asparaginase',
    'pegaspargase',
    'streptokinase',
    'sodium-hyaluronate'
];

let newArrayStr = '\n';
desiredOrder.forEach((slug, idx) => {
    if (slugMap[slug]) {
        newArrayStr += slugMap[slug];
        if (idx < desiredOrder.length - 1) {
            newArrayStr += ',\n';
        }
    } else {
        console.log('Missing slug: ' + slug);
    }
});
newArrayStr += '\n';

fs.writeFileSync('lib/data/usProducts.ts', prefix + newArrayStr + suffix);
console.log('Reordered successfully.');

