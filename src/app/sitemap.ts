import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
