'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { FadeUp } from '@/components/animations/FadeUp'

interface Article {
  id: string
  title: string
  summary: string
  content: string
  image: string
  category: string
}

export function Blog() {
  const { t, language } = useLanguage()

  // Extrae la lista traducida o cae al español por defecto.
  const articles = (translations[language]?.blog?.articles || translations['es']?.blog?.articles) as Article[]

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900 border-t border-b border-gray-100 dark:border-slate-800/60 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[3rem]">
          <FadeUp>
            <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.15] text-[#111111] dark:text-slate-100">
              {t('blog.titlePre')}<span className="text-[#ce1126]">{t('blog.titleHighlight')}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-[1rem] mx-auto text-gray-600 dark:text-slate-400 text-[1rem] md:text-[1.125rem] leading-relaxed">
              {t('blog.description')}
            </p>
          </FadeUp>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {articles.map((article, index) => (
            <FadeUp key={article.id} delay={index * 0.1}>
              <Link
                href={`/blog/${article.id}`}
                className="group flex flex-col h-full bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Article Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute top-[0.75rem] left-[0.75rem] bg-[#ce1126] text-white text-[0.625rem] md:text-[0.6875rem] font-black uppercase tracking-widest px-[0.625rem] py-[0.25rem] select-none rounded-none">
                    {article.category}
                  </span>
                </div>

                {/* Card Info Section */}
                <div className="flex flex-col flex-grow p-[1.25rem] space-y-[0.75rem]">
                  <h3 className="text-[1.125rem] font-black text-[#111111] dark:text-slate-100 uppercase tracking-tight group-hover:text-[#ce1126] transition-colors leading-[1.25] line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[0.875rem] text-gray-500 dark:text-slate-400 font-medium normal-case tracking-normal leading-relaxed line-clamp-3 flex-grow">
                    {article.summary}
                  </p>

                  <div className="pt-[0.5rem] flex items-center gap-[0.5rem] text-[0.75rem] font-bold text-[#ce1126] uppercase tracking-wider group/link">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="size-[0.875rem] transition-transform duration-200 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Ver todo el blog */}
        <div className="mt-[3rem] flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#ce1126] text-white font-black text-[0.8125rem] px-7 py-3.5 uppercase tracking-wide transition-colors"
          >
            {t('blog.viewAll')}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
