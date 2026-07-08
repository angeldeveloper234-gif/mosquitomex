'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { CheckCircle2, PlayCircle } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const STEPS = {
  es: [
    { title: 'Inspección', desc: 'Evaluamos tu espacio para identificar puntos críticos.' },
    { title: 'Tratamiento', desc: 'Aplicamos soluciones seguras para erradicar las plagas.' },
    { title: 'Mantenimiento', desc: 'Visitas programadas para garantizar que no vuelvan.' }
  ],
  en: [
    { title: 'Inspection', desc: 'We evaluate your space to identify critical areas.' },
    { title: 'Treatment', desc: 'We apply safe solutions to eradicate pests.' },
    { title: 'Maintenance', desc: 'Scheduled visits to ensure they do not return.' }
  ]
}

export function ProcessVideo() {
  const { t, language } = useLanguage()
  const isES = language === 'es'
  const steps = STEPS[language as 'es' | 'en'] ?? STEPS.es

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center gap-8">
          
          {/* Video Area - Primer plano */}
          <FadeUp className="w-full">
            <div className="relative aspect-video bg-[#111111] rounded shadow-xl overflow-hidden border-4 border-white w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/qRC2kE065JY?list=PLx6iGfolA4F6-hDwpsTz_P1T9vOHconF7"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </FadeUp>

          {/* Text & Steps Area - Oculto pero no eliminado */}
          {false && (
            <FadeUp delay={0.2}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-[#ce1126] font-black uppercase tracking-wider text-xs">
                    {isES ? 'Nuestro Método' : 'Our Method'}
                  </span>
                  <h2 className="text-[#111111] font-black text-3xl md:text-4xl leading-[1.1] tracking-tight">
                    {isES ? 'El Sistema MCS' : 'The MCS System'}
                  </h2>
                  <p className="text-[#5A6070] mt-2 leading-relaxed">
                    {isES 
                      ? 'Hemos perfeccionado nuestro enfoque para garantizar que las plagas se mantengan alejadas. Nuestro sistema de 3 pasos es seguro para tu familia, mascotas y el medio ambiente.' 
                      : 'We have perfected our approach to ensure pests stay away. Our 3-step system is safe for your family, pets, and the environment.'}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-white rounded border border-[#E5E8EC] shadow-sm hover:border-[#ce1126] transition-colors">
                      <div className="bg-[#fdeaea] text-[#ce1126] rounded p-2 flex-shrink-0 mt-1">
                        <CheckCircle2 className="size-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-[#111111] text-lg">{step.title}</h4>
                        <p className="text-[#5A6070] text-sm leading-relaxed mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          )}

        </div>
      </div>
    </section>
  )
}
