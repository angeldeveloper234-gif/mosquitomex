import { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'
import { getAllPosts } from '@/lib/blog'
import { SERVICES } from '@/lib/services'
import { CIUDADES, rutaCiudad } from '@/lib/cities'

/**
 * Fecha de última revisión editorial del sitio.
 * IMPORTANTE: es un valor fijo a propósito. Usar `new Date()` haría que el
 * `lastmod` cambiara en cada build aunque el contenido no cambiara, lo que
 * degrada la confianza de Google en esa señal. Actualizar a mano al publicar
 * cambios reales de contenido.
 */
const LAST_CONTENT_UPDATE = '2026-08-21'

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
    {
      // Contacto va alto: es la página que convierte, y hasta ahora el sitio
      // no tenía ninguna URL propia para "contacto mosquitomex".
      url: `${SITE.url}/contacto`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      // Nosotros va con 0.9 y no con el 0.5 habitual de una institucional.
      // Es la única página de toda la red que dice "PCP", que es la consulta
      // que más apariciones trae y la que hoy no convierte en ningún clic.
      url: `${SITE.url}/nosotros`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]

  /**
   * Valle de Texas. Entra al sitemap porque SI se indexa: tiene contenido
   * propio y util sobre la zona, independientemente de si el servicio ya esta
   * activo. Lo que cambia con el estado es lo que la pagina afirma, no si
   * merece existir. Ver src/lib/valle-texas.ts.
   */
  const valleTexas: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/valle-de-texas`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]

  /**
   * Páginas por ciudad, en orden de prioridad de negocio.
   *
   * Ciudad de México va con 0.95, por encima de las otras tres y de las
   * páginas de servicio: es de donde entra hoy la mayoría de las consultas.
   * El orden lo define el arreglo CIUDADES, no una lista aparte.
   */
  const cityRoutes: MetadataRoute.Sitemap = [
    {
      // La madre de la sección. Va con 0.9, por encima de tres de las cuatro
      // ciudades y por debajo de la Ciudad de México, que sigue siendo la que
      // más consultas trae.
      url: `${SITE.url}/control-de-plagas`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...CIUDADES.map((ciudad, i) => ({
      url: `${SITE.url}${rutaCiudad(ciudad.slug)}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly' as const,
      priority: i === 0 ? 0.95 : 0.85,
    })),
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

  return [...staticRoutes, ...valleTexas, ...cityRoutes, ...serviceRoutes, ...blogRoutes]
}
