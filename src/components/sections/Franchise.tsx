'use client'

import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/lib/site'
import { BadgeCheck, TrendingUp, GraduationCap, Users, ArrowRight, Phone, Mail } from 'lucide-react'

export function Franchise({ mode = 'teaser' }: { mode?: 'teaser' | 'page' }) {
  const { language } = useLanguage()
  const isES = language === 'es'

  const benefits = [
    {
      icon: BadgeCheck,
      title: isES ? 'Marca Reconocida' : 'Recognized Brand',
      desc: isES
        ? 'Opera bajo una marca con presencia nacional y reputación comprobada en control de plagas.'
        : 'Operate under a brand with nationwide presence and a proven pest-control reputation.',
    },
    {
      icon: TrendingUp,
      title: isES ? 'Modelo Probado' : 'Proven Model',
      desc: isES
        ? 'Procesos, tecnología y protocolos listos para que factures desde el primer día.'
        : 'Processes, technology and protocols ready for you to operate from day one.',
    },
    {
      icon: GraduationCap,
      title: isES ? 'Capacitación Completa' : 'Full Training',
      desc: isES
        ? 'Formación técnica y comercial continua para ti y todo tu equipo de trabajo.'
        : 'Ongoing technical and commercial training for you and your entire team.',
    },
    {
      icon: Users,
      title: isES ? 'Mercado en Crecimiento' : 'Growing Market',
      desc: isES
        ? 'Demanda constante durante todo el año en hogares, comercios e industria.'
        : 'Year-round demand across homes, businesses and industry.',
    },
  ]

  const franchiseMailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    isES ? 'Quiero información sobre franquicias MosquitoMEX' : 'MosquitoMEX Franchise Inquiry'
  )}`

  return (
    <section
      id="franquicias"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-[#00543a] to-[#006847] text-white"
    >
      {/* Franja tricolor decorativa superior */}
      <div className="absolute inset-x-0 top-0 h-1 flex">
        <span className="flex-1 bg-[#006847]" />
        <span className="flex-1 bg-white" />
        <span className="flex-1 bg-[#ce1126]" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Columna izquierda: mensaje */}
          <FadeUp>
            <div className="space-y-6 max-w-xl">
              <span className="inline-block bg-white/10 border border-white/20 text-white text-[0.6875rem] font-black uppercase tracking-[0.2em] px-4 py-2 rounded">
                {isES ? 'Oportunidad de Negocio' : 'Business Opportunity'}
              </span>

              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                {isES ? 'Abre tu Franquicia ' : 'Own a '}
                <span className="text-[#ffd7db]">MosquitoMEX</span>
              </h2>

              <div className="w-24 h-1 bg-[#ce1126]" />

              <p className="text-white/90 text-[1rem] md:text-[1.125rem] font-medium leading-relaxed">
                {isES
                  ? 'Súmate a la marca líder en control de plagas de México. Un modelo de negocio rentable, con respaldo total y demanda todo el año. Lleva MosquitoMEX a tu ciudad.'
                  : 'Join Mexico’s leading pest control brand. A profitable business model with full support and year-round demand. Bring MosquitoMEX to your city.'}
              </p>

              {/* CTA + contacto */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {mode === 'page' ? (
                  <a
                    href="#franchise-form"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group"
                  >
                    <span>{isES ? 'Solicitar Información' : 'Request Information'}</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    href="/franquicias"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group"
                  >
                    <span>{isES ? 'Quiero mi Franquicia' : 'Own a Franchise'}</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded transition-all duration-200"
                >
                  <Phone className="size-4" />
                  <span>{SITE.phone}</span>
                </a>
              </div>

              <a
                href={franchiseMailto}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                <Mail className="size-4" />
                <span>{SITE.email}</span>
              </a>
            </div>
          </FadeUp>

          {/* Columna derecha: beneficios */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors duration-200"
                >
                  <div className="w-11 h-11 rounded bg-[#ce1126] flex items-center justify-center mb-4">
                    <Icon className="size-5 text-white" />
                  </div>
                  <h3 className="text-white font-black uppercase text-base tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
