'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export function Testimonials() {
  const { t, language } = useLanguage()
  const reviews = translations[language].testimonials.reviews

  return (
    <section className="py-[clamp(3rem,8vw,6rem)] bg-white dark:bg-[#04111c]/40 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="container">
        <FadeUp>
          <div className="text-center space-y-[1rem] mb-[3rem]">
            <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.15] text-[#111111] dark:text-slate-100">
              {t('testimonials.titlePre')}<span className="text-[#ce1126]">{t('testimonials.titleHighlight')}</span>
            </h2>
            <div className="flex justify-center gap-[0.25rem]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-[#ce1126] text-[#ce1126] size-[1.25rem]" />
              ))}
            </div>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
          {reviews.map((review, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="relative p-[2rem] border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/20 backdrop-blur-xs">
                <Quote className="absolute top-[1.5rem] right-[2rem] text-[#ce1126]/10 size-[3rem]" />
                <div className="space-y-[1rem] relative z-10">
                  <p className="text-[#111111] dark:text-slate-300 italic leading-[1.6] font-medium text-[1rem]">
                    "{review.text}"
                  </p>
                  <div className="pt-[1rem] border-t border-slate-200/60 dark:border-slate-800/60">
                    <p className="font-black text-[#111111] dark:text-slate-200 uppercase text-[1rem]">{review.name}</p>
                    <p className="text-[0.75rem] text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">{review.role}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
