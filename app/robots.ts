import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://provisbiolabs.com/sitemap.xml',
      'https://provisbiolabs.com/hreflang-sitemap.xml',
    ],
  };
}
