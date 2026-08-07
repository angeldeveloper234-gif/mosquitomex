import { translations } from './translations'

export interface BlogPost {
  slug: string
  title: string
  summary: string
  content: string
  image: string
  category: string
  datePublished: string
  dateModified: string
}

interface RawArticle {
  id: string
  title: string
  summary: string
  content: string
  image: string
  category: string
}

// Fechas de publicación (editorial). Actualizar al publicar contenido nuevo.
const DATES: Record<string, { published: string; modified: string }> = {
  'mosquito-guide': { published: '2025-03-12', modified: '2026-08-07' },
  'organic-misting': { published: '2025-04-09', modified: '2026-08-07' },
  // Artículos reescritos con contenido de control de plagas (agosto 2026).
  // Los originales, sobre confort exterior, están en docs/blog-articulos-originales.md
  'como-eliminar-cucarachas': { published: '2026-08-07', modified: '2026-08-07' },
  'senales-de-roedores-en-casa': { published: '2026-08-07', modified: '2026-08-07' },
}

const FALLBACK_DATE = { published: '2026-01-01', modified: '2026-01-01' }

export function getAllPosts(): BlogPost[] {
  const articles = (translations.es.blog.articles as RawArticle[]) ?? []
  return articles.map((a) => {
    const dates = DATES[a.id] ?? FALLBACK_DATE
    return {
      slug: a.id,
      title: a.title,
      summary: a.summary,
      content: a.content,
      image: a.image,
      category: a.category,
      datePublished: dates.published,
      dateModified: dates.modified,
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}
