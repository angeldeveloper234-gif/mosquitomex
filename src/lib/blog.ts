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
const DATES: Record<string, string> = {
  'mosquito-guide': '2025-03-12',
  'organic-misting': '2025-04-09',
  'mist-cooling': '2025-05-21',
  'outdoor-heating': '2025-06-18',
}

export function getAllPosts(): BlogPost[] {
  const articles = (translations.es.blog.articles as RawArticle[]) ?? []
  return articles.map((a) => ({
    slug: a.id,
    title: a.title,
    summary: a.summary,
    content: a.content,
    image: a.image,
    category: a.category,
    datePublished: DATES[a.id] ?? '2025-01-01',
    dateModified: DATES[a.id] ?? '2025-01-01',
  }))
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}
