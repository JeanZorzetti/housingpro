import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { siteConfig } from '@/config/site'

const BASE = siteConfig.url

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                              lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/quem-somos`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pilares`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/servicos`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/como-funciona`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contato`,                 lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/blog`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/termos-de-servico`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/politica-de-privacidade`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.lastModified ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...postRoutes]
}
