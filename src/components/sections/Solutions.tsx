'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { useLanguage } from '@/context/LanguageContext'
import { Zap, Sprout, RefreshCw, Building2 } from 'lucide-react'

type LucideIcon = React.FC<React.SVGProps<SVGSVGElement> & { size?: number | string }>

interface SolutionItem {
  Icon: LucideIcon
  title: string
  desc: string
  badge: string | null
  badgeDark: boolean
}

const CONTENT: Record<'es' | 'en', { eyebrow: string; title: string; titleHighlight: string; items: SolutionItem[] }> = {
  es: {
    eyebrow: 'Lo que hacemos',
    title: 'Soluciones para',
    titleHighlight: 'cada necesidad',
    items: [
      {
        Icon: Zap as LucideIcon,
        title: 'Sistema Automático',
        desc: 'Nebulización programada cada día. Se activa solo, sin intervención. La protección set-and-forget definitiva.',
        badge: 'Más popular',
        badgeDark: false,
      },
      {
        Icon: Sprout as LucideIcon,
        title: 'Tratamiento Puntual',
        desc: 'Ideal para eventos o infestaciones específicas. Resultado inmediato sin instalación permanente.',
        badge: null,
        badgeDark: false,
      },
      {
        Icon: RefreshCw as LucideIcon,
        title: 'Mantenimiento',
        desc: 'Visitas periódicas para recargar y ajustar el sistema. Protección garantizada todo el año.',
        badge: null,
        badgeDark: false,
      },
      {
        Icon: Building2 as LucideIcon,
        title: 'Solución Comercial',
        desc: 'Para hoteles, restaurantes y empresas. Sistemas escalables con soporte y monitoreo dedicado.',
        badge: 'Enterprise',
        badgeDark: true,
      },
    ],
  },
  en: {
    eyebrow: 'What We Do',
    title: 'Solutions for',
    titleHighlight: 'every need',
    items: [
      {
        Icon: Zap as LucideIcon,
        title: 'Automatic System',
        desc: 'Scheduled daily misting. Activates on its own, no intervention needed. The ultimate set-and-forget protection.',
        badge: 'Most Popular',
        badgeDark: false,
      },
      {
        Icon: Sprout as LucideIcon,
        title: 'One-Time Treatment',
        desc: 'Ideal for events or specific infestations. Immediate results without permanent installation.',
        badge: null,
        badgeDark: false,
      },
      {
        Icon: RefreshCw as LucideIcon,
        title: 'Maintenance',
        desc: 'Periodic visits to recharge and adjust the system. Guaranteed protection all year long.',
        badge: null,
        badgeDark: false,
      },
      {
        Icon: Building2 as LucideIcon,
        title: 'Commercial Solution',
        desc: 'For hotels, restaurants, and businesses. Scalable systems with dedicated support and monitoring.',
        badge: 'Enterprise',
        badgeDark: true,
      },
    ],
  },
}

export function Solutions() {
  const { language } = useLanguage()
  const c = CONTENT[language as 'es' | 'en'] ?? CONTENT.es

  return (
    <section id="soluciones" className="section-padding bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group relative flex flex-col gap-4 p-6 rounded border border-[#E5E8EC] bg-white hover:bg-[#e82536] hover:border-transparent hover:-translate-y-1 transition-all duration-200 h-full cursor-default">
                {item.badge && (
                  <span
                    className={`absolute top-4 right-4 text-white text-[0.6rem] font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                      item.badgeDark ? 'bg-[#082135]' : 'bg-[#e82536] group-hover:bg-[#082135] group-hover:text-white'
                    } transition-colors`}
                  >
                    {item.badge}
                  </span>
                )}
                <div className="size-11 rounded bg-[#fdeaec] group-hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
                  <item.Icon className="size-5 text-[#e82536] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-black text-[#082135] group-hover:text-white uppercase tracking-tight text-[0.9rem] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5A6070] group-hover:text-white/80 text-sm leading-relaxed flex-1 transition-colors">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#e82536] group-hover:text-white hover:underline cursor-pointer"
                  >
                    <span>{language === 'es' ? 'Cotizar servicio' : 'Quote service'}</span>
                    <span className="text-base leading-none">→</span>
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
