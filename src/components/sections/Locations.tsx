'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { ArrowRight } from 'lucide-react'

const AREAS = [
  // CDMX
  'Coyoacán', 'Polanco', 'Del Valle', 'Santa Fe', 'Condesa', 'Tlalpan', 'Naucalpan', 'Interlomas',
  // Edomex
  'Toluca', 'Metepec', 'Huixquilucan', 'Satélite', 'Atizapán', 'Tlalnepantla', 'Ecatepec',
  // Querétaro
  'Juriquilla', 'El Campanario', 'Centro Histórico', 'Milenio III', 'Corregidora',
  // Puebla & Cuernavaca
  'Angelópolis', 'Cholula', 'Lomas de Angelópolis', 'Las Ánimas', 'Vista Hermosa', 'Jiutepec', 'Temixco'
]

export function Locations() {
  const { language } = useLanguage()
  const isES = language === 'es'

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-[#F8F9FA] border-t border-[#E5E8EC]" id="sucursales">
      <div className="container max-w-4xl">
        
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="text-[#111111] text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              {isES ? 'Zonas de Servicio' : 'Pest Control Service Locations'}
            </h2>
            <div className="w-48 h-0.5 bg-[#ce1126] mx-auto mb-6" />
            <p className="text-[#ce1126] italic font-medium text-sm md:text-base max-w-[70ch] mx-auto leading-relaxed">
              {isES 
                ? 'Ofrecemos cobertura en numerosas delegaciones, municipios y zonas aledañas de la CDMX, Estado de México, Querétaro, Puebla y Cuernavaca.'
                : 'We service numerous locations and surrounding areas in CDMX, State of Mexico, Querétaro, Puebla, and Cuernavaca.'}
            </p>
          </div>
        </FadeUp>

        {/* Areas List Grid */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-3 mb-10 max-w-3xl mx-auto pl-4 md:pl-0">
            {AREAS.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-[#5A6070]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce1126] shrink-0" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* CTA Button */}
        <FadeUp delay={0.2}>
          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group cursor-pointer"
            >
              <span>{isES ? 'Iniciar mi Cotización' : 'Start a Quote'}</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
