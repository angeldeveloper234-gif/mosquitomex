import { Hero }         from '@/components/sections/Hero'
import { WhyMosquito }  from '@/components/sections/WhyMosquito'
import { Solutions }    from '@/components/sections/Solutions'
import { Spaces }       from '@/components/sections/Spaces'
import { HowItWorks }   from '@/components/sections/HowItWorks'
import { About }        from '@/components/sections/About'
import { Logos }        from '@/components/sections/Logos'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog }         from '@/components/sections/Blog'
import { Appointment }  from '@/components/sections/Appointment'
import { ProcessVideo } from '@/components/sections/ProcessVideo'
import { PestGrid }     from '@/components/sections/PestGrid'
import { Locations }    from '@/components/sections/Locations'
import { Franchise }    from '@/components/sections/Franchise'
import { FAQ }          from '@/components/sections/FAQ'
import { JsonLd }       from '@/components/seo/JsonLd'
import { faqSchema }    from '@/lib/structured-data'
import { HOME_FAQ }     from '@/lib/faq-home'
import { generatePageMetadata } from '@/lib/seo'

// Nota: <Technology /> está fuera del render (sección pendiente de contenido).
// El enlace del menú que apuntaba a #tecnologia se corrigió en Header.tsx.

export const metadata = generatePageMetadata({
  title: 'Control de Plagas en México | Fumigación Profesional',
  description:
    'Eliminamos mosquitos, cucarachas, roedores, termitas y chinches en hogares y empresas. Técnicos profesionales, cobertura en todo México y cotización sin costo.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />
      <ProcessVideo />
      <PestGrid />
      <WhyMosquito />
      <Solutions />
      <Spaces />
      <HowItWorks />
      <About />
      <Logos />
      <Testimonials />
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
