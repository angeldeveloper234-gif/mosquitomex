'use client'

import Link from 'next/link'
import { ArrowRight, Check, Clock } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { CIUDADES, rutaCiudad } from '@/lib/cities'
import { ANIO_APERTURA, ESTADO, copy } from '@/lib/valle-texas'

/**
 * Presencia internacional de la marca.
 *
 * ── LA REGLA QUE MANDA ACÁ ───────────────────────────────────────────────
 *
 * México está ACTIVO. Estados Unidos NO. Y la diferencia tiene que verse a
 * simple vista, sin leer la letra chica: distinto color, distinto icono,
 * etiqueta "Próximamente 2027" y —sobre todo— sin ningún botón de contratar,
 * sin formulario y sin teléfono en la tarjeta de Texas.
 *
 * Un visitante de Texas que llegue acá tiene que entender en dos segundos que
 * todavía no le podemos dar servicio. Insinuar lo contrario para captar un
 * lead no solo es mentir: genera una consulta que hay que rechazar, y eso
 * cuesta más que no haberla recibido.
 *
 * No hay cifras de franquicias, ni de países, ni de clientes: no las tenemos
 * confirmadas. Lo único que se afirma es lo verdadero — presencia en México y
 * apertura prevista en Texas en 2027.
 */
export function Presencia() {
  const { language } = useLanguage()
  const isES = language === 'es'
  // Mismo interruptor que la pagina del Valle: si cambia el estado, cambian
  // los dos a la vez. Dos textos con estados distintos es como el sitio se
  // contradice solo.
  const presenteEnValle = ESTADO === 'presente'
  const cValle = copy(isES ? 'es' : 'en')

  return (
    <section
      id="presencia"
      className="section-padding border-t border-[#E5E8EC] bg-white"
    >
      <div className="container max-w-4xl">
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="text-[#111111] text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 leading-tight">
              {isES ? 'Una marca que crece' : 'A brand that is growing'}
            </h2>
            <div className="w-48 h-0.5 bg-[#ce1126] mx-auto mb-6" />
            <p className="text-[#5A6070] font-medium text-sm md:text-base max-w-[70ch] mx-auto leading-relaxed">
              {isES
                ? 'Mosquito Mex es una franquicia internacional de control de plagas. Hoy operamos en México, y la red sigue abriendo territorios.'
                : 'Mosquito Mex is an international pest control franchise. Today we operate in Mexico, and the network keeps opening new territories.'}
            </p>
          </div>
        </FadeUp>

        <div className="grid gap-5 md:grid-cols-2">
          {/* ── México: ACTIVO ──────────────────────────────────────────── */}
          <FadeUp delay={0.05}>
            <article className="h-full rounded-2xl border-2 border-[#ce1126] bg-white p-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#ce1126] px-3 py-1 text-[0.6875rem] font-black uppercase tracking-[0.14em] text-white">
                <Check className="size-3.5" />
                {isES ? 'En operación' : 'Operating now'}
              </p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tighter text-[#111111]">
                México
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6070]">
                {isES
                  ? 'Damos servicio a hogares y empresas en todo el país, con página propia para nuestras ciudades principales.'
                  : 'We serve homes and businesses nationwide, with dedicated pages for our main cities.'}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {CIUDADES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={rutaCiudad(c.slug)}
                      className="inline-block rounded-full border border-[#E5E8EC] px-3 py-1 text-xs font-bold text-[#111111] transition-colors hover:border-[#ce1126] hover:text-[#ce1126]"
                    >
                      {c.nombre}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/#cobertura"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#ce1126] hover:underline"
              >
                {isES ? 'Ver cobertura' : 'See coverage'}
                <ArrowRight className="size-4" />
              </Link>
            </article>
          </FadeUp>

          {/*
            ── Estados Unidos: TODAVÍA NO ──────────────────────────────────
            Tarjeta deliberadamente apagada: borde punteado, gris, icono de
            reloj y CERO llamados a la acción de contratación. El único enlace
            es a franquicias, que es lo que sí se puede hacer hoy: invertir,
            no contratar el servicio.
          */}
          <FadeUp delay={0.1}>
            <article className={`h-full rounded-2xl border-2 p-7 ${presenteEnValle ? "border-[#ce1126] bg-white" : "border-dashed border-[#C8CDD6] bg-[#F8F9FA]"}`}>
              <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.6875rem] font-black uppercase tracking-[0.14em] text-white ${
                presenteEnValle ? 'bg-[#ce1126]' : 'bg-[#5A6070]'
              }`}>
                {presenteEnValle ? <Check className="size-3.5" /> : <Clock className="size-3.5" />}
                {cValle.etiqueta}
              </p>
              <h3 className="mt-4 text-2xl font-black uppercase tracking-tighter text-[#5A6070]">
                {isES ? 'Valle de Texas · EE.UU.' : 'Rio Grande Valley · USA'}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5A6070]">
                {cValle.resumen}
              </p>

              <p className="mt-4 rounded-lg bg-white px-4 py-3 text-xs leading-relaxed text-[#5A6070]">
                {cValle.aviso}
              </p>

              <Link
                href="/valle-de-texas"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#5A6070] hover:text-[#111111] hover:underline"
              >
                {isES ? 'Ver el Valle de Texas' : 'See the Rio Grande Valley'}
                <ArrowRight className="size-4" />
              </Link>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
