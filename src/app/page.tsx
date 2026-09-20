import { Hero }         from '@/components/sections/Hero'
import { WhyMosquito }  from '@/components/sections/WhyMosquito'
import { Solutions }    from '@/components/sections/Solutions'
import { Spaces }       from '@/components/sections/Spaces'
import { HowItWorks }   from '@/components/sections/HowItWorks'
import { About }        from '@/components/sections/About'
import { Logos }        from '@/components/sections/Logos'
import { Blog }         from '@/components/sections/Blog'
import { Appointment }  from '@/components/sections/Appointment'
import { ProcessVideo } from '@/components/sections/ProcessVideo'
import { PestGrid }     from '@/components/sections/PestGrid'
import { Locations }    from '@/components/sections/Locations'
import { Presencia }    from '@/components/sections/Presencia'
import { Franchise }    from '@/components/sections/Franchise'
import { FAQ }          from '@/components/sections/FAQ'
import { HOME_FAQ }     from '@/lib/faq-home'
import { generatePageMetadata } from '@/lib/seo'

// Nota: <Technology /> está fuera del render (sección pendiente de contenido).
// El enlace del menú que apuntaba a #tecnologia se corrigió en Header.tsx.

/**
 * CDMX va al frente del title porque es de donde entra hoy la mayoría de las
 * consultas. El norte no desaparece: Monterrey queda en el mismo title y las
 * cuatro ciudades tienen página propia enlazada desde el pie.
 *
 * La description nombra las cuatro. Es el límite: agregar más ciudades acá
 * sería relleno de palabras clave, no información, y Google recorta la
 * description alrededor de los 155 caracteres de todos modos.
 */
export const metadata = generatePageMetadata({
  title: 'Control de Plagas en CDMX, Monterrey y todo México | Fumigación',
  description:
    'Control de plagas y fumigación profesional en Ciudad de México, Monterrey, Saltillo y Guadalajara. Mosquitos, cucarachas, roedores, termitas y chinches. Cotización sin costo.',
  path: '/',
  keywords: [
    'control de plagas Ciudad de México',
    'fumigación CDMX',
    'control de plagas Monterrey',
    'control de plagas Saltillo',
    'control de plagas Guadalajara',
  ],
})

export default function Home() {
  return (
    <>
      {/*
        El schema FAQPage ya NO se emite acá: vive en /faq, que tiene el
        conjunto completo. Dos paginas con el mismo FAQPage y las mismas
        preguntas compiten entre si y Google se queda con una. El bloque
        visible del home se mantiene igual.
      */}
      <Hero />
      <ProcessVideo />
      <PestGrid />
      <WhyMosquito />
      <Solutions />
      <Spaces />
      <HowItWorks />
      <About />
      <Logos />
      {/*
        SIN SECCIÓN DE TESTIMONIOS.

        Los tres que había ("Bo Spencer", "Baron Von Anderson", "Lisa Harris")
        entraron en el commit fundacional del sitio, sin fuente, y hablaban de
        un "sistema de enfriamiento" — copy de la plantilla original, no de un
        cliente de MosquitoMEX. Tres nombres estadounidenses en un sitio
        mexicano cuyo perfil de Google no tiene ninguna reseña.

        PARA VOLVER A PONERLA hacen falta reseñas reales y rastreables: las del
        perfil de Google del negocio, con el nombre tal como la persona lo
        firmó. Reseñas inventadas visibles son un riesgo real, no un detalle
        de copy.
      */}
      <Presencia />
      <Locations />
      <Franchise />
      <Appointment />
      <FAQ
        items={HOME_FAQ}
        subtitle="Resolvemos las dudas más comunes antes de contratar un servicio de control de plagas."
      />
      <Blog />
    </>
  )
}
