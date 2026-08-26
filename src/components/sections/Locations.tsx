'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CIUDADES, rutaCiudad } from '@/lib/cities'

/**
 * Ciudades sin página propia. Las cuatro prioritarias salen de CIUDADES y se
 * muestran arriba, como enlaces: una ciudad con página propia tiene que ser
 * clicable desde acá o la página queda huérfana.
 *
 * Saltillo salió de esta lista porque ahora tiene página. Antes ni siquiera
 * estaba, aunque el negocio sí da servicio ahí.
 */
const OTRAS_AREAS = [
  'Estado de México', 'Puebla', 'Querétaro', 'Cuernavaca',
  'León', 'Mérida', 'Cancún', 'Tijuana',
  'Toluca', 'Aguascalientes', 'San Luis Potosí', 'Veracruz',
]

export function Locations() {
  const { language } = useLanguage()
  const isES = language === 'es'

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding bg-[#F8F9FA] border-t border-[#E5E8EC]" id="cobertura">
      <div className="container max-w-4xl">
        
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="text-[#111111] text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              {isES ? 'Cobertura Nacional' : 'Nationwide Coverage'}
            </h2>
            <div className="w-48 h-0.5 bg-[#ce1126] mx-auto mb-6" />
            <p className="text-[#ce1126] italic font-medium text-sm md:text-base max-w-[70ch] mx-auto leading-relaxed">
              {isES
                ? 'Atendemos hogares y empresas en todo México. Sin importar dónde te encuentres, llevamos nuestro servicio profesional de control de plagas hasta tu puerta.'
                : 'We serve homes and businesses across all of Mexico. Wherever you are, we bring our professional pest control service right to your door.'}
            </p>
          </div>
        </FadeUp>

        {/* Ciudades con página propia, en orden de prioridad */}
        <FadeUp delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
            {CIUDADES.map((c) => (
              <Link
                key={c.slug}
                href={rutaCiudad(c.slug)}
                className="flex items-center justify-between gap-3 rounded-xl border border-[#E5E8EC] bg-white px-4 py-3 transition-colors hover:border-[#ce1126]"
              >
                <span className="text-left">
                  <span className="block text-sm font-bold text-[#111111]">
                    {isES ? 'Control de plagas en ' : 'Pest control in '}
                    {c.nombre}
                  </span>
                  {c.estado !== c.nombre && (
                    <span className="block text-xs text-[#5A6070]">{c.estado}</span>
                  )}
                </span>
                <ArrowRight className="size-4 shrink-0 text-[#ce1126]" />
              </Link>
            ))}
          </div>
        </FadeUp>

        {/* Resto de la cobertura, sin página propia */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-3 mb-10 max-w-3xl mx-auto pl-4 md:pl-0">
            {OTRAS_AREAS.map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-[#5A6070]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ce1126] shrink-0" />
                <span className="font-semibold">{area}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-sm text-[#5A6070]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ce1126] shrink-0" />
              <span className="font-semibold">
                {isES ? 'Y todo el país' : 'And nationwide'}
              </span>
            </div>
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
