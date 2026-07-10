import { SITE, absoluteUrl } from './site'
import type { BlogPost } from './blog'

/** Negocio local de control de plagas — para la home. */
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
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: { '@type': 'Country', name: SITE.areaServed },
    priceRange: '$$',
    ...(SITE.socials.length ? { sameAs: SITE.socials } : {}),
  }
}

/** Sitio web con acción de búsqueda potencial. */
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
