'use client'

import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'

export function MiddleCTA() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-[#111111] text-white">
      <div className="container">
        <FadeUp>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4 text-center md:text-left">
              <h2 className="text-h2 font-black tracking-tighter uppercase">
                {t('middleCta.titlePre')}<span className="text-[#ce1126]">{t('middleCta.titleHighlight')}</span>
              </h2>
              <p className="text-slate-300 text-[1rem] md:text-[1.125rem] font-medium uppercase tracking-tight">
                {t('middleCta.description')}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button size="lg" variant="brand" className="font-semibold uppercase tracking-wider hover:brightness-110 transition-all">
                {t('common.bookConsultation')}
              </Button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

