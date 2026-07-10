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
}: {
  title: string
  description: string
  path?: string
  image?: string
  keywords?: string[]
  type?: 'website' | 'article'
  publishedTime?: string
  noIndex?: boolean
}): Metadata {
  const url = absoluteUrl(path)
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image)

  return {
    title,
    description,
    keywords: keywords ?? [...SITE.keywords],
    alternates: { canonical: url },
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
      locale: SITE.locale,
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
