import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { FAQ } from '@/components/sections/FAQ'
import { FAQ_GENERAL, FAQ_EMPRESA, FAQ_NEGOCIOS, FAQ_COMPLETA } from '@/lib/faq'
import { SITE } from '@/lib/site'

/**
 * Preguntas frecuentes.
 *
 * ESTA es la única página del sitio que emite el schema FAQPage. El home
 * conserva su bloque visible de ocho preguntas pero ya no emite schema: dos
 * FAQPage con las mismas preguntas compiten entre sí y Google se queda con uno.
 *
 * Las respuestas de empresa y de negocios salen del catálogo institucional de
 * PCP Internacional. Ver src/lib/faq.ts para la regla de atribución.
 */
export const metadata = generatePageMetadata({
  title: 'Preguntas Frecuentes | Control de Plagas y Fumigación',
  description:
    'Respuestas sobre control de plagas: seguridad para niños y mascotas, cuánto dura el efecto, si hay que salir de casa, qué garantía hay y cómo se cotiza. Para hogares y negocios.',
  path: '/faq',
  keywords: [
    'preguntas frecuentes fumigación',
    'es seguro fumigar con niños',
    'cuánto dura una fumigación',
    'garantía control de plagas',
    'fumigación restaurantes Distintivo H',
  ],
})

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Preguntas frecuentes', path: '/faq' },
          ]),
          // El FAQPage completo vive acá y solo acá.
          faqSchema(FAQ_COMPLETA),
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Preguntas frecuentes
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            Lo que más nos preguntan antes de contratar, respondido sin rodeos. Si lo que
            busca no está acá, escríbanos y se lo contestamos.
          </p>
        </div>
      </section>

      <FAQ
        items={FAQ_GENERAL}
        title="Antes de contratar"
        subtitle="Las dudas más comunes de quien está por fumigar su casa o su negocio."
      />

      <FAQ
        items={FAQ_EMPRESA}
        title="Sobre nosotros y la red"
        subtitle="Quiénes somos, con qué respaldo trabajamos y qué garantía tiene el servicio."
      />

      <FAQ
        items={FAQ_NEGOCIOS}
        title="Negocios, restaurantes e industria"
        subtitle="Programas continuos, documentación para auditoría y normatividad."
      />

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            ¿Le quedó una duda?
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            Cuéntenos su caso. La inspección y la cotización no tienen costo, y le decimos
            qué se puede resolver y qué no antes de que contrate nada.
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
