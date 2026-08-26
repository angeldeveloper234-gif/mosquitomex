'use client'

import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { CIUDADES, rutaCiudad, type Ciudad } from '@/lib/cities'
import { SITE } from '@/lib/site'

/**
 * Contenido de una página de ciudad.
 *
 * Es cliente porque el sitio es bilingüe y el idioma se elige en el navegador.
 * La metadata (title, description, JSON-LD) la resuelve la página servidor, que
 * es donde tiene que estar para que Google la lea.
 *
 * El trato es de USTED, a diferencia del resto del sitio, que tutea. Fue una
 * indicación explícita para estas páginas. Queda anotado porque es una
 * inconsistencia visible y conviene unificarla en algún momento, en una
 * dirección o en la otra.
 */
export function CityContent({ ciudad }: { ciudad: Ciudad }) {
  const { language } = useLanguage()
  const isES = language === 'es'
  const c = isES ? ciudad.es : ciudad.en

  const otras = CIUDADES.filter((x) => x.slug !== ciudad.slug)

  return (
    <>
      {/* ── Encabezado ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#111111]">
        <div className="container max-w-4xl">
          <FadeUp>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
              <MapPin className="size-3.5" />
              {ciudad.nombre}
              {ciudad.estado !== ciudad.nombre && `, ${ciudad.estado}`}
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
              {c.h1}
            </h1>
            <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-slate-300 md:text-lg">
              {c.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ce1126] px-6 py-3 font-bold text-white transition-colors hover:bg-[#a50d1e]"
              >
                {isES ? 'Pedir cotización sin costo' : 'Get a free quote'}
                <ArrowRight className="size-4" />
              </a>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:border-white"
              >
                {SITE.phone}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Contexto de la ciudad ─────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#111111] md:text-4xl">
              {c.contextoTitulo}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
            <div className="mt-8 space-y-5">
              {c.contexto.map((p) => (
                <p key={p.slice(0, 40)} className="max-w-[70ch] leading-relaxed text-slate-700">
                  {p}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Plagas predominantes ──────────────────────────────────────── */}
      <section className="section-padding border-t border-[#E5E8EC] bg-[#F8F9FA]">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#111111] md:text-4xl">
              {c.plagasTitulo}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
          </FadeUp>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {c.plagas.map((p) => (
              <FadeUp key={p.nombre}>
                <article className="h-full rounded-2xl border border-[#E5E8EC] bg-white p-6">
                  <h3 className="text-lg font-bold text-[#111111]">{p.nombre}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.porQue}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo trabajamos acá ───────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#111111] md:text-4xl">
              {c.servicioTitulo}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
            <p className="mt-8 max-w-[70ch] leading-relaxed text-slate-700">{c.servicio}</p>

            <div className="mt-8">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 font-bold text-[#ce1126] hover:underline"
              >
                {isES ? 'Ver todos los servicios' : 'See all services'}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Otras ciudades ────────────────────────────────────────────── */}
      <section className="section-padding border-t border-[#E5E8EC] bg-[#F8F9FA]">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-2xl font-black uppercase tracking-tighter text-[#111111]">
              {isES ? 'Otras ciudades donde damos servicio' : 'Other cities we serve'}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {otras.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={rutaCiudad(o.slug)}
                    className="flex items-center justify-between rounded-xl border border-[#E5E8EC] bg-white px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:border-[#ce1126]"
                  >
                    <span>
                      {o.nombre}
                      {o.estado !== o.nombre && (
                        <span className="block text-xs font-normal text-slate-500">
                          {o.estado}
                        </span>
                      )}
                    </span>
                    <ArrowRight className="size-4 shrink-0 text-[#ce1126]" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              {isES
                ? 'Damos servicio en todo el país. Si su ciudad no aparece acá, escríbanos igual.'
                : 'We serve the whole country. If your city is not listed, write to us anyway.'}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
