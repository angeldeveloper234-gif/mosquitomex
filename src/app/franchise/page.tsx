import { Franchise } from '@/components/sections/Franchise'
import { FranchiseForm } from '@/components/sections/FranchiseForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structured-data'
import { generatePageMetadata } from '@/lib/seo'
import { SITE } from '@/lib/site'

/**
 * Landing de franquicias en INGLÉS.
 *
 * Existe como ruta propia (y no como toggle de idioma) porque el cambio ES/EN
 * del sitio es client-side: Google siempre vería español. Con una URL separada,
 * la oportunidad de franquicia sí se indexa en inglés, que es donde están los
 * inversionistas extranjeros que buscan negocios en México.
 *
 * El resto del sitio sigue posicionando solo en español, que es donde está el
 * volumen de clientes de control de plagas.
 */
export const metadata = generatePageMetadata({
  title: 'MosquitoMEX Franchise Opportunity in Mexico',
  description:
    'Own a MosquitoMEX pest control franchise in Mexico. Proven business model, full training and year-round demand. Request franchise information today.',
  path: '/franchise',
  locale: 'en_US',
  keywords: [
    'pest control franchise',
    'franchise opportunity Mexico',
    'pest control business opportunity',
    'buy a franchise in Mexico',
    'mosquito control franchise',
    'invest in Mexico business',
  ],
  languages: {
    'es-MX': '/franquicias',
    en: '/franchise',
    'x-default': '/franquicias',
  },
})

export default function FranchisePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Franchise', path: '/franchise' },
        ])}
      />
      <Franchise mode="page" lang="en" />
      <FranchiseForm lang="en" />
    </>
  )
}
