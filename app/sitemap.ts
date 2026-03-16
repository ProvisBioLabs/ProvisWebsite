import { MetadataRoute } from 'next';
import blogsData from './blogs/blogsData.json';
import { products } from '../lib/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://provisbiolabs.com';

    // Static Routes
    const staticRoutes = [
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

    const staticSitemap = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' || route === '/products' || route === '/news' || route === '/blogs') ? 'daily' : 'weekly' as any,
        priority: route === '' ? 1 : (route.includes('/products') || route === '/cdmo') ? 0.9 : 0.8,
    }));

    // Dynamic Product Routes
    const productSitemap = products.map((product) => ({
        url: `${baseUrl}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as any,
        priority: 0.8,
    }));

    // Dynamic Blog Routes
    const blogSitemap = blogsData.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as any,
        priority: 0.7,
    }));

    return [...staticSitemap, ...productSitemap, ...blogSitemap];
}
