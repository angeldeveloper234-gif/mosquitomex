'use client'

import Link from 'next/link'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/lib/site'
import { BadgeCheck, TrendingUp, GraduationCap, Users, ArrowRight, Phone, Mail } from 'lucide-react'

/**
 * `lang` fuerza el idioma ignorando el contexto. Lo usa la landing en inglés
 * (/franchise), que debe renderizarse en inglés desde el servidor para que
 * Google la indexe en ese idioma.
 */
export function Franchise({
  mode = 'teaser',
  lang,
}: {
  mode?: 'teaser' | 'page'
  lang?: 'es' | 'en'
}) {
  const { language } = useLanguage()
  const isES = (lang ?? language) === 'es'

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

  const franchiseMailto = `mailto:${SITE.franchiseEmail}?subject=${encodeURIComponent(
    isES ? 'Quiero información sobre franquicias MosquitoMEX' : 'MosquitoMEX Franchise Inquiry'
  )}`

  // WhatsApp con el mensaje ya escrito: el interesado solo pulsa enviar.
  const franchiseWhatsApp = `${SITE.whatsappHref}?text=${encodeURIComponent(
    isES
      ? 'Hola, me interesa información sobre la franquicia MosquitoMEX.'
      : 'Hello, I would like information about the MosquitoMEX franchise opportunity.'
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

              {/* En /franquicias esta es la cabecera de la página, así que debe
                  ser h1. Embebida en el home va como h2, para no duplicar el h1. */}
              {mode === 'page' ? (
                <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                  {isES ? 'Abre tu Franquicia ' : 'Own a '}
                  <span className="text-[#ffd7db]">MosquitoMEX</span>
                  {!isES && ' Franchise'}
                </h1>
              ) : (
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1]">
                  {isES ? 'Abre tu Franquicia ' : 'Own a '}
                  <span className="text-[#ffd7db]">MosquitoMEX</span>
                  {!isES && ' Franchise'}
                </h2>
              )}

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
                    href={isES ? '/franquicias' : '/franchise'}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-all duration-200 uppercase tracking-wider group"
                  >
                    <span>{isES ? 'Quiero mi Franquicia' : 'Own a Franchise'}</span>
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                {/* WhatsApp: la vía por la que el cliente quiere recibir los
                    interesados en franquicia, con el mensaje ya redactado. */}
                <a
                  href={franchiseWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-sm px-6 py-4 rounded transition-all duration-200 uppercase tracking-wide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>WhatsApp</span>
                </a>
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
                <span>{SITE.franchiseEmail}</span>
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
