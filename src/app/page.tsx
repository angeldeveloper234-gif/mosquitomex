import { Hero }         from '@/components/sections/Hero'
import { WhyMosquito }  from '@/components/sections/WhyMosquito'
import { Solutions }    from '@/components/sections/Solutions'
import { Spaces }       from '@/components/sections/Spaces'
import { HowItWorks }   from '@/components/sections/HowItWorks'
import { Technology }   from '@/components/sections/Technology'
import { About }        from '@/components/sections/About'
import { Logos }        from '@/components/sections/Logos'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog }         from '@/components/sections/Blog'
import { Appointment }  from '@/components/sections/Appointment'
import { ProcessVideo } from '@/components/sections/ProcessVideo'
import { PestGrid }     from '@/components/sections/PestGrid'
import { Locations }    from '@/components/sections/Locations'
import { Franchise }    from '@/components/sections/Franchise'

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessVideo />
      <PestGrid />
      <WhyMosquito />
      <Solutions />
      <Spaces />
      <HowItWorks />
      {/* <Technology /> */}
      <About />
      <Logos />
      <Testimonials />
      <Locations />
      <Franchise />
      <Appointment />
      <Blog />
    </>
  )
}

