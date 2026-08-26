import { notFound } from 'next/navigation'
import { CIUDADES, getCiudad, rutaCiudad } from '@/lib/cities'
import { generatePageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema, cityServiceSchema } from '@/lib/structured-data'
import { CityContent } from '@/components/sections/CityContent'

type Params = { ciudad: string }

export function generateStaticParams(): Params[] {
  return CIUDADES.map((c) => ({ ciudad: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { ciudad: slug } = await params
  const ciudad = getCiudad(slug)
  if (!ciudad) {
    return generatePageMetadata({
      title: 'Ciudad no encontrada',
      description: '',
      noIndex: true,
    })
  }

  return generatePageMetadata({
    title: ciudad.es.metaTitle,
    description: ciudad.es.metaDescription,
    path: rutaCiudad(ciudad.slug),
    keywords: [
      `control de plagas ${ciudad.nombre}`,
      `fumigación ${ciudad.nombre}`,
      `fumigadora ${ciudad.nombre}`,
      `control de plagas ${ciudad.estado}`,
    ],
  })
}

/**
 * Página de cobertura por ciudad.
 *
 * La metadata y el JSON-LD salen del servidor porque es lo que lee Google; el
 * contenido visible lo pinta un componente cliente, que es donde vive el
 * cambio de idioma.
 *
 * El title y la description van en español aunque la página sea bilingüe: la
 * búsqueda que se quiere ganar —"control de plagas en Ciudad de México"— se
 * hace en español. El visitante que llega puede cambiar el idioma con el
 * selector del encabezado.
 */
export default async function CiudadPage({ params }: { params: Promise<Params> }) {
  const { ciudad: slug } = await params
  const ciudad = getCiudad(slug)
  if (!ciudad) notFound()

  return (
    <>
      <JsonLd data={cityServiceSchema(ciudad)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: `Control de plagas en ${ciudad.nombre}`, path: rutaCiudad(ciudad.slug) },
        ])}
      />
      <CityContent ciudad={ciudad} />
    </>
  )
}
