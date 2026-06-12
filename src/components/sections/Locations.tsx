'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { MapPin, ArrowRight } from 'lucide-react'

const LOCATIONS = [
  {
    name: 'Ciudad de México',
    areas: ['Coyoacán', 'Polanco', 'Del Valle', 'Santa Fe', 'Condesa', 'Tlalpan', 'Naucalpan', 'Interlomas'],
    hasCta: true
  },
  {
    name: 'Estado de México',
    areas: ['Toluca', 'Metepec', 'Huixquilucan', 'Satélite', 'Atizapán', 'Tlalnepantla', 'Ecatepec'],
    hasCta: false
  },
  {
    name: 'Querétaro',
    areas: ['Juriquilla', 'El Campanario', 'Centro Histórico', 'Milenio III', 'Corregidora'],
    hasCta: true
  },
  {
    name: 'Puebla',
    areas: ['Angelópolis', 'Cholula', 'Lomas de Angelópolis', 'Centro', 'Las Ánimas'],
    hasCta: false
  },
  {
    name: 'Cuernavaca',
    areas: ['Vista Hermosa', 'Lomas de Cortés', 'Jiutepec', 'Temixco', 'Tabachines'],
    hasCta: true
  }
]

export function Locations() {
  const { language } = useLanguage()
  const isES = language === 'es'

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-gray-50 border-t border-gray-100" id="sucursales">
      <div className="container">
        
        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#e82536] text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="block w-5 h-px bg-[#e82536]" />
              {isES ? 'Zonas de Cobertura' : 'Service Areas'}
              <span className="block w-5 h-px bg-[#e82536]" />
            </div>
            <h2 className="text-h2 font-black tracking-tighter uppercase text-[#082135] leading-[1.15]">
              {isES ? 'Áreas de Servicio en México' : 'Service Locations in Mexico'}
            </h2>
            <p className="text-[#5A6070] mt-3 text-base max-w-[60ch] mx-auto">
              {isES 
                ? 'Ofrecemos control de plagas y fumigación profesional en las principales zonas urbanas y sus alrededores.'
                : 'We offer professional pest control and fumigation in major urban areas and surrounding communities.'}
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {LOCATIONS.map((loc, i) => (
            <FadeUp key={loc.name} delay={i * 0.05}>
              <div className="bg-white border border-[#E5E8EC] p-6 rounded flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center gap-2 mb-4 text-[#082135]">
                  <MapPin className="size-5 text-[#e82536] shrink-0" />
                  <h3 className="font-black text-[1.05rem] uppercase tracking-tight">{loc.name}</h3>
                </div>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {loc.areas.map((area) => (
                    <li key={area} className="text-sm text-[#5A6070] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>

                {loc.hasCta && (
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 bg-[#e82536] hover:bg-[#c91e2d] text-white font-black text-xs py-2.5 rounded transition-all duration-200 group uppercase tracking-wider"
                  >
                    <span>{isES ? 'Iniciar Cotización' : 'Start a Quote'}</span>
                    <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-[#5A6070] text-sm mb-4">
              {isES 
                ? '¿No ves tu zona? Contáctanos para consultar disponibilidad especial.'
                : "Don't see your area? Contact us to ask about special availability."}
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 bg-[#F5A623] hover:bg-[#C8861B] text-[#082135] font-black text-sm px-8 py-3.5 rounded shadow transition-all duration-200 uppercase tracking-wide hover:-translate-y-0.5"
            >
              <span>{isES ? 'Solicitar Información General' : 'Request General Info'}</span>
            </button>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
