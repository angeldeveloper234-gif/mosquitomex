import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, valleTexasSchema } from '@/lib/structured-data'
import { ValleTexas } from '@/components/sections/ValleTexas'
import { ANIO_APERTURA, ESTADO } from '@/lib/valle-texas'

/**
 * Valle de Texas / Rio Grande Valley.
 *
 * SÍ SE INDEXA. Es lo contrario de la página de "próximamente" que había antes:
 * el objetivo es construir posicionamiento en la zona desde ahora, y para eso
 * hace falta contenido real. Una página vacía indexada no construye nada — baja
 * la calidad promedio del sitio.
 *
 * Lo que hace legítimo indexarla aunque todavía no se opere es que el contenido
 * es verdadero y útil por sí mismo: explica el problema de plagas del Valle. Lo
 * que NO hace es ofrecer un servicio que no existe; el estado se declara arriba
 * de todo y sin ambigüedad (ver src/lib/valle-texas.ts).
 *
 * El título mezcla los dos idiomas a propósito. No es relleno de palabras
 * clave: el Valle es bilingüe de verdad y la misma persona busca "control de
 * plagas" un día y "pest control" al otro. Un solo <title> tiene que servir a
 * las dos búsquedas porque hay una sola página.
 */
export const metadata = generatePageMetadata({
  title: 'Control de Plagas en el Valle de Texas | Pest Control Rio Grande Valley',
  description:
    ESTADO === 'presente'
      ? 'Control de plagas en el Valle de Texas / Rio Grande Valley: mosquitos, hormiga de fuego y termitas. Atención en español e inglés. Pest control across the Rio Grande Valley.'
      : `Franquicia internacional de control de plagas. El Valle de Texas / Rio Grande Valley es nuestra próxima apertura, prevista para ${ANIO_APERTURA}. Conozca el problema de plagas de la zona.`,
  path: '/valle-de-texas',
  keywords: [
    'control de plagas Valle de Texas',
    'fumigación Valle de Texas',
    'pest control Rio Grande Valley',
    'pest control RGV',
    'control de plagas McAllen',
    'pest control Brownsville',
    'exterminator Rio Grande Valley',
  ],
})

export default function ValleDeTexasPage() {
  return (
    <>
      <JsonLd data={valleTexasSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Valle de Texas', path: '/valle-de-texas' },
        ])}
      />
      <ValleTexas />
    </>
  )
}
