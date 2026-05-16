'use client'

import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export function About() {
  const { t, language } = useLanguage()
  
  // Cast benefits to string array for mapping
  const benefitsList = translations[language].about.benefits as string[]

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[3rem] items-center">
          <FadeUp>
            <div className="relative group max-w-xl mx-auto lg:mx-0">
              {/* Decorative offset background block */}
              <div className="absolute -inset-1.5 bg-[#e82536] opacity-10 group-hover:opacity-20 transition-opacity duration-500 -z-10" />
              
              <div className="relative aspect-[3/2] w-full overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-xl bg-slate-50 dark:bg-slate-900">
                <Image
                  src="/images/about-image1.jpg"
                  alt={t('about.action')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
                
                {/* Modern subtle gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082135]/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Elegant overlay text banner and brand tag */}
                <div className="absolute bottom-0 inset-x-0 p-[1.5rem] flex items-end justify-between">
                  <span className="text-white font-black italic uppercase text-[1.125rem] tracking-wider drop-shadow-md">
                    {t('about.action')}
                  </span>
                  <span className="bg-[#e82536] text-white text-[0.75rem] font-black uppercase tracking-wider px-[0.75rem] py-[0.25rem] select-none">
                    M.X.
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="space-y-[1.5rem]">
              <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.15] text-[#082135] dark:text-slate-100">
                {t('about.titlePre')}<span className="text-[#e82536]">{t('about.titleHighlight')}</span>
              </h2>
              <div className="space-y-[1rem] text-gray-700 dark:text-slate-300 leading-relaxed font-medium">
                <p className="max-w-[65ch] text-[1rem] md:text-[1.125rem]">{t('about.p1')}</p>
                <p className="max-w-[65ch] text-[1rem] md:text-[1.125rem]">{t('about.p2')}</p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] pt-[1rem]">
                {benefitsList.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-[0.75rem] text-[1rem] font-bold uppercase text-[#082135] dark:text-slate-200">
                    <CheckCircle2 className="text-[#e82536] size-4 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}


