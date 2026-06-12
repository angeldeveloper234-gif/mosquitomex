'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

const LOCATIONS = [
  {
    id: 'cdmx',
    name: 'Ciudad de México',
    areas: ['Coyoacán', 'Polanco', 'Del Valle', 'Santa Fe', 'Condesa', 'Tlalpan', 'Naucalpan', 'Interlomas'],
    desc: 'Cobertura completa en las principales alcaldías y zonas residenciales de la CDMX.',
  },
  {
    id: 'edomex',
    name: 'Estado de México',
    areas: ['Toluca', 'Metepec', 'Huixquilucan', 'Satélite', 'Atizapán', 'Tlalnepantla', 'Ecatepec'],
    desc: 'Servicio rápido y eficiente en las zonas comerciales e industriales del Estado de México.',
  },
  {
    id: 'qro',
    name: 'Querétaro',
    areas: ['Juriquilla', 'El Campanario', 'Centro Histórico', 'Milenio III', 'Corregidora'],
    desc: 'Atención especializada en fraccionamientos residenciales y parques industriales.',
  },
  {
    id: 'puebla',
    name: 'Puebla',
    areas: ['Angelópolis', 'Cholula', 'Lomas de Angelópolis', 'Centro', 'Las Ánimas'],
    desc: 'Protección profesional para hogares y negocios en la zona metropolitana de Puebla.',
  },
  {
    id: 'cuernavaca',
    name: 'Cuernavaca',
    areas: ['Vista Hermosa', 'Lomas de Cortés', 'Jiutepec', 'Temixco', 'Tabachines'],
    desc: 'Control integral de plagas adaptado al clima cálido de la eterna primavera.',
  }
]

export function Locations() {
  const { language } = useLanguage()
  const isES = language === 'es'
  const [activeTab, setActiveTab] = useState('cdmx')

  const currentLoc = LOCATIONS.find(l => l.id === activeTab) || LOCATIONS[0]

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-[#F8F9FA] border-t border-[#E5E8EC]" id="sucursales">
      <div className="container max-w-5xl">
        
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
                ? 'Selecciona tu ubicación para ver las zonas y colonias donde ofrecemos servicios de fumigación.'
                : 'Select your state to view the neighborhoods and zones where we offer pest control services.'}
            </p>
          </div>
        </FadeUp>

        {/* Tab Buttons Selector */}
        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {LOCATIONS.map((loc) => {
              const isActive = loc.id === activeTab
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveTab(loc.id)}
                  className={`px-5 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#082135] text-white shadow-md'
                      : 'bg-white text-[#082135] border border-[#E5E8EC] hover:bg-gray-50'
                  }`}
                >
                  {loc.name}
                </button>
              )
            })}
          </div>
        </FadeUp>

        {/* Content Display Card */}
        <FadeUp delay={0.2}>
          <div className="bg-white border border-[#E5E8EC] rounded-lg shadow-sm p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Info & Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2.5 text-[#082135]">
                <div className="bg-[#fdeaec] p-2 rounded-full text-[#e82536]">
                  <MapPin className="size-5" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight">{currentLoc.name}</h3>
              </div>

              <p className="text-sm text-[#5A6070] leading-relaxed">
                {currentLoc.desc}
              </p>

              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-[#082135] mb-3">
                  {isES ? 'Zonas y Colonias Clave:' : 'Key neighborhoods & zones:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentLoc.areas.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F3F4F6] text-[#082135] text-xs font-bold rounded"
                    >
                      <CheckCircle2 className="size-3 text-[#e82536]" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky Action Card */}
            <div className="bg-[#082135] text-white p-6 rounded-lg flex flex-col justify-center text-center space-y-4 md:h-full">
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                {isES ? '¿Vives en esta zona?' : 'Do you live in this area?'}
              </p>
              <h4 className="text-lg font-black uppercase tracking-tight">
                {isES ? 'Cotiza tu servicio hoy mismo' : 'Quote your service today'}
              </h4>
              <button
                onClick={scrollToContact}
                className="w-full flex items-center justify-center gap-2 bg-[#e82536] hover:bg-[#c91e2d] text-white font-black text-xs py-3 rounded transition-all duration-200 group uppercase tracking-wider cursor-pointer"
              >
                <span>{isES ? 'Iniciar Cotización' : 'Start a Quote'}</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </FadeUp>

        {/* Footer Info */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-8 text-xs text-[#5A6070]">
            {isES 
              ? '¿No encuentras tu delegación o municipio? Llámanos para verificar cobertura extendida.'
              : "Don't see your municipality or area? Call us to check extended coverage."}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
