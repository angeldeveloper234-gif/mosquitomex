'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight } from 'lucide-react'

const PESTS = [
  { emoji: '🦟', labels: { es: 'Mosquitos',          en: 'Mosquitoes'    } },
  { emoji: '🪳', labels: { es: 'Cucarachas',          en: 'Cockroaches'   } },
  { emoji: '🕷️', labels: { es: 'Arañas',              en: 'Spiders'       } },
  { emoji: '🪰', labels: { es: 'Moscas',              en: 'Flies'         } },
  { emoji: '🐀', labels: { es: 'Ratas y Ratones',     en: 'Rats & Mice'   } },
  { emoji: '🐜', labels: { es: 'Hormigas y Termitas', en: 'Ants & Termites' } },
  { emoji: '🐝', labels: { es: 'Abejas y Avispas',    en: 'Bees & Wasps'  } },
]

export function PestGrid() {
  const { language } = useLanguage()
  const isES = language === 'es'
  const lang = language as 'es' | 'en'

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-white" id="plagas">
      <div className="container">

        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#e82536] text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="block w-5 h-px bg-[#e82536]" />
              {isES ? 'Control de Plagas' : 'Pest Control'}
              <span className="block w-5 h-px bg-[#e82536]" />
            </div>
            <h2 className="text-h2 font-black tracking-tighter uppercase text-[#082135] leading-[1.15]">
              {isES ? '¿Qué plaga te está afectando?' : 'What pest is bothering you?'}
            </h2>
            <p className="text-[#5A6070] mt-3 text-base max-w-[50ch] mx-auto">
              {isES
                ? 'Selecciona la plaga para obtener una cotización inmediata sin costo'
                : 'Select your pest to get an immediate free quote'}
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PESTS.map((pest, i) => (
            <FadeUp key={pest.labels.es} delay={i * 0.06}>
              <button
                onClick={scrollToContact}
                className="group w-full flex flex-col items-center gap-3 p-6 bg-[#F8F8F8] border border-[#E5E8EC] rounded hover:bg-[#e82536] hover:border-transparent hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center"
              >
                <div className="text-4xl leading-none bg-[#fdeaec] p-3 rounded group-hover:bg-white/20 transition-colors duration-200 select-none">
                  {pest.emoji}
                </div>
                <span className="text-sm font-bold uppercase tracking-wide text-[#082135] group-hover:text-white transition-colors">
                  {pest.labels[lang]}
                </span>
                <ArrowRight className="size-3.5 text-[#e82536] group-hover:text-white/70 transition-colors" />
              </button>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.55}>
          <p className="text-center text-[#5A6070] text-sm mt-8">
            {isES
              ? 'Haz clic en cualquier plaga para solicitar cotización gratuita'
              : 'Click any pest to request a free quote'}
          </p>
        </FadeUp>

      </div>
    </section>
  )
}
