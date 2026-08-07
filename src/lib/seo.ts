import { Metadata } from 'next'
import { SITE, absoluteUrl } from './site'

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = SITE.ogImage,
  keywords,
  type = 'website',
  publishedTime,
  noIndex = false,
  locale,
  languages,
}: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  noIndex?: boolean
  /** Sobrescribe el locale de Open Graph (p. ej. 'en_US' en páginas en inglés). */
  locale?: string
  /**
   * Versiones equivalentes en otros idiomas, para hreflang.
   * Ej.: { 'es-MX': '/franquicias', 'en': '/franchise', 'x-default': '/franquicias' }
   */
  languages?: Record<string, string>
}): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    title,
    description,
    keywords: keywords ?? [...SITE.keywords],
    alternates: {
      canonical: url,
      ...(languages
        ? {
            languages: Object.fromEntries(
              Object.entries(languages).map(([lang, p]) => [lang, absoluteUrl(p)])
            ),
          }
        : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: locale ?? SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
