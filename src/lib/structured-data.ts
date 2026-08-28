import { SITE, absoluteUrl } from './site'
import type { BlogPost } from './blog'
import { SERVICES, type FaqItem, type Service } from './services'
import { CIUDADES, rutaCiudad, type Ciudad } from './cities'
import { ANIO_APERTURA, CONDADOS, ESTADO } from './valle-texas'

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
    /**
     * Las cuatro ciudades prioritarias PRIMERO, cada una con su entidad
     * federativa en `containedInPlace`, y el país al final.
     *
     * El orden es el de CIUDADES, que sale del origen real de las consultas:
     * Ciudad de México primero. El país se mantiene porque el servicio sí es
     * nacional — quitarlo para "enfocar" sería declarar menos cobertura de la
     * que hay.
     *
     * La Ciudad de México no lleva `containedInPlace`: es una entidad
     * federativa por derecho propio y no está dentro de ningún estado.
     */
    areaServed: [
      ...CIUDADES.map((c) => ({
        '@type': 'City',
        name: c.nombre,
        ...(c.estadoOficial === c.nombre
          ? {}
          : {
              containedInPlace: {
                '@type': 'State',
                name: c.estadoOficial,
              },
            }),
      })),
      { '@type': 'Country', name: SITE.areaServed },
    ],
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

/**
 * Servicio de control de plagas acotado a una ciudad.
 *
 * Es un `Service` con `areaServed` de una sola ciudad y su entidad federativa,
 * ligado al negocio por `provider`. Eso le dice a Google que la página trata de
 * esa ciudad, sin declarar una sucursal que no existe: el negocio no tiene
 * direcciones publicas confirmadas.
 */
export function cityServiceSchema(ciudad: Ciudad) {
  const url = absoluteUrl(rutaCiudad(ciudad.slug))
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: 'Control de plagas',
    name: ciudad.es.h1,
    description: ciudad.es.metaDescription,
    url,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: {
      '@type': 'City',
      name: ciudad.nombre,
      ...(ciudad.estadoOficial === ciudad.nombre
        ? {}
        : { containedInPlace: { '@type': 'State', name: ciudad.estadoOficial } }),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      servicePhone: SITE.phoneE164,
      serviceUrl: url,
    },
  }
}

/**
 * Valle de Texas / Rio Grande Valley.
 *
 * ── LO QUE SE DECLARA DEPENDE DE SI SE OPERA ─────────────────────────────
 *
 * Con ESTADO='presente' se emite un `Service` con `areaServed` en el Rio
 * Grande Valley y sus cuatro condados, ligado al negocio por `provider`. Eso
 * es lo que le dice a Google "damos este servicio en esta zona".
 *
 * Con ESTADO='proximamente' NO se emite ese Service. Se emite una `WebPage`
 * informativa. El motivo: `areaServed` en schema.org significa "acá presto el
 * servicio", en presente. Declararlo antes de operar es la version estructurada
 * de la misma mentira que no decimos en el texto, y ademas es justo el tipo de
 * dato que Google contrasta contra la realidad.
 *
 * La pagina se indexa igual: lo que la hace indexable es el contenido sobre las
 * plagas del Valle, que es verdadero hoy.
 *
 * NO hay `address`, ni `telephone` local, ni `aggregateRating`. No existen.
 */
export function valleTexasSchema() {
  const url = absoluteUrl('/valle-de-texas')

  const zona = [
    { '@type': 'Place', name: 'Rio Grande Valley' },
    ...CONDADOS.map((c) => ({
      '@type': 'AdministrativeArea',
      name: c.nombre,
      containedInPlace: { '@type': 'State', name: 'Texas' },
    })),
  ]

  if (ESTADO !== 'presente') {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#page`,
      url,
      name: 'Control de Plagas en el Valle de Texas | Pest Control Rio Grande Valley',
      inLanguage: ['es-MX', 'en-US'],
      isPartOf: { '@id': `${SITE.url}/#website` },
      about: { '@id': `${SITE.url}/#business` },
      description:
        `Apertura prevista en el Rio Grande Valley para ${ANIO_APERTURA}. La pagina describe el problema de plagas de la zona; el servicio todavia no esta activo.`,
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType: 'Pest control',
    name: 'Pest control in the Rio Grande Valley',
    description:
      'Control de plagas en el Valle de Texas: mosquitos, hormiga de fuego y termitas. Atencion en espanol e ingles.',
    url,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: zona,
    availableLanguage: ['es', 'en'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: SITE.phoneE164,
    },
  }
}
