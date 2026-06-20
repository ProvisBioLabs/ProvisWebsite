const fs = require('fs');
let content = fs.readFileSync('lib/data/usProducts.ts', 'utf8');

// There seem to be two declarations of products. Let's find all slugs and their objects.
const objects = [];
const parts = content.split(/\r?\n    \{\r?\n        id:\s*'[0-9]+',/);

parts.forEach((part, idx) => {
    if (idx === 0) return; // Header
    const slugReg = /slug:\s*'([^']+)'/;
    const m = part.match(slugReg);
    if (m) {
        let block = '    {\n        id: \'' + (idx) + '\',\n' + part;
        const endBlock = block.lastIndexOf('    }');
        if (endBlock !== -1) {
            block = block.substring(0, endBlock + 5);
        }
        objects.push({ slug: m[1], block });
    }
});

const slugMap = {};
objects.forEach(obj => {
    slugMap[obj.slug] = obj.block;
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

let finalArray = 'export const products: Product[] = [\n';
desiredOrder.forEach((slug, i) => {
    if (slugMap[slug]) {
        let block = slugMap[slug];
        
        if (slug === 'trypsin-ms') {
            block = block.replace(/image:\s*'[^']+'/, "image: '/products/typsinmsgrade.png'");
        } else if (slug === 'trypsin-edta') {
            block = block.replace(/image:\s*'[^']+'/, "image: '/products/trypsinedta.png'");
        }
        
        finalArray += block;
        if (i < desiredOrder.length - 1) finalArray += ',';
        finalArray += '\n';
    } else {
        console.log('Missing: ' + slug);
    }
});
finalArray += '];\n\nexport function getProductBySlug(slug: string): Product | undefined {\n    return products.find(p => p.slug === slug);\n}\n';

const header = `export interface ProductGrade {
    name: string;
    sku: string;
    description: string;
}

export interface QuickSpec {
    purity?: string;
    activity?: string;
    endotoxin?: string;
    storage?: string;
    formulation?: string;
    molecularWeight?: string;
    casNumber?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: 'api' | 'reagent' | 'cdmo';
    grade: string;
    tagline: string;
    shortDescription: string;
    description: string;
    longDescription?: string;
    image: string;
    aof?: boolean;
    badge?: string;
    casNumber?: string;
    dmfAvailable?: boolean;
    keyFeatures?: string[];
    applications: string[];
    href: string;
    seoTitle?: string;
    seoDescription?: string;
    quickSpecs?: QuickSpec;
    workflow?: string[];
    grades?: ProductGrade[];
    documentation?: { label: string; url: string }[];
    technicalImages?: { url: string; caption: string }[];
    cleavageImages?: string[];
    overview?: string;
    benefits?: string[];
    specifications?: { parameter: string; details: string }[];
    skuList?: { sku: string; catNo: string; description: string; price?: string }[];
    faqs?: { question: string; answer: string }[];
}

`;

fs.writeFileSync('lib/data/usProducts.ts', header + finalArray);
console.log('File successfully rebuilt.');
