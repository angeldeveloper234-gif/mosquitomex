import Link from 'next/link'
import { Phone, Mail, Clock, Globe2 } from 'lucide-react'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Appointment } from '@/components/sections/Appointment'
import { SITE } from '@/lib/site'

/**
 * Página de contacto.
 *
 * El sitio tenía el formulario solo como una sección del home (#appointment).
 * Eso significa que quien busca "contacto mosquitomex", o quien quiere pasarle
 * el dato a otra persona, no tiene ninguna URL que mandar. Esta página existe
 * para ser esa URL.
 *
 * Los datos de contacto van en texto ANTES del formulario, no después: la
 * mayoría de quien entra a la página de contacto de una fumigadora quiere
 * llamar ahora, no llenar campos.
 */
export const metadata = generatePageMetadata({
  title: 'Contacto | Teléfono, WhatsApp y Cotización',
  description:
    'Contacta a MosquitoMEX para control de plagas y fumigación. Teléfono, WhatsApp y correo directos, o solicita tu cotización sin costo desde el formulario.',
  path: '/contacto',
  keywords: [
    'contacto MosquitoMEX',
    'teléfono fumigación',
    'cotización control de plagas',
    'fumigadora teléfono',
  ],
})

const VIAS = [
  {
    icono: Phone,
    titulo: 'Teléfono',
    valor: SITE.phone,
    href: SITE.phoneHref,
    nota: 'La vía más rápida si ya tienes una plaga en casa o en el negocio.',
  },
  {
    icono: Mail,
    titulo: 'Correo',
    valor: SITE.email,
    href: `mailto:${SITE.email}`,
    nota: 'Para cotizaciones de empresa, programas continuos y facturación.',
  },
]

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Contacto', path: '/contacto' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contacto — MosquitoMEX',
            url: `${SITE.url}/contacto`,
            about: { '@id': `${SITE.url}/#business` },
          },
        ]}
      />

      {/* ── ENCABEZADO ─────────────────────────────────────── */}
      <section className="bg-[#111111] text-white section-padding">
        <div className="container max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-5">
            Contacto
          </h1>
          <div className="w-32 h-1 bg-[#ce1126] mx-auto mb-6" />
          <p className="text-white/85 text-[1.0625rem] md:text-[1.1875rem] leading-relaxed max-w-[62ch] mx-auto">
            Llámanos, escríbenos por WhatsApp o déjanos tus datos en el formulario. La
            inspección y la cotización no tienen costo, y le decimos el precio antes de
            empezar cualquier trabajo.
          </p>
        </div>
      </section>

      {/* ── VÍAS DE CONTACTO ───────────────────────────────── */}
      <section className="section-padding bg-white dark:bg-slate-950">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIAS.map((via) => (
              <a
                key={via.titulo}
                href={via.href}
                className="group flex flex-col bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#ce1126] hover:shadow-md transition-all"
              >
                <via.icono className="size-7 text-[#006847] mb-4" />
                <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-1.5 leading-tight group-hover:text-[#ce1126] transition-colors">
                  {via.titulo}
                </h2>
                <p className="text-[#111111] dark:text-white font-black text-[1.0625rem] mb-2.5 break-words">
                  {via.valor}
                </p>
                <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                  {via.nota}
                </p>
              </a>
            ))}

            {/* WhatsApp va aparte: es enlace externo y abre en otra pestaña. */}
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-[#F8F9FA] dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6 hover:border-[#25D366] hover:shadow-md transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-7 text-[#25D366] mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-1.5 leading-tight group-hover:text-[#25D366] transition-colors">
                WhatsApp
              </h2>
              <p className="text-[#111111] dark:text-white font-black text-[1.0625rem] mb-2.5">
                {SITE.phone}
              </p>
              <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                Puede mandarnos una foto de la plaga o del daño y lo orientamos.
              </p>
            </a>
          </div>

          {/*
            DATOS OPERATIVOS.

            ACÁ FALTAN DOS TARJETAS: horario de atención y domicilio.

            No están porque el cliente todavía no confirmó ninguno de los dos,
            y no se inventan. El horario menos que nada: el perfil de Google
            del negocio declara hoy uno incorrecto, así que poner acá un
            horario "razonable" no arreglaría el problema, lo duplicaría en dos
            fuentes que se contradicen.

            No decir algo no es mentir; decir algo inventado sí. Cuando Jorge
            los pase, vuelven como tarjetas al lado de esta, con los iconos
            Clock y MapPin de lucide-react.
          */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6">
              <Globe2 className="size-6 text-[#006847] mb-3" />
              <h2 className="text-base font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2">
                Dónde damos servicio
              </h2>
              <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                Ciudad de México, Monterrey, Saltillo y Guadalajara.{' '}
                <Link href="/cobertura" className="text-[#006847] font-bold hover:underline">
                  Ver la cobertura completa
                </Link>
                .
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-[#E5E8EC] dark:border-slate-800 rounded-lg p-6">
              <Clock className="size-6 text-[#006847] mb-3" />
              <h2 className="text-base font-bold uppercase tracking-tight text-[#111111] dark:text-white mb-2">
                Cuándo le respondemos
              </h2>
              <p className="text-[#5A6070] dark:text-slate-400 text-[0.9375rem] leading-relaxed">
                Llámenos o escríbanos por WhatsApp y le contestamos. Si nos deja sus datos
                en el formulario, nos comunicamos con usted para coordinar la visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*
        El formulario es el mismo <Appointment /> del home, no una copia: si
        cambia el formulario, cambia en los dos lados a la vez.
      */}
      <Appointment />
    </>
  )
}
