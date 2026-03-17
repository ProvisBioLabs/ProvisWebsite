import { MetadataRoute } from 'next';
import blogsData from './blogs/blogsData.json';
import { products } from '../lib/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://provisbiolabs.com';

    // Static Routes
    const staticRoutes: { path: string; freq: 'daily' | 'weekly' | 'monthly'; priority: number }[] = [
        { path: '', freq: 'daily', priority: 1 },
        { path: '/about', freq: 'weekly', priority: 0.8 },
        { path: '/science', freq: 'weekly', priority: 0.8 },
        { path: '/products', freq: 'daily', priority: 0.9 },
        { path: '/products/bio-apis', freq: 'weekly', priority: 0.9 },
        { path: '/products/recombinant-bio-reagents', freq: 'weekly', priority: 0.9 },
        { path: '/biosimilars', freq: 'weekly', priority: 0.8 },
        { path: '/synthetic-peptides', freq: 'weekly', priority: 0.8 },
        { path: '/cdmo', freq: 'weekly', priority: 0.9 },
        { path: '/blogs', freq: 'daily', priority: 0.8 },
        { path: '/news', freq: 'daily', priority: 0.8 },
        { path: '/events', freq: 'weekly', priority: 0.7 },
        { path: '/partners', freq: 'weekly', priority: 0.6 },
        { path: '/careers', freq: 'weekly', priority: 0.6 },
        { path: '/contact', freq: 'weekly', priority: 0.7 },
        { path: '/terms', freq: 'monthly', priority: 0.3 },
        { path: '/privacy-policy', freq: 'monthly', priority: 0.3 },
        { path: '/cookie-policy', freq: 'monthly', priority: 0.3 },
    ];

    const staticSitemap = staticRoutes.map(({ path, freq, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date('2025-01-01'),
        changeFrequency: freq,
        priority,
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
