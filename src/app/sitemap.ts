import { MetadataRoute } from 'next';
import { accommodations } from '@/data/accommodation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://nishigandhfarms.com';

  const accommodationUrls = accommodations.map((acc) => ({
    url: `${baseUrl}/accommodation/${acc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/resort',
    '/accommodation',
    '/activities',
    '/experiences',
    '/nature',
    '/explore-koyana',
    '/restaurant',
    '/gallery',
    '/offers',
    '/reviews',
    '/contact',
    '/faq',
    '/location',
    '/booking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...staticRoutes, ...accommodationUrls];
}
