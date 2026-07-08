'use client'

import Image from 'next/image'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'

const LOGOS = [
  { name: 'ATR', src: '/marcas-png/logo-atr.png' },
  { name: 'Jett', src: '/marcas-png/logo-jett-3.png' },
  { name: 'Justin', src: '/marcas-png/logo-justin-3.png' },
  { name: 'Mountain Dams', src: '/marcas-png/logo-mountain-dams.png' },
  { name: 'Travel', src: '/marcas-png/logo-travel-7.png' },
  { name: 'Youngs Coffee', src: '/marcas-png/logo-youngs-coffee-1.png' },
]

// Triple the list to ensure the seamless scrolling loop is unbroken on large viewports
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS]

export function Logos() {
  const { t } = useLanguage()

  return (
    <section className="py-[clamp(3rem,8vw,6rem)] border-y border-slate-200/60 dark:border-slate-800/60 bg-slate-50/40 dark:bg-[#04111c] overflow-hidden relative">
      <div className="container relative z-10">
        <FadeUp>
          <p className="text-center text-[1rem] font-bold text-[#111111]/60 dark:text-slate-400 uppercase tracking-[0.25em] mb-[2rem]">
            {t('logos.title')}
          </p>
        </FadeUp>

        {/* Marquee viewport container with fading mask overlays */}
        <div className="relative w-full overflow-hidden select-none py-[1rem]">
          {/* Fading Edge Gradients */}
          <div className="absolute inset-y-0 left-0 w-[4rem] sm:w-[8rem] bg-gradient-to-r from-slate-50/90 dark:from-[#04111c]/95 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[4rem] sm:w-[8rem] bg-gradient-to-l from-slate-50/90 dark:from-[#04111c]/95 to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Track */}
          <div className="flex w-max animate-marquee gap-[1.5rem] md:gap-[3rem] items-center">
            {MARQUEE_LOGOS.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center px-[2rem] py-[1rem] bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-100/50 dark:border-slate-800/30 w-[10rem] md:w-[12.5rem] h-[5.625rem] md:h-[6.875rem] transition-all duration-300 group hover:border-[#ce1126]/30 dark:hover:border-[#ce1126]/30 hover:shadow-sm hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
              >
                <div className="relative w-full h-full opacity-60 dark:opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 768px) 10rem, 12.5rem"
                    className="object-contain dark:brightness-105 dark:contrast-105"
                    priority={index < LOGOS.length}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

