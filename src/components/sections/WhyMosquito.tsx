'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { ShieldAlert, Droplets, Clock } from 'lucide-react'

const CONTENT = {
  es: {
    eyebrow: 'El Problema Real',
    title: 'Los mosquitos no son solo molestos.',
    titleHighlight: 'Son un riesgo de salud.',
    description:
      'No es solo la picazón. Los mosquitos transmiten enfermedades graves y convierten tu espacio exterior en un lugar inhabitable. La mayoría de las soluciones populares solo atacan el síntoma, no la causa.',
    stats: [
      { value: '+3,000', label: 'especies de mosquitos en el mundo' },
      { value: '700M+',  label: 'personas infectadas al año' },
      { value: '7 días', label: 'de huevo a mosquito adulto' },
    ],
    problems: [
      {
        Icon: ShieldAlert,
        title: 'Transmiten enfermedades',
        desc: 'Dengue, Zika, Chikungunya y Malaria son transmitidos activamente en México cada temporada de lluvias.',
      },
      {
        Icon: Droplets,
        title: 'Se reproducen muy rápido',
        desc: 'Un recipiente con 2 cm de agua estancada es suficiente para un criadero completo de larvas.',
      },
      {
        Icon: Clock,
        title: 'Los remedios no duran',
        desc: 'Los repelentes duran pocas horas. Las trampas no atacan la fuente. La nebulización automática sí.',
      },
    ],
  },
  en: {
    eyebrow: 'The Real Problem',
    title: "Mosquitoes aren't just annoying.",
    titleHighlight: "They're a health risk.",
    description:
      "It's not just the itch. Mosquitoes transmit serious diseases and make your outdoor spaces unusable. Most popular solutions only fight the symptom, not the root cause.",
    stats: [
      { value: '+3,000', label: 'mosquito species worldwide' },
      { value: '700M+',  label: 'people infected per year' },
      { value: '7 days', label: 'from egg to adult mosquito' },
    ],
    problems: [
      {
        Icon: ShieldAlert,
        title: 'They spread disease',
        desc: 'Dengue, Zika, Chikungunya, and Malaria are actively transmitted in Mexico every rainy season.',
      },
      {
        Icon: Droplets,
        title: 'They reproduce fast',
        desc: 'A container with just 2 cm of standing water is enough to create a full larvae breeding ground.',
      },
      {
        Icon: Clock,
        title: 'Remedies do not last',
        desc: 'Repellents last hours. Traps do not kill the source. Automatic misting does.',
      },
    ],
  },
}

export function WhyMosquito() {
  const { language } = useLanguage()
  const c = CONTENT[language as 'es' | 'en'] ?? CONTENT.es

  return (
    <section id="por-que" className="section-padding bg-[#F8F8F8]">
      <div className="container">

        <div className="max-w-3xl mx-auto text-center mb-14">
          <FadeUp>
            <div className="inline-flex items-center gap-2 text-[#ce1126] text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="w-5 h-px bg-[#ce1126]" />
              {c.eyebrow}
              <span className="w-5 h-px bg-[#ce1126]" />
            </div>
            <h2 className="text-h2 font-black tracking-tighter uppercase text-[#111111] leading-[1.1]">
              {c.title}{' '}
              <span className="text-[#ce1126]">{c.titleHighlight}</span>
            </h2>
            <p className="text-[#5A6070] mt-4 text-base leading-relaxed max-w-[60ch] mx-auto">
              {c.description}
            </p>
          </FadeUp>
        </div>

        {/* Stats */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            {c.stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded border border-[#E5E8EC] shadow-sm"
              >
                <p className="font-black text-[#ce1126] leading-none text-[clamp(1.75rem,4vw,2.75rem)]">
                  {s.value}
                </p>
                <p className="text-[#5A6070] text-xs font-medium mt-2 uppercase tracking-wide leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.problems.map((p, i) => (
            <FadeUp key={i} delay={0.15 + i * 0.1}>
              <div className="bg-white rounded p-6 border border-[#E5E8EC] shadow-sm flex flex-col gap-3 h-full">
                <div className="size-10 rounded bg-[#fdeaea] flex items-center justify-center flex-shrink-0">
                  <p.Icon className="size-5 text-[#ce1126]" />
                </div>
                <h3 className="font-black text-[#111111] uppercase tracking-tight text-sm">
                  {p.title}
                </h3>
                <p className="text-[#5A6070] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
