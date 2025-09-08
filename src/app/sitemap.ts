import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = new Date('2025-09-08T00:00:00Z');

  return [
    {
      url: 'https://investba.com.br',
      lastModified: staticDate,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://investba.com.br/#sobre',
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://investba.com.br/#investimentos',
      lastModified: staticDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://investba.com.br/#contato',
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
