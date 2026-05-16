'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import { FadeUp } from '@/components/animations/FadeUp'
import { Button } from '@/components/ui/button'

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
  const [activeArticle, setActiveArticle] = useState<Article | null>(null)

  // Block body scroll when modal is open to ensure high-fidelity UX
  useEffect(() => {
    if (activeArticle) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeArticle])

  // Safely extract the translated article list or default to Spanish fallback
  const articles = (translations[language]?.blog?.articles || translations['es']?.blog?.articles) as Article[]

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900 border-t border-b border-gray-100 dark:border-slate-800/60 overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-[3rem]">
          <FadeUp>
            <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.15] text-[#082135] dark:text-slate-100">
              {t('blog.titlePre')}<span className="text-[#e82536]">{t('blog.titleHighlight')}</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-[1rem] mx-auto text-gray-600 dark:text-slate-400 text-[1rem] md:text-[1.125rem] leading-relaxed">
              {t('blog.description')}
            </p>
          </FadeUp>
        </div>

        {/* Articles Grid - Sharp, responsive, premium layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {articles.map((article, index) => (
            <FadeUp key={article.id} delay={index * 0.1}>
              <div 
                onClick={() => setActiveArticle(article)}
                className="group flex flex-col h-full bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 rounded-none shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
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
                  {/* Category Tag Overlay */}
                  <span className="absolute top-[0.75rem] left-[0.75rem] bg-[#e82536] text-white text-[0.625rem] md:text-[0.6875rem] font-black uppercase tracking-widest px-[0.625rem] py-[0.25rem] select-none rounded-none">
                    {article.category}
                  </span>
                </div>

                {/* Card Info Section */}
                <div className="flex flex-col flex-grow p-[1.25rem] space-y-[0.75rem]">
                  <h3 className="text-[1.125rem] font-black text-[#082135] dark:text-slate-100 uppercase tracking-tight group-hover:text-[#e82536] transition-colors leading-[1.25] line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-[0.875rem] text-gray-500 dark:text-slate-400 font-medium normal-case tracking-normal leading-relaxed line-clamp-3 flex-grow">
                    {article.summary}
                  </p>
                  
                  {/* Read More Trigger Link */}
                  <div className="pt-[0.5rem] flex items-center gap-[0.5rem] text-[0.75rem] font-bold text-[#e82536] uppercase tracking-wider group/link">
                    <span>{t('blog.readMore')}</span>
                    <ArrowRight className="size-[0.875rem] transition-transform duration-200 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Reader Modal Overlay - High-fidelity visual presentation */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-[1rem] md:p-[2rem]">
            {/* Dark glassmorphism background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-[#082135]/80 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[48rem] max-h-[85vh] md:max-h-[80vh] bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-none shadow-2xl flex flex-col overflow-hidden z-10"
            >
              {/* Close Button - Meets 44x44px mobile touch targets perfectly */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-[1rem] right-[1rem] z-20 flex items-center justify-center w-[2.75rem] h-[2.75rem] text-white bg-black/40 hover:bg-[#e82536] transition-colors border border-white/20 hover:border-transparent rounded-none focus:outline-none"
                aria-label={t('blog.close')}
              >
                <X className="size-[1.25rem]" />
              </button>

              {/* Scrollable Article Area */}
              <div className="overflow-y-auto flex-1">
                {/* Hero Header Image */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-900">
                  <Image
                    src={activeArticle.image}
                    alt={activeArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48rem"
                    className="object-cover"
                    priority
                  />
                  {/* Subtle dramatic visual gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category overlay */}
                  <span className="absolute bottom-[1.25rem] left-[1.5rem] bg-[#e82536] text-white text-[0.6875rem] md:text-[0.75rem] font-black uppercase tracking-widest px-[0.75rem] py-[0.375rem] rounded-none">
                    {activeArticle.category}
                  </span>
                </div>

                {/* Article Copy Elements */}
                <div className="p-[1.5rem] md:p-[2.5rem] space-y-[1.5rem]">
                  <h2 className="text-[1.75rem] md:text-[2.25rem] font-black tracking-tighter text-[#082135] dark:text-slate-100 uppercase leading-[1.1] border-b border-gray-100 dark:border-slate-800 pb-[1rem]">
                    {activeArticle.title}
                  </h2>
                  
                  {/* Article content split by paragraphs */}
                  <div className="text-[1rem] md:text-[1.125rem] text-gray-700 dark:text-slate-300 leading-relaxed font-medium space-y-[1.25rem]">
                    {activeArticle.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="max-w-none">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="flex justify-end items-center p-[1rem] border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
                <Button 
                  variant="secondary" 
                  size="default" 
                  onClick={() => setActiveArticle(null)}
                  className="text-[0.8125rem] font-bold tracking-wider uppercase"
                >
                  {t('blog.close')}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
