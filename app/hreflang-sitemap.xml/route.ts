import { NextResponse } from 'next/server';
import blogsData from '../blogs/blogsData.json';
import { products } from '../../lib/data/products';

const BASE = 'https://provisbiolabs.com';

const LOCALES = [
    { lang: 'en-US' },
    { lang: 'en-GB' },
    { lang: 'en-SG' },
    { lang: 'en-KR' },
    { lang: 'en-NL' },
    { lang: 'en-FR' },
    { lang: 'en-CA' },
    { lang: 'x-default' },
] as const;

const STATIC_PATHS = [
    '',
    '/about',
    '/science',
    '/products',
    '/products/bio-apis',
    '/products/recombinant-bio-reagents',
    '/biosimilars',
    '/synthetic-peptides',
    '/cdmo',
    '/blogs',
    '/news',
    '/events',
    '/partners',
    '/careers',
    '/contact',
];

/** Generate xhtml:link alternates for a given absolute URL (all locales point to same URL) */
function alternates(url: string): string {
    return LOCALES.map(
        ({ lang }) =>
            `    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />`
    ).join('\n');
}

/** Generate a <url> block */
function urlBlock(loc: string): string {
    return `  <url>\n    <loc>${loc}</loc>\n${alternates(loc)}\n  </url>`;
}

export async function GET() {
    const allUrls: string[] = [
        // Static pages
        ...STATIC_PATHS.map((p) => `${BASE}${p}`),
        // Product pages
        ...products.map((p: { slug: string }) => `${BASE}/${p.slug}`),
        // Blog pages
        ...blogsData.map((b: { slug: string }) => `${BASE}/blogs/${b.slug}`),
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(urlBlock).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
        },
    });
}
