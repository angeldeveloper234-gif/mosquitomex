import { SITE, absoluteUrl } from './site'
import type { BlogPost } from './blog'
import { SERVICES, type FaqItem, type Service } from './services'

/**
 * Negocio de control de plagas — para la home.
 *
 * Nota: no se declara `address` ni `geo` a propósito. El negocio opera sin
 * dirección pública, así que se describe como prestador con área de servicio
 * nacional (`areaServed`). Declarar una dirección inventada sería incorrecto
 * y motivo de penalización. Si el cliente publica una dirección real, añadirla
 * aquí como `address: { '@type': 'PostalAddress', ... }`.
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PestControlService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    image: absoluteUrl(SITE.logo),
    logo: absoluteUrl(SITE.logo),
    description: SITE.description,
    slogan: SITE.slogan,
    telephone: SITE.phoneE164,
    email: SITE.email,
    areaServed: { '@type': 'Country', name: SITE.areaServed },
    priceRange: '$$',
    knowsLanguage: ['es-MX', 'en'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneE164,
        email: SITE.email,
        contactType: 'customer service',
        areaServed: 'MX',
        availableLanguage: ['Spanish', 'English'],
      },
    ],
    // Catálogo de servicios: ayuda a Google y a los motores de IA a entender
    // exactamente qué ofrece el negocio.
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de control de plagas',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.name,
          url: absoluteUrl(`/servicios/${s.slug}`),
        },
      })),
    },
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  }
}

/** Servicio individual — para cada página /servicios/[slug]. */
export function serviceSchema(service: Service) {
  const url = absoluteUrl(`/servicios/${service.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'Country', name: SITE.areaServed },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: SITE.phoneE164,
    },
  }
}

/** Preguntas frecuentes — rich results en Google y material citable por IA. */
export function faqSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/**
 * Sitio web.
 * No se declara `potentialAction` (SearchAction) porque el sitio no tiene
 * buscador propio: Google exige una página de resultados real para el
 * cuadro de búsqueda de sitelinks. Añadirlo si algún día se implementa.
 */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { '@id': `${SITE.url}/#business` },
  }
}

/** Artículo de blog. */
export function articleSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`)
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.summary,
    image: absoluteUrl(post.image),
    articleSection: post.category,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: SITE.lang,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: { '@type': 'ImageObject', url: absoluteUrl(SITE.logo) },
    },
  }
}

/** Miga de pan. items: [{name, path}] */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
