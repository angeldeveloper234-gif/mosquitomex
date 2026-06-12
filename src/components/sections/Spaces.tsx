import { ArrowRight, Home, PartyPopper, Utensils, Hotel } from 'lucide-react'

const ICON_MAP = {
  Home: Home,
  PartyPopper: PartyPopper,
  Utensils: Utensils,
  Hotel: Hotel,
}

const CONTENT = {
  es: {
    eyebrow: 'Para tu espacio',
    title: 'Protegemos',
    titleHighlight: 'cada rincón',
    cta: 'Solicitar cotización',
    spaces: [
      {
        icon: 'Home',
        label: 'Residencial',
        desc: 'Jardines, patios, terrazas y albercas. Protege a tu familia en los espacios que más disfrutan.',
      },
      {
        icon: 'PartyPopper',
        label: 'Eventos',
        desc: 'Bodas, fiestas y reuniones al aire libre. Sin mosquitos, tus invitados lo agradecerán.',
      },
      {
        icon: 'Utensils',
        label: 'Restaurantes',
        desc: 'Terrazas y comedores exteriores libres de mosquitos. Más reseñas de 5 estrellas.',
      },
      {
        icon: 'Hotel',
        label: 'Hoteles',
        desc: 'Áreas comunes, albercas y jardines. Estancias memorables sin interrupciones.',
      },
    ],
  },
  en: {
    eyebrow: 'For Your Space',
    title: 'We protect',
    titleHighlight: 'every corner',
    cta: 'Request a quote',
    spaces: [
      {
        icon: 'Home',
        label: 'Residential',
        desc: 'Gardens, patios, terraces, and pools. Protect your family where they enjoy most.',
      },
      {
        icon: 'PartyPopper',
        label: 'Events',
        desc: 'Weddings, parties, and outdoor gatherings. No mosquitoes — your guests will thank you.',
      },
      {
        icon: 'Utensils',
        label: 'Restaurants',
        desc: 'Mosquito-free outdoor terraces and dining areas. More 5-star reviews.',
      },
      {
        icon: 'Hotel',
        label: 'Hoteles', // Match label or map properly
        desc: 'Common areas, pools, and gardens. Memorable stays without interruptions.',
      },
    ],
  },
}

export function Spaces() {
  const { language } = useLanguage()
  const c = CONTENT[language as 'es' | 'en'] ?? CONTENT.es

  const scrollToContact = () => {
    document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="espacios" className="section-padding bg-[#F8F8F8]">
      <div className="container">

        <FadeUp>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-[#e82536] text-[0.7rem] font-bold uppercase tracking-[0.18em] mb-4">
              <span className="w-5 h-px bg-[#e82536]" />
              {c.eyebrow}
              <span className="w-5 h-px bg-[#e82536]" />
            </div>
            <h2 className="text-h2 font-black tracking-tighter uppercase text-[#082135] leading-[1.1]">
              {c.title}{' '}
              <span className="text-[#e82536]">{c.titleHighlight}</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.spaces.map((space, i) => {
            const IconComponent = ICON_MAP[space.icon as keyof typeof ICON_MAP]
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <button
                  onClick={scrollToContact}
                  className="group w-full text-left flex flex-col gap-4 p-6 bg-white rounded border border-[#E5E8EC] shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-[#e82536] transition-all duration-200 cursor-pointer h-full"
                >
                  <div className="text-[#e82536] bg-[#fdeaec] p-3 rounded self-start group-hover:bg-[#e82536] group-hover:text-white transition-colors duration-200">
                    {IconComponent && <IconComponent className="size-6" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-[#082135] uppercase tracking-tight text-base mb-1.5">
                      {space.label}
                    </h3>
                    <p className="text-[#5A6070] text-sm leading-relaxed">{space.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#e82536] text-xs font-bold uppercase tracking-wide mt-auto">
                    {c.cta}
                    <ArrowRight className="size-3" />
                  </div>
                </button>
              </FadeUp>
            )
          })}
        </div>

      </div>
    </section>
  )
}
