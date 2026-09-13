import Link from 'next/link'
import { ArrowRight, Phone, Ruler, Bug, Building2, Repeat, ClipboardCheck } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { PorConfirmar } from '@/components/ui/PorConfirmar'
import { PCP } from '@/lib/pcp'
import { SITE } from '@/lib/site'

/**
 * Precios.
 *
 * NO LLEVA NÚMEROS. El cliente todavía no pasó su lista de precios y no se
 * inventa ninguno: un precio inventado en una página de precios es la peor
 * clase de dato falso, porque la persona llama con esa cifra en la cabeza.
 *
 * La página se hace igual porque la intención de búsqueda existe y hoy nadie
 * la atiende: "cuánto cuesta una fumigación", "fumigaciones económicas",
 * "fumigación de cucarachas precios", "costo de fumigación por metro
 * cuadrado". Lo que sí se puede responder con la verdad es CÓMO SE COTIZA:
 * qué mueve el presupuesto, qué incluye la visita y cómo pedir la cotización.
 * Eso responde la búsqueda de verdad.
 *
 * Cuando lleguen los precios: reemplazar el bloque <PorConfirmar> del rango
 * por la cifra y borrar este párrafo.
 */
export const metadata = generatePageMetadata({
  title: 'Precios | Cuánto Cuesta una Fumigación y Cómo se Cotiza',
  description:
    'Cómo se calcula el precio de una fumigación: metros cuadrados, tipo de plaga, nivel de infestación y si es servicio único o programa continuo. Inspección y cotización sin costo.',
  path: '/precios',
  keywords: [
    'cuánto cuesta una fumigación',
    'precio fumigación',
    'costo de fumigación por metro cuadrado',
    'fumigación precios México',
    'cotización control de plagas',
  ],
})

const FACTORES = [
  {
    icono: Ruler,
    titulo: 'Metros cuadrados',
    detalle:
      'El área a tratar es el factor más pesado. No es lo mismo un departamento de 60 m² que una casa con jardín o una bodega. Se mide el área que realmente se va a tratar, no la escritura del inmueble.',
  },
  {
    icono: Bug,
    titulo: 'Tipo de plaga',
    detalle:
      'Cada plaga lleva un método y un producto distintos. Una chinche de cama o una termita requieren más trabajo, más tiempo y más seguimiento que una aplicación general contra insectos rastreros.',
  },
  {
    icono: ClipboardCheck,
    titulo: 'Nivel de infestación',
    detalle:
      'Una plaga detectada a tiempo se resuelve en menos visitas que una establecida desde hace meses. Es la razón más común por la que dos casas del mismo tamaño reciben cotizaciones distintas.',
  },
  {
    icono: Building2,
    titulo: 'Casa o negocio',
    detalle:
      'Un negocio de alimentos, un hotel o una bodega necesitan registro de cada visita y documentación para auditoría. Eso es parte del servicio y también del costo.',
  },
  {
    icono: Repeat,
    titulo: 'Servicio único o programa',
    detalle:
      'Una visita aislada y un programa continuo no se cotizan igual. El programa reparte el costo a lo largo del año y sale por debajo del precio por visita suelta; el servicio único resuelve un problema puntual.',
  },
]

export default function PreciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Precios', path: '/precios' },
        ])}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            ¿Cuánto cuesta una fumigación?
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            No existe un precio único, y quien le dé una cifra por teléfono sin haber visto
            el inmueble se la va a corregir al llegar. Acá le explicamos qué mueve el
            presupuesto, para que sepa qué va a pagar y por qué.
          </p>
        </div>
      </section>

      {/* ── QUÉ MUEVE EL PRECIO ────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-3 leading-tight">
            Cinco cosas mueven el presupuesto
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed max-w-[62ch] mb-10">
            Son las mismas cinco en cualquier empresa seria del rubro. Si entiende estas
            cinco, puede comparar dos cotizaciones y saber cuál es más cara de verdad.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FACTORES.map((factor) => (
              <div
                key={factor.titulo}
                className="bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6"
              >
                <factor.icono className="size-6 text-[#006847] mb-3" />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2 leading-tight">
                  {factor.titulo}
                </h3>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                  {factor.detalle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL RANGO, PENDIENTE ────────────────────────────── */}
      <section className="section-padding bg-[#F8F9FA] dark:bg-slate-900 border-t border-[#E5E8EC] dark:border-slate-800">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-5 leading-tight">
            Nuestro rango de precios
          </h2>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed mb-6 max-w-[58ch] mx-auto">
            <PorConfirmar>
              precio desde — rango por tipo de servicio y si aplica costo de visita
            </PorConfirmar>
          </p>
          <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed text-[0.9375rem] max-w-[58ch] mx-auto">
            Mientras tanto, la cotización se entrega por escrito después de la inspección y
            antes de empezar cualquier trabajo. No hay cargos que aparezcan después.
          </p>
        </div>
      </section>

      {/* ── QUÉ INCLUYE ────────────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-5 leading-tight">
            Qué incluye el servicio
          </h2>
          <div className="space-y-4 text-[#5A6070] dark:text-slate-400 leading-relaxed text-[1.0625rem]">
            <p>
              El modelo de servicio de la red {PCP.nombre} arranca siempre por el
              diagnóstico, no por la aplicación: un análisis de riesgo de plagas, un
              análisis del entorno y un estudio del inmueble. Con eso se arma el plan, y el
              cliente recibe desde el principio la información sobre sus condiciones y qué
              se va a hacer en el corto, mediano y largo plazo.
            </p>
            <p>
              En la práctica eso significa que la visita de inspección y la cotización no
              tienen costo, que usted sabe el precio antes de que empiece el trabajo, y que
              si el caso necesita seguimiento, el seguimiento se programa desde el principio
              en vez de cobrarse como un servicio nuevo.
            </p>
            <p>
              {/*
                La "Cobertura por Garantía" es un programa declarado en el catálogo de
                PCP Internacional. Se atribuye a la red, que es de donde sale el dato.
                Si aplica igual al servicio residencial de MosquitoMEX es algo que el
                cliente tiene que confirmar: no se afirma por nuestra cuenta.
              */}
              La red declara además una <strong className="text-[#111111] dark:text-white">Cobertura
              por Garantía</strong>, que permite recibir tantos servicios como sean
              necesarios, sin costo adicional y con respuesta dentro de las primeras 24
              horas, hasta que el cliente quede satisfecho.{' '}
              <PorConfirmar>
                si esta cobertura aplica igual al servicio residencial de MosquitoMEX y en
                qué condiciones
              </PorConfirmar>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="section-padding bg-[#006847] text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4 leading-tight">
            Pida su cotización
          </h2>
          <p className="text-white/85 leading-relaxed mb-8 max-w-xl mx-auto">
            Díganos qué está notando, en qué tipo de inmueble y en qué ciudad. La inspección
            y la cotización no tienen costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 bg-[#ce1126] hover:bg-[#a60d1e] text-white font-black text-sm px-8 py-4 rounded shadow-lg transition-colors uppercase tracking-wider"
            >
              Solicitar cotización
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
