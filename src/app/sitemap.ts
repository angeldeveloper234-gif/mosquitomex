import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'
import { SERVICES } from '@/lib/services'

/**
 * Fecha de última revisión editorial del sitio.
 * IMPORTANTE: es un valor fijo a propósito. Usar `new Date()` haría que el
 * `lastmod` cambiara en cada build aunque el contenido no cambiara, lo que
 * degrada la confianza de Google en esa señal. Actualizar a mano al publicar
 * cambios reales de contenido.
 */
const LAST_CONTENT_UPDATE = '2026-08-07'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      // Sin barra final: Next normaliza el canonical del home a
      // `https://mosquitomex.com` (trailingSlash queda en false por defecto),
      // así que el sitemap debe declarar exactamente la misma URL.
      url: SITE.url,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE.url}/servicios`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE.url}/franquicias`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-MX': `${SITE.url}/franquicias`,
          en: `${SITE.url}/franchise`,
        },
      },
    },
    {
      // Landing de franquicias en inglés: capta inversionistas de habla inglesa.
      url: `${SITE.url}/franchise`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          'es-MX': `${SITE.url}/franquicias`,
          en: `${SITE.url}/franchise`,
        },
      },
    },
    {
      url: `${SITE.url}/blog`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]

  // Páginas de servicio: son las que capturan la búsqueda con intención de compra.
  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE.url}/servicios/${service.slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes]
}
