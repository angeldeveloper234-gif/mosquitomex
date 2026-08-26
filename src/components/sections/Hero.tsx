'use client'

import { useState, useEffect } from 'react'
import { Phone, FileText, Leaf, Heart, Zap } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'

import { SITE } from '@/lib/site'

const PHONE = SITE.phone
const PHONE_HREF = SITE.phoneHref
const WA_HREF = SITE.whatsappHref

const HERO_IMAGES = [
  '/hero/1.jpg',
  '/hero/2.jpg',
  '/hero/3.jpg',
]

const TRUST = {
  es: [
    {
      Icon: Leaf,
      title: 'Sin Químicos Agresivos',
      desc: 'Fórmulas orgánicas aprobadas por la EPA, seguras para tu familia y mascotas.',
    },
    {
      Icon: Heart,
      title: 'Personas y Mascotas',
      desc: 'Tratamientos 100% seguros para niños, perros, gatos y áreas de jardín.',
    },
    {
      Icon: Zap,
      title: 'Respuesta el Mismo Día',
      desc: 'Somos locales. Llegamos rápido y resolvemos tu problema de plagas hoy.',
    },
  ],
  en: [
    {
      Icon: Leaf,
      title: 'No Harsh Chemicals',
      desc: 'EPA-approved organic formulas, safe for your whole family and pets.',
    },
    {
      Icon: Heart,
      title: 'People & Pet Friendly',
      desc: 'Our treatments are 100% safe for children, dogs, cats, and plants.',
    },
    {
      Icon: Zap,
      title: 'Fast Response Time',
      desc: "We're local — meaning we get to your pest control issues fast.",
    },
  ],
}

export function Hero() {
  const { t, language } = useLanguage()
  const isES = language === 'es'
  const [currentBg, setCurrentBg] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg(prev => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const cards = TRUST[language as 'es' | 'en'] ?? TRUST.es

  return (
    <section id="hero">

      {/* ── ÁREA DE FONDO Y CONTENIDO CENTRADO ──────────────── */}
      <div className="relative min-h-[82vh] flex flex-col items-center justify-center overflow-hidden">

        {/* Imágenes rotativas con crossfade */}
        {HERO_IMAGES.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundColor: '#111111',
              opacity: i === currentBg ? 1 : 0,
              transition: 'opacity 1200ms ease-in-out',
            }}
            aria-hidden="true"
          />
        ))}

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#111111]/72 z-10" />

        {/* Contenido centrado */}
        <div className="relative z-20 w-full max-w-[50rem] mx-auto px-4 text-center flex flex-col items-center gap-5 py-16">

          {/* Eyebrow con líneas punteadas */}
          <FadeUp>
            <div className="flex flex-col items-center gap-1.5 text-white/90 text-sm">
              <div className="w-32 border-t border-dashed border-white/50" />
              {/*
                La cobertura pasa acá, a la línea pequeña: sigue siendo cierta y
                sigue siendo señal de SEO local, pero deja de ser el centro del
                mensaje. El posicionamiento de marca ahora va en la bajada.

                Se quitó "Control de Mosquitos #1". Es una afirmación de
                superioridad sin nada que la respalde, y justo al lado del
                mensaje de franquicia internacional es donde más se la mira. Si
                existe un dato real que la sostenga (un ranking, una
                certificación), se puede volver a poner citando la fuente.
              */}
              <span className="font-medium tracking-wide">
                {isES ? 'Cobertura en todo México' : 'Nationwide coverage in Mexico'}
              </span>
              <div className="w-32 border-t border-dashed border-white/50" />
            </div>
          </FadeUp>

          {/* Headline principal */}
          <FadeUp delay={0.1}>
            {/*
              El H1 pierde "en México" para dejar de encasillar a la marca en un
              solo país. La señal geográfica NO se pierde: sigue en el title de
              la página, en la description, en la línea de arriba, en el
              areaServed del JSON-LD y en las cuatro páginas por ciudad. Está
              más repartida que antes, no más débil.
            */}
            <h1 className="font-black leading-[1.05] tracking-tighter text-[clamp(2rem,5.5vw,3.75rem)]">
              <span className="text-[#ce1126]">
                {isES ? 'Control de Plagas' : 'Pest Control'}
              </span>
              <br />
              <span className="text-white">
                {isES ? 'y Fumigación' : '& Fumigation'}
              </span>
            </h1>

            {/* La bajada es donde ahora vive el posicionamiento de marca. */}
            <p className="mt-5 text-white font-bold text-[1.0625rem] md:text-[1.25rem] tracking-tight">
              {isES
                ? 'Franquicia internacional de control de plagas'
                : 'An international pest control franchise'}
            </p>

            <p className="mt-3 text-white/85 font-medium text-[1rem] md:text-[1.125rem] leading-relaxed max-w-[52ch] mx-auto">
              {isES
                ? 'Nosotros llegamos, y las plagas se van. Técnicos profesionales para hogares y empresas, con cotización sin costo.'
                : 'We show up, and the pests are gone. Professional technicians for homes and businesses, with a free quote.'}
            </p>
          </FadeUp>

          {/* Botones duales */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2.5 bg-[#006847] hover:bg-[#00543a] text-white font-black text-[0.9rem] px-7 py-3.5 rounded shadow-lg transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide min-w-[210px] justify-center"
              >
                <Phone className="size-4" />
                {isES ? `Llamar ${PHONE}` : `Call ${PHONE}`}
              </a>
              <button
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-[0.9rem] px-7 py-3.5 rounded shadow-lg transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide min-w-[210px] justify-center"
              >
                <FileText className="size-4" />
                {isES ? 'Solicitar Cotización' : 'Start A Quote'}
              </button>
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── TARJETAS DE CONFIANZA — superpuestas al fondo ──── */}
      <div className="bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-20 -mt-14 pb-14">
            {cards.map((card, i) => (
              <FadeUp key={i} delay={0.3 + i * 0.1}>
                <div className="bg-white border border-dashed border-gray-200 shadow-lg rounded p-6 flex flex-col items-center text-center gap-3 h-full">
                  <div className="size-12 rounded bg-[#e6f0ed] flex items-center justify-center flex-shrink-0">
                    <card.Icon className="size-5 text-[#006847]" />
                  </div>
                  <div className="w-10 border-t border-dashed border-gray-200" />
                  <h3 className="font-black text-[#111111] uppercase tracking-tight text-[0.9rem]">
                    {card.title}
                  </h3>
                  <p className="text-[#5A6070] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
