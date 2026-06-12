'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { CheckCircle2, Award, ArrowRight } from 'lucide-react'

const CONTENT = {
  es: {
    eyebrow: 'Tecnología premium',
    title: 'El Sistema',
    titleHighlight: 'MCS®',
    subtitle: 'Mist Cooling System — la tecnología de control de mosquitos más avanzada de México.',
    badge: 'Patentado en México y EE.UU.',
    description:
      'Desarrollado específicamente para el clima de México, el Sistema MCS® combina precisión de ingeniería con fórmulas orgánicas aprobadas por la EPA. El resultado: eliminación definitiva de mosquitos en espacios residenciales y comerciales.',
    specsTitle: 'Especificaciones técnicas',
    features: [
      'Programable: 1–12 ciclos de nebulización diarios',
      'Depósito de 55 L — hasta 6 meses sin recargar',
      'Control remoto y app móvil incluidos',
      'Fórmula orgánica certificada EPA',
      'Cobertura de hasta 800 m² por unidad',
      'Silencioso: opera por debajo de 65 dB',
    ],
    cta: 'Solicitar demostración',
  },
  en: {
    eyebrow: 'Premium Technology',
    title: 'The',
    titleHighlight: 'MCS® System',
    subtitle: 'Mist Cooling System — the most advanced mosquito control technology in Mexico.',
    badge: 'Patented in Mexico & USA',
    description:
      "Developed specifically for Mexico's climate, the MCS® System combines engineering precision with EPA-approved organic formulas. The result: definitive elimination of mosquitoes in residential and commercial spaces.",
    specsTitle: 'Technical specifications',
    features: [
      'Programmable: 1–12 daily misting cycles',
      '55 L tank — up to 6 months without refilling',
      'Remote control and mobile app included',
      'EPA-certified organic formula',
      'Coverage of up to 800 m² per unit',
      'Silent: operates below 65 dB',
    ],
    cta: 'Request a Demo',
  },
}

export function Technology() {
  const { language } = useLanguage()
  const c = CONTENT[language as 'es' | 'en'] ?? CONTENT.es

  return (
    <section id="tecnologia" className="section-padding bg-[#082135] text-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(232,37,54,0.12),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: content ───────────────────────────── */}
          <FadeUp>
            <div className="flex flex-col gap-6">

              <div className="inline-flex items-center gap-2 text-[#e82536] text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                <span className="w-5 h-px bg-[#e82536]" />
                {c.eyebrow}
              </div>

              <div>
                <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.05] text-white">
                  {c.title}{' '}
                  <span className="text-[#e82536]">{c.titleHighlight}</span>
                </h2>
                <p className="text-white/55 text-base mt-2 italic">{c.subtitle}</p>
              </div>

              <div className="inline-flex items-center gap-2 bg-[#e82536]/15 border border-[#e82536]/30 text-[#e82536] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md self-start">
                <Award className="size-3.5" />
                {c.badge}
              </div>

              <p className="text-white/65 text-base leading-relaxed max-w-[55ch]">
                {c.description}
              </p>

              <button
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="self-start inline-flex items-center gap-2 bg-[#e82536] hover:bg-[#c91e2d] text-white font-black text-sm px-6 py-3 rounded-md transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide"
              >
                {c.cta}
                <ArrowRight className="size-4" />
              </button>
            </div>
          </FadeUp>

          {/* ── RIGHT: specs card ───────────────────────── */}
          <FadeUp delay={0.15}>
            <div className="bg-white/5 border border-white/10 rounded-md p-8 flex flex-col gap-5">
              <h3 className="text-white font-black uppercase tracking-tight text-sm pb-2 border-b border-white/10">
                {c.specsTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {c.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-[#e82536] flex-shrink-0 mt-0.5" />
                    <span className="text-white/75 text-sm leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
