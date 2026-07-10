import { Franchise } from '@/components/sections/Franchise'
import { FranchiseForm } from '@/components/sections/FranchiseForm'
import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Franquicias MosquitoMEX | Abre tu negocio de control de plagas',
  description:
    'Únete a la marca líder en control de plagas de México. Modelo de negocio probado, respaldo total y demanda todo el año. Solicita información de nuestras franquicias.',
  path: '/franquicias',
  keywords: [
    'franquicia control de plagas',
    'franquicia fumigación',
    'franquicia MosquitoMEX',
    'invertir en control de plagas México',
    'oportunidad de negocio fumigación',
    'abrir franquicia México',
  ],
})

export default function FranquiciasPage() {
  return (
    <>
      <Franchise mode="page" />
      <FranchiseForm />
    </>
  )
}
