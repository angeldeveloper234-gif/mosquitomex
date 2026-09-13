import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import { CIUDADES, rutaCiudad } from '@/lib/cities'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { SITE } from '@/lib/site'

/**
 * Página madre de las cuatro ciudades.
 *
 * Existía /control-de-plagas/[ciudad] pero no /control-de-plagas. Las cuatro
 * páginas de ciudad colgaban de una ruta que devolvía 404, y ninguna página del
 * sitio enlazaba a esa sección como conjunto: solo el pie listaba las ciudades
 * sueltas. Una sección sin cabeza no acumula autoridad — cada ciudad peleaba
 * sola y ninguna recibía el peso de las otras tres.
 *
 * Esta página no repite lo que dicen las de ciudad. Su trabajo es otro:
 * decir qué distingue a una de otra, para que el visitante elija la suya y
 * para que Google entienda que son cuatro páginas distintas y no cuatro copias.
 */
export const metadata = generatePageMetadata({
  title: 'Control de Plagas por Ciudad | Cobertura en México',
  description:
    'Control de plagas y fumigación en Ciudad de México, Monterrey, Saltillo y Guadalajara. Cada ciudad tiene su plaga dominante y su tratamiento. Elija la suya y pida cotización sin costo.',
  path: '/control-de-plagas',
  keywords: [
    'control de plagas por ciudad',
    'fumigación Ciudad de México',
    'control de plagas Monterrey',
    'control de plagas Saltillo',
    'control de plagas Guadalajara',
  ],
})

export default function ControlDePlagasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Control de plagas', path: '/control-de-plagas' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Control de plagas por ciudad',
            url: `${SITE.url}/control-de-plagas`,
            about: { '@id': `${SITE.url}/#business` },
            hasPart: CIUDADES.map((c) => ({
              '@type': 'WebPage',
              name: c.es.h1,
              url: `${SITE.url}${rutaCiudad(c.slug)}`,
            })),
          },
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Control de plagas por ciudad
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            El clima y el tipo de construcción de cada ciudad deciden qué plaga aparece y
            cómo hay que tratarla. Un departamento en la Ciudad de México y una casa con
            jardín en Saltillo no tienen el mismo problema, y no se resuelven igual.
          </p>
        </div>
      </section>

      {/* ── LAS CUATRO CIUDADES ────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CIUDADES.map((ciudad) => (
              <Link
                key={ciudad.slug}
                href={rutaCiudad(ciudad.slug)}
                className="group flex flex-col bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
              >
                <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-black uppercase tracking-[0.14em] text-[#5A6070] dark:text-slate-500 mb-3">
                  <MapPin className="size-3.5 text-[#006847]" />
                  {ciudad.estado}
                </span>
                <h2 className="text-xl font-bold uppercase tracking-tight text-balance text-[#111111] dark:text-white mb-2.5 leading-tight group-hover:text-[#ce1126] transition-colors">
                  {ciudad.nombre}
                </h2>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed flex-grow">
                  {ciudad.es.intro}
                </p>

                {/*
                  Las plagas dominantes de esa ciudad, tomadas del mismo dato que
                  usa su página. Es lo que de verdad diferencia una tarjeta de
                  otra: sin esto serían cuatro nombres de ciudad y nada más.
                */}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {ciudad.es.plagas.slice(0, 3).map((plaga) => (
                    <li
                      key={plaga.nombre}
                      className="rounded-full bg-white dark:bg-slate-800 border border-[#E5E8EC] dark:border-slate-700 px-2.5 py-1 text-[0.75rem] font-bold text-[#111111] dark:text-slate-300"
                    >
                      {plaga.nombre}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm mt-5">
                  Ver {ciudad.nombre}
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
            ¿Su ciudad no está en la lista? Damos servicio en más zonas del país.{' '}
            <Link href="/cobertura" className="text-[#006847] font-bold hover:underline">
              Consulte la cobertura
            </Link>{' '}
            o{' '}
            <Link href="/contacto" className="text-[#006847] font-bold hover:underline">
              escríbanos
            </Link>{' '}
            para confirmar disponibilidad.
          </p>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿No sabe qué plaga tiene?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            No hace falta que lo sepa. Cuéntenos qué está notando y la identificamos durante
            la inspección. La cotización es sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Solicitar cotización
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
