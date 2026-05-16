'use client'

import { Button } from '@/components/ui/button'
import { FadeUp } from '@/components/animations/FadeUp'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useLanguage } from '@/context/LanguageContext'

export function Appointment() {
  const { t } = useLanguage()

  return (
    <section id="appointment" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="container">
        <div className="max-w-[80rem] mx-auto bg-white dark:bg-black border border-gray-200/50 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Info Panel */}
          <div className="p-[2rem] md:p-[3rem] bg-[#e82536] text-white flex flex-col justify-center space-y-[1.5rem]">
            <FadeUp>
              <h2 className="text-[clamp(1.75rem,5vw,2.5rem)] font-black tracking-tighter uppercase leading-[1.1]">
                {t('appointment.title')}
              </h2>
              <p className="text-white/90 text-[1rem] md:text-[1.125rem] leading-relaxed max-w-[65ch]">
                {t('appointment.subtitle')}
              </p>
              <div className="pt-[1rem] space-y-[1rem]">
                <div className="flex items-center gap-[1rem]">
                  <div className="h-[2rem] w-[2rem] bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-black text-white text-[1rem]">1</span>
                  </div>
                  <p className="text-[1rem] font-bold uppercase">{t('appointment.step1')}</p>
                </div>
                <div className="flex items-center gap-[1rem]">
                  <div className="h-[2rem] w-[2rem] bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-black text-white text-[1rem]">2</span>
                  </div>
                  <p className="text-[1rem] font-bold uppercase">{t('appointment.step2')}</p>
                </div>
                <div className="flex items-center gap-[1rem]">
                  <div className="h-[2rem] w-[2rem] bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-black text-white text-[1rem]">3</span>
                  </div>
                  <p className="text-[1rem] font-bold uppercase">{t('appointment.step3')}</p>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Form Panel */}
          <div className="p-[2rem] md:p-[3rem] flex flex-col justify-center bg-white dark:bg-black">
            <FadeUp delay={0.2}>
              <form className="space-y-[1rem]">
                <div className="space-y-[0.5rem]">
                  <label className="text-[1rem] font-black uppercase text-[#082135] dark:text-slate-200 tracking-wide">{t('appointment.form.name')}</label>
                  <Input placeholder={t('appointment.form.namePlaceholder')} className="h-[3rem] text-[1rem]" />
                </div>
                <div className="space-y-[0.5rem]">
                  <label className="text-[1rem] font-black uppercase text-[#082135] dark:text-slate-200 tracking-wide">{t('appointment.form.email')}</label>
                  <Input type="email" placeholder={t('appointment.form.emailPlaceholder')} className="h-[3rem] text-[1rem]" />
                </div>
                <div className="space-y-[0.5rem]">
                  <label className="text-[1rem] font-black uppercase text-[#082135] dark:text-slate-200 tracking-wide">{t('appointment.form.phone')}</label>
                  <Input placeholder={t('appointment.form.phonePlaceholder')} className="h-[3rem] text-[1rem]" />
                </div>
                <div className="space-y-[0.5rem]">
                  <label className="text-[1rem] font-black uppercase text-[#082135] dark:text-slate-200 tracking-wide">{t('appointment.form.message')}</label>
                  <Textarea placeholder={t('appointment.form.messagePlaceholder')} className="min-h-[8rem] text-[1rem] resize-none" />
                </div>
                <Button variant="brand" className="w-full h-[3rem] text-[1rem] font-semibold tracking-wider uppercase mt-[1rem]">
                  {t('common.submit')}
                </Button>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}


