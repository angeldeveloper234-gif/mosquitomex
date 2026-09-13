import Link from 'next/link'
import { ArrowRight, ExternalLink, Phone, ShieldCheck } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { PCP, FUNDADOR, RESPALDO_RED, MARCAS_HERMANAS, INDUSTRIAS } from '@/lib/pcp'
import { SITE } from '@/lib/site'

/**
 * Quiénes somos.
 *
 * No es una página institucional de relleno. Resuelve tres cosas a la vez:
 *
 * 1. `pcp` es la consulta que más aparece en todo el ecosistema del cliente y
 *    no convierte en un solo clic, porque ningún sitio de la red dice "PCP".
 *    Esta es la primera página que lo dice, en texto, donde Google lo lee.
 * 2. Alinea el sitio con el perfil de Google, que se llama "FUMIGACIONES PCP
 *    INTERNACIONAL".
 * 3. Declara abiertamente que MosquitoMEX y Big Cat son empresas asociadas a
 *    la misma red. Sin eso, dos sitios del mismo dueño, con el mismo teléfono
 *    y el mismo correo, peleando por las mismas ciudades, tienen la forma de
 *    una red de sitios duplicados.
 *
 * Todos los datos de PCP y del fundador salen del catálogo institucional (ver
 * src/lib/pcp.ts). Lo que el catálogo no dice, no está acá.
 */
export const metadata = generatePageMetadata({
  title: 'Nosotros | MosquitoMEX, empresa asociada a PCP Internacional',
  description:
    'MosquitoMEX es una empresa de control de plagas asociada a PCP Internacional, la red fundada en 2009 por Jorge Luis Guevara IV que capacita, certifica y respalda a sus empresas asociadas.',
  path: '/nosotros',
  keywords: [
    'PCP',
    'PCP Internacional',
    'PCP Internacional control de plagas',
    'fumigaciones PCP Internacional',
    'MosquitoMEX quiénes somos',
    'red de control de plagas México',
  ],
})

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Nosotros', path: '/nosotros' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'Nosotros — MosquitoMEX',
            url: `${SITE.url}/nosotros`,
            about: { '@id': `${SITE.url}/#business` },
            // La relación con la red, declarada también en datos estructurados
            // y no solo en el texto visible.
            mentions: [
              {
                '@type': 'Organization',
                name: PCP.nombreCompleto,
                alternateName: 'PCP',
                url: PCP.sitio,
                foundingDate: String(PCP.fundacion),
                founder: { '@type': 'Person', name: FUNDADOR.nombre },
              },
              ...MARCAS_HERMANAS.map((m) => ({
                '@type': 'Organization',
                name: m.nombre,
                url: m.url,
              })),
            ],
          },
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Quiénes somos
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            MosquitoMEX es una empresa de control de plagas y fumigación con operación en
            México, asociada a <strong className="text-white">{PCP.nombre}</strong>, la red
            que capacita, certifica y respalda a sus empresas asociadas.
          </p>
        </div>
      </section>

      {/* ── LA RED ─────────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-5 leading-tight">
            Qué es PCP Internacional
          </h2>
          <div className="space-y-4 text-[#5A6070] dark:text-slate-400 leading-relaxed text-[1.0625rem]">
            <p>
              <strong className="text-[#111111] dark:text-white">{PCP.nombreCompleto}</strong>{' '}
              —{PCP.descriptor.toLowerCase()}— fue fundada en {PCP.fundacion} por{' '}
              {FUNDADOR.nombre}. Es la marca madre de una red de empresas de control de
              plagas que operan en México, y su modelo es explícito: cada empresa asociada
              trabaja <strong className="text-[#111111] dark:text-white">con su propia marca</strong>,
              bajo el amparo de un sello que la distingue como empresa certificada con
              servicios de calidad internacional.
            </p>
            <p>
              Eso es exactamente lo que es MosquitoMEX: una marca propia, con su equipo y
              sus clientes, que opera con los estándares, la capacitación y la supervisión
              de la red.
            </p>
          </div>

          {/* Datos de la marca madre, para que la relación sea verificable y no
              una afirmación suelta. */}
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 rounded-lg border border-[#E5E8EC] dark:border-slate-800 bg-[#F8F9FA] dark:bg-slate-900 p-6 text-[0.9375rem]">
            <div>
              <dt className="font-black uppercase tracking-wide text-[0.6875rem] text-[#5A6070] dark:text-slate-500 mb-1">
                Sitio de la red
              </dt>
              <dd>
                <a
                  href={PCP.sitio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-[#006847] hover:underline"
                >
                  pcpinternacional.com
                  <ExternalLink className="size-3.5" />
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-black uppercase tracking-wide text-[0.6875rem] text-[#5A6070] dark:text-slate-500 mb-1">
                Fundación
              </dt>
              <dd className="text-[#111111] dark:text-white font-bold">{PCP.fundacion}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="font-black uppercase tracking-wide text-[0.6875rem] text-[#5A6070] dark:text-slate-500 mb-1">
                Domicilio corporativo de la red
              </dt>
              <dd className="text-[#5A6070] dark:text-slate-400">{PCP.domicilio}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── QUÉ APORTA LA RED ──────────────────────────────── */}
      <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E5E8EC] dark:border-slate-800">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3 leading-tight">
            Qué significa estar respaldados por la red
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed max-w-[62ch] mb-10">
            No es un logotipo prestado. Es la forma en que se capacita al técnico que llega
            a su domicilio y el método con el que se diseña el servicio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESPALDO_RED.map((item) => (
              <div
                key={item.titulo}
                className="bg-white dark:bg-slate-950 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6"
              >
                <ShieldCheck className="size-6 text-[#006847] mb-3" />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2 leading-tight">
                  {item.titulo}
                </h3>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                  {item.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL FUNDADOR ────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-2 leading-tight">
            {FUNDADOR.nombre}
          </h2>
          <p className="text-[0.75rem] font-black uppercase tracking-[0.2em] text-[#ce1126] mb-6">
            {FUNDADOR.cargo} de {PCP.nombre}
          </p>
          <div className="space-y-4 text-[#5A6070] dark:text-slate-400 leading-relaxed text-[1.0625rem]">
            <p>
              Más de {FUNDADOR.aniosEnLaIndustria} años en la industria de la higiene, la
              limpieza y el control de plagas, en compañías públicas y privadas.
            </p>
            {FUNDADOR.trayectoria.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA EMPRESA HERMANA ─────────────────────────────── */}
      <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E5E8EC] dark:border-slate-800">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3 leading-tight">
            Las otras empresas de la red
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed mb-8">
            MosquitoMEX no es la única marca de la red PCP. Lo decimos abiertamente porque
            es la verdad y porque le sirve a quien nos busca: si su ciudad la atiende mejor
            otra empresa asociada, preferimos que llegue a ella.
          </p>

          <div className="space-y-4">
            {MARCAS_HERMANAS.map((marca) => (
              <a
                key={marca.url}
                href={marca.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white dark:bg-slate-950 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2 leading-tight group-hover:text-[#ce1126] transition-colors">
                  {marca.nombre}
                </h3>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                  {marca.descripcion}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#006847] font-bold text-sm mt-4">
                  Visitar el sitio
                  <ExternalLink className="size-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIAS ─────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3 leading-tight">
            Industrias que atiende la red
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed max-w-[62ch] mb-8">
            Además del servicio en hogares, los programas de la red están diseñados para
            operaciones con requisitos de auditoría y certificación.
          </p>
          <ul className="flex flex-wrap gap-2">
            {INDUSTRIAS.map((industria) => (
              <li
                key={industria}
                className="rounded-full border border-[#E5E8EC] dark:border-slate-800 bg-[#F8F9FA] dark:bg-slate-900 px-3.5 py-1.5 text-[0.875rem] font-bold text-[#111111] dark:text-slate-300"
              >
                {industria}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿Hablamos de su caso?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            La inspección y la cotización no tienen costo, sea para una casa o para una
            operación con requisitos de auditoría.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Ir a contacto
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold text-sm px-7 py-4 rounded transition-colors"
            >
              <Phone className="size-4" />
              <span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
