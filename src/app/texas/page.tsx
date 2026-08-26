import Link from 'next/link'
import { Clock, ArrowRight } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'
import { TEXAS_ACTIVO, TEXAS_ANIO } from '@/lib/texas'

/**
 * ══════════════════════════════════════════════════════════════════════════
 *  TEXAS — APAGADA. NO ENCENDER ANTES DE QUE LA OPERACIÓN EXISTA.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * La apertura está prevista para 2027. Hasta que haya técnicos, licencia
 * estatal y teléfono local en Texas, esta página:
 *
 *   1. Va con `noIndex`. No debe aparecer en Google. Si se indexara ahora,
 *      alguien de Texas la encontraría buscando "pest control near me" y
 *      llegaría a una empresa que no puede atenderlo.
 *   2. NO tiene formulario, ni botón de cotización, ni teléfono de contacto
 *      de servicio. El único enlace es a franquicias.
 *   3. NO está enlazada desde el menú ni desde el pie. Se llega solo por URL
 *      directa, que es como se comparte una vista previa interna.
 *   4. NO está en el sitemap.
 *
 * ── CÓMO ENCENDERLA EN 2027 ─────────────────────────────────────────────
 *
 * En este orden, y solo cuando la operación esté montada:
 *
 *   a. Cambiar `TEXAS_ACTIVO` a true en src/lib/texas.ts.
 *   b. Agregar la ruta al sitemap (src/app/sitemap.ts).
 *   c. Enlazarla desde el menú y el pie.
 *   d. Agregar el teléfono local y el formulario.
 *   e. Revisar los requisitos de licencia de aplicador de plaguicidas del
 *      estado de Texas antes de publicar cualquier oferta de servicio.
 *
 * El paso (a) es el interruptor: mientras esté en false, la página se sirve
 * en modo "próximamente" pase lo que pase, aunque alguien la enlace por error.
 */

export const metadata = generatePageMetadata({
  title: `Mosquito Mex en Texas · Próximamente ${TEXAS_ANIO}`,
  description:
    `Mosquito Mex prevé abrir en Texas en ${TEXAS_ANIO}. Todavía no damos servicio en Estados Unidos.`,
  path: '/texas',
  // Se mantiene en noindex mientras la operación no exista. Ver el bloque de
  // arriba: quitar esto antes de tiempo manda a Google clientes que no
  // podemos atender.
  noIndex: !TEXAS_ACTIVO,
})

export default function TexasPage() {
  return (
    <section className="section-padding bg-[#111111]">
      <div className="container max-w-3xl py-16">
        <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
          <Clock className="size-3.5" />
          Próximamente {TEXAS_ANIO}
        </p>

        <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
          Mosquito Mex llega a Texas en {TEXAS_ANIO}
        </h1>

        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-slate-300 md:text-lg">
          Somos una franquicia internacional de control de plagas. Hoy operamos
          en México, y nuestra próxima apertura está prevista en Texas para{' '}
          {TEXAS_ANIO}.
        </p>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-6">
          <h2 className="text-lg font-black uppercase tracking-tight text-white">
            Todavía no damos servicio en Estados Unidos
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Si usted necesita control de plagas hoy en Texas, todavía no somos
            su opción, y preferimos decírselo antes de que pierda tiempo. Esta
            página existe para anunciar la apertura, no para tomar servicios.
          </p>
        </div>

        {/*
          El ÚNICO llamado a la acción de esta página va a franquicias. Es lo
          que sí se puede hacer hoy respecto de Texas: invertir en el
          territorio, no contratar un servicio que no existe.
        */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/franquicias"
            className="inline-flex items-center gap-2 rounded-full bg-[#ce1126] px-6 py-3 font-bold text-white transition-colors hover:bg-[#a50d1e]"
          >
            Quiero invertir en una franquicia
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:border-white"
          >
            Ver nuestro servicio en México
          </Link>
        </div>

        <p className="mt-10 text-xs leading-relaxed text-slate-500">
          {SITE.legalName}. La fecha de apertura es una previsión y puede
          cambiar.
        </p>
      </div>
    </section>
  )
}
