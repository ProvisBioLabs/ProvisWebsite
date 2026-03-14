import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://provisbiolabs.com';

    const routes = [
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
        '/founder',
        '/contact',
    ];

    const productRoutes = [
        '/l-asparaginase',
        '/provinase',
        '/pngase-f',
        '/pegaspargase',
        '/streptokinase',
        '/sodium-hyaluronate',
        '/recombinant-albumin',
        '/trypsin',
        '/carboxypeptidase-b',
        '/streptavidin',
        '/pngase-f-flash',
        '/enterokinase',
    ];

    const allRoutes = [...routes, ...productRoutes].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' || route === '/products' || route === '/news' || route === '/blogs') ? 'daily' : 'weekly' as any,
        priority: route === '' ? 1 : (route.includes('/products') || route === '/cdmo') ? 0.9 : 0.8,
    }));

    return allRoutes;
}
