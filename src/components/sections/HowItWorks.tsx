'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'

const CONTENT = {
  es: {
    eyebrow: 'El proceso',
    title: 'Así de simple',
    steps: [
      {
        number: '01',
        title: 'Evaluación Gratuita',
        desc: 'Un técnico visita tu propiedad, evalúa el área afectada y entrega una propuesta sin costo ni compromiso.',
      },
      {
        number: '02',
        title: 'Instalación y Calibración',
        desc: 'Instalamos el sistema en pocas horas, calibramos los ciclos de nebulización y te entregamos el control remoto.',
      },
      {
        number: '03',
        title: 'Protección Continua',
        desc: 'El sistema trabaja solo. Tú disfrutas tu espacio. Nosotros monitoreamos y mantenemos.',
      },
    ],
  },
  en: {
    eyebrow: 'The Process',
    title: 'That simple',
    steps: [
      {
        number: '01',
        title: 'Free Evaluation',
        desc: 'A technician visits your property, assesses the affected area, and delivers a proposal at no cost or commitment.',
      },
      {
        number: '02',
        title: 'Installation & Setup',
        desc: 'We install the system in a few hours, calibrate the misting cycles, and hand over the remote control.',
      },
      {
        number: '03',
        title: 'Continuous Protection',
        desc: 'The system works on its own. You enjoy your space. We monitor and maintain everything.',
      },
    ],
  },
}

export function HowItWorks() {
  const { language } = useLanguage()
  const c = CONTENT[language as 'es' | 'en'] ?? CONTENT.es

  return (
    <section id="como-funciona" className="section-padding bg-white">
      <div className="container">

        <FadeUp>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[#e82536] text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="w-5 h-px bg-[#e82536]" />
              {c.eyebrow}
              <span className="w-5 h-px bg-[#e82536]" />
            </div>
            <h2 className="text-h2 font-black tracking-tighter uppercase text-[#082135] leading-[1.1]">
              {c.title}
            </h2>
          </div>
        </FadeUp>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connector dashed line — desktop */}
          <div
            className="hidden md:block absolute top-[2.5rem] h-0 border-t-2 border-dashed border-[#E5E8EC] z-0"
            style={{ left: 'calc(16.67% + 2.5rem)', right: 'calc(16.67% + 2.5rem)' }}
          />

          {c.steps.map((step, i) => (
            <FadeUp key={i} delay={i * 0.15}>
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                {/* Number badge */}
                <div className="size-20 rounded-md bg-[#082135] flex items-center justify-center shadow-lg flex-shrink-0 border-4 border-white">
                  <span className="text-[#e82536] font-black text-xl leading-none">{step.number}</span>
                </div>
                <h3 className="font-black text-[#082135] uppercase tracking-tight text-base">
                  {step.title}
                </h3>
                <p className="text-[#5A6070] text-sm leading-relaxed max-w-[28ch]">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
