import { Hero } from '@/components/sections/Hero'
import { Logos } from '@/components/sections/Logos'
import { Features } from '@/components/sections/Features'
import { MiddleCTA } from '@/components/sections/MiddleCTA'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { Blog } from '@/components/sections/Blog'
import { Appointment } from '@/components/sections/Appointment'

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <MiddleCTA />
      <About />
      <Testimonials />
      <Blog />
      <Appointment />
    </>
  )
}
