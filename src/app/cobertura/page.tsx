import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Clock3 } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { CIUDADES, rutaCiudad } from '@/lib/cities'
import { ANIO_APERTURA, ESTADO } from '@/lib/valle-texas'
import { SITE } from '@/lib/site'

/**
 * Cobertura.
 *
 * Ninguna página del sitio decía dónde se atiende. El pie listaba cuatro
 * ciudades y ya; el resto del sitio decía "cobertura en todo México", que es
 * cierto como intención comercial pero no le sirve a quien quiere saber si
 * van a ir a su domicilio.
 *
 * Esta página es honesta en los dos sentidos: dice dónde hay página y
 * operación declarada, y dice que fuera de eso hay que confirmar. No inventa
 * una lista de treinta ciudades para parecer más grande.
 *
 * El Valle de Texas se muestra con su estado real, leído del interruptor de
 * src/lib/valle-texas.ts. Si algún día pasa a 'presente', esta página cambia
 * sola: no hay que acordarse de venir a editarla.
 */
export const metadata = generatePageMetadata({
  title: 'Cobertura | Dónde Damos Servicio de Control de Plagas',
  description:
    'Damos servicio de control de plagas en Ciudad de México, Monterrey, Saltillo y Guadalajara, y atendemos solicitudes en otras zonas del país. Consulte la disponibilidad en su ciudad.',
  path: '/cobertura',
  keywords: [
    'cobertura control de plagas',
    'fumigación cerca de mí',
    'dónde dan servicio de fumigación',
    'control de plagas México ciudades',
  ],
})

export default function CoberturaPage() {
  const valleAbierto = ESTADO === 'presente'

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Cobertura', path: '/cobertura' },
        ])}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Dónde damos servicio
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            Estas son las ciudades donde tenemos operación declarada y página propia.
            Atendemos solicitudes en otras zonas del país, pero preferimos confirmárselo
            antes de agendar en vez de prometerle una visita que no podamos cumplir.
          </p>
        </div>
      </section>

      {/* ── CIUDADES ACTIVAS ───────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3 leading-tight">
            Ciudades con operación
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed max-w-[62ch] mb-10">
            Cada una tiene su página, con la plaga que predomina ahí y por qué.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CIUDADES.map((ciudad) => (
              <Link
                key={ciudad.slug}
                href={rutaCiudad(ciudad.slug)}
                className="group flex items-start gap-4 bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
              >
                <MapPin className="size-5 shrink-0 text-[#006847] mt-0.5" />
                <div className="min-w-0">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[#111111] dark:text-white leading-tight group-hover:text-[#ce1126] transition-colors">
                    {ciudad.nombre}
                  </h3>
                  {ciudad.estado !== ciudad.nombre && (
                    <p className="text-[0.8125rem] font-bold uppercase tracking-wide text-[#5A6070] dark:text-slate-500 mt-0.5">
                      {ciudad.estado}
                    </p>
                  )}
                  <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm mt-3">
                    Ver la página
                    <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
            ¿Su ciudad no aparece?{' '}
            <Link href="/contacto" className="text-[#006847] font-bold hover:underline">
              Escríbanos
            </Link>{' '}
            con la ciudad y la dirección y le confirmamos la disponibilidad antes de
            agendar nada.
          </p>
        </div>
      </section>

      {/* ── SEGUNDO MERCADO ────────────────────────────────── */}
      <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E5E8EC] dark:border-slate-800">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-6 leading-tight">
            Estados Unidos
          </h2>

          <Link
            href="/valle-de-texas"
            className="group flex flex-col bg-white dark:bg-slate-950 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
          >
            {!valleAbierto && (
              <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#FFF4CC] text-[#7A5C00] border border-[#E8C766] px-3 py-1 text-[0.6875rem] font-black uppercase tracking-[0.12em] mb-3">
                <Clock3 className="size-3.5" />
                Apertura prevista {ANIO_APERTURA}
              </span>
            )}
            <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2 leading-tight group-hover:text-[#ce1126] transition-colors">
              Valle de Texas · Rio Grande Valley
            </h3>
            <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
              {valleAbierto
                ? 'Damos servicio en el Valle de Texas. La página de la zona explica qué plagas predominan ahí y cómo se tratan.'
                : `Todavía no operamos en el Valle de Texas: es nuestra próxima apertura, prevista para ${ANIO_APERTURA}. La página de la zona ya explica el problema de plagas del Valle, pero no ofrece servicio hasta que la operación exista de verdad.`}
            </p>
            <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm mt-4">
              Ver el Valle de Texas
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿Llegamos a su domicilio?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            Díganos la ciudad y se lo confirmamos en el momento. Si no llegamos, se lo
            decimos de una vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Consultar mi ciudad
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-7 py-4 rounded transition-colors"
            >
              <Phone className="size-4" />
              <span>Escríbanos por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
