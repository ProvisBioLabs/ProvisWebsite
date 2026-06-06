import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://www.provisbiolabs.com/sitemap.xml',
      'https://www.provisbiolabs.com/hreflang-sitemap.xml',
    ],
  };
}
