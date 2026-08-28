'use client'

import Link from 'next/link'
import { ArrowRight, Check, Clock, MapPin } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { SITE } from '@/lib/site'
import { ANIO_APERTURA, CONDADOS, ESTADO, copy } from '@/lib/valle-texas'

/**
 * Contenido de /valle-de-texas.
 *
 * ── POR QUÉ ESTO NO ES UNA COPIA DEL SITIO DE MÉXICO ─────────────────────
 *
 * Duplicar el sitio cambiando "México" por "Texas" es la forma más rápida de
 * que Google se quede con una sola versión y descarte la otra. Acá no se
 * repite ni un párrafo: el contenido es sobre el Valle y sobre nada más.
 *
 * Lo que lo hace propio es real y comprobable: el Valle tiene un clima
 * subtropical sin heladas, lo que mantiene al mosquito activo casi todo el
 * año —a diferencia de casi todo Estados Unidos—; tiene resacas, que son
 * cauces viejos del río y cuerpos de agua que no existen en otras regiones;
 * tiene temporada de huracanes con inundaciones que disparan brotes; y tiene
 * citricultura, que trae su propia fauna. Nada de eso aplica a Monterrey ni a
 * la Ciudad de México, y por eso no se puede escribir el mismo texto.
 *
 * La página va en los dos idiomas porque el Valle es bilingüe de verdad: no es
 * una traducción de cortesía, es cómo se habla ahí.
 */
export function ValleTexas() {
  const { language } = useLanguage()
  const isES = language === 'es'
  const c = copy(isES ? 'es' : 'en')
  const presente = ESTADO === 'presente'

  const PLAGAS = isES
    ? [
        {
          n: 'Mosquitos, casi todo el año',
          d: 'El Valle casi no hiela. Sin ese corte de frío que sí tienen otras regiones del país, la reproducción no se detiene en invierno como en el norte: la temporada es larga y el control tiene que ser continuo, no una visita de verano.',
        },
        {
          n: 'Resacas y agua detenida',
          d: 'Las resacas —los cauces viejos del río— y los canales de riego son parte del paisaje del Valle y también criaderos permanentes. Una propiedad cerca de una resaca necesita un plan distinto al de una casa a diez cuadras.',
        },
        {
          n: 'Hormiga roja de fuego',
          d: 'Los montículos aparecen en jardines, banquetas y áreas de juego. La picadura duele y en personas alérgicas es un problema médico, no una molestia. Se trata el montículo y el área alrededor, porque la colonia se muda.',
        },
        {
          n: 'Termita subterránea',
          d: 'La humedad constante del Valle las favorece. Atacan la estructura desde el suelo y suelen descubrirse cuando el daño ya está hecho, así que la inspección preventiva vale más que el tratamiento de urgencia.',
        },
        {
          n: 'Después de la tormenta',
          d: 'La temporada de huracanes deja agua estancada por semanas. El repunte de mosquito llega dos o tres semanas después de la inundación, no durante: ese es el momento de actuar, y casi nadie lo anticipa.',
        },
      ]
    : [
        {
          n: 'Mosquitoes, nearly year-round',
          d: 'The Valley rarely freezes. Without the hard cold snap other regions get, breeding does not stop over winter the way it does further north: the season is long, and control has to be continuous rather than a one-off summer visit.',
        },
        {
          n: 'Resacas and standing water',
          d: 'Resacas — the river’s old oxbow channels — and irrigation canals are part of the Valley landscape and permanent breeding sites. A property near a resaca needs a different plan from one ten blocks away.',
        },
        {
          n: 'Red imported fire ants',
          d: 'Mounds show up in yards, sidewalks and play areas. The sting hurts, and for allergic people it is a medical problem, not a nuisance. We treat the mound and the surrounding area, because the colony relocates.',
        },
        {
          n: 'Subterranean termites',
          d: 'The Valley’s steady humidity favours them. They attack the structure from the ground and are usually found once damage is done, so preventive inspection is worth more than emergency treatment.',
        },
        {
          n: 'After the storm',
          d: 'Hurricane season leaves standing water for weeks. The mosquito surge arrives two or three weeks after the flooding, not during it — that is the moment to act, and almost nobody anticipates it.',
        },
      ]

  return (
    <>
      {/* ── Encabezado ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#111111]">
        <div className="container max-w-4xl">
          <FadeUp>
            <p
              className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white ${
                presente ? 'bg-[#ce1126]' : 'bg-white/15'
              }`}
            >
              {presente ? <Check className="size-3.5" /> : <Clock className="size-3.5" />}
              {c.etiqueta}
            </p>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight tracking-tighter text-white md:text-5xl">
              {c.titulo}
            </h1>
            <p className="mt-2 text-lg font-bold text-white/60">
              {isES ? 'Pest Control · Rio Grande Valley' : 'Control de Plagas · Valle de Texas'}
            </p>

            <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-slate-300 md:text-lg">
              {c.resumen}
            </p>

            <div className="mt-7 rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-sm leading-relaxed text-slate-300">{c.aviso}</p>
            </div>

            {/*
              El botón de contratar SOLO existe si el servicio existe. Con
              ESTADO='proximamente' el único enlace es a franquicias: invertir
              en el territorio es lo que sí se puede hacer hoy.
            */}
            <div className="mt-7 flex flex-wrap gap-3">
              {presente ? (
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ce1126] px-6 py-3 font-bold text-white transition-colors hover:bg-[#a50d1e]"
                >
                  {c.cta}
                  <ArrowRight className="size-4" />
                </a>
              ) : (
                <Link
                  href="/franquicias"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ce1126] px-6 py-3 font-bold text-white transition-colors hover:bg-[#a50d1e]"
                >
                  {isES ? 'Información para franquiciatarios' : 'Franchise information'}
                  <ArrowRight className="size-4" />
                </Link>
              )}
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:border-white"
              >
                {isES ? 'Ver nuestra operación en México' : 'See our operation in Mexico'}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Por qué el Valle es distinto ──────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-tighter text-[#111111] md:text-4xl">
              {isES
                ? 'Por qué el Valle tiene su propio problema de plagas'
                : 'Why the Valley has its own pest problem'}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
            <p className="mt-6 max-w-[70ch] leading-relaxed text-[#5A6070]">
              {isES
                ? 'El Valle no se parece al resto de Texas ni al resto de México. El clima subtropical sin heladas, las resacas, el riego agrícola y la temporada de huracanes crean una combinación que no se da en otro lado, y que exige un calendario propio.'
                : 'The Valley is not like the rest of Texas, nor like the rest of Mexico. A subtropical climate without freezes, the resacas, agricultural irrigation and hurricane season create a combination you do not find elsewhere — and it calls for its own calendar.'}
            </p>
          </FadeUp>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {PLAGAS.map((p) => (
              <FadeUp key={p.n}>
                <article className="h-full rounded-2xl border border-[#E5E8EC] bg-[#F8F9FA] p-6">
                  <h3 className="text-lg font-bold text-[#111111]">{p.n}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6070]">{p.d}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cobertura geográfica ──────────────────────────────────────── */}
      <section className="section-padding border-t border-[#E5E8EC] bg-[#F8F9FA]">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="flex items-center gap-3 text-3xl font-black uppercase tracking-tighter text-[#111111] md:text-4xl">
              <MapPin className="size-7 text-[#ce1126]" />
              {isES ? 'Qué abarca el Valle' : 'What the Valley covers'}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
            <p className="mt-6 max-w-[70ch] leading-relaxed text-[#5A6070]">
              {isES
                ? 'El Rio Grande Valley son cuatro condados en el extremo sur de Texas, sobre la frontera con Tamaulipas.'
                : 'The Rio Grande Valley is four counties at the southern tip of Texas, along the border with Tamaulipas.'}
            </p>
          </FadeUp>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {CONDADOS.map((cond) => (
              <FadeUp key={cond.nombre}>
                <div className="rounded-2xl border border-[#E5E8EC] bg-white p-5">
                  <h3 className="text-sm font-black uppercase tracking-wide text-[#ce1126]">
                    {cond.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-[#5A6070]">{cond.ciudades.join(' · ')}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {!presente && (
            <FadeUp>
              <p className="mt-8 rounded-2xl border border-dashed border-[#C8CDD6] bg-white px-6 py-5 text-sm leading-relaxed text-[#5A6070]">
                {isES
                  ? `Esta es la zona que vamos a cubrir cuando abramos, prevista para ${ANIO_APERTURA}. Hoy todavía no operamos acá.`
                  : `This is the area we will cover when we open, planned for ${ANIO_APERTURA}. We do not operate here yet.`}
              </p>
            </FadeUp>
          )}
        </div>
      </section>

      {/* ── Bilingüe ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeUp>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-[#111111] md:text-4xl">
              {isES ? 'En español y en inglés' : 'In English and Spanish'}
            </h2>
            <div className="mt-4 h-0.5 w-32 bg-[#ce1126]" />
            <p className="mt-6 max-w-[70ch] leading-relaxed text-[#5A6070]">
              {isES
                ? 'En el Valle se vive en dos idiomas, y muchas familias tienen casa o negocio de los dos lados del río. Venimos de México, así que atender en español no es un agregado: es como trabajamos desde el primer día.'
                : 'The Valley lives in two languages, and many families have a home or a business on both sides of the river. We come from Mexico, so working in Spanish is not an add-on: it is how we have worked from day one.'}
            </p>
            <p className="mt-4 text-sm text-[#5A6070]">
              {isES
                ? `El teléfono que aparece en el sitio, ${SITE.phone}, es el de nuestra operación en México.`
                : `The phone number shown on this site, ${SITE.phone}, is for our operation in Mexico.`}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
