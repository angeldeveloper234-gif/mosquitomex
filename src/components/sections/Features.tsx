/* =============================================================================
 * ⚠️  NO BORRAR ESTE ARCHIVO  ⚠️
 * =============================================================================
 *
 * Componente COMENTADO a propósito (agosto 2026), no eliminado.
 *
 * Motivo:
 *   - Es código muerto: no se importa desde ninguna parte del proyecto, así que
 *     nunca llegó a renderizarse en el sitio.
 *   - Lista servicios heredados de la plantilla original que NO son control de
 *     plagas: "heating" (Calefacción Exterior), "lighting" (Iluminación
 *     Decorativa), "turf" (Pasto Sintético) y "kitchens" (Cocinas Exteriores).
 *     Mezclar esos servicios con control de plagas diluye la relevancia
 *     temática del sitio frente a Google.
 *
 * Estado: PENDIENTE DE CONFIRMAR CON EL CLIENTE si alguno de esos servicios se
 * ofrece realmente. Por eso se conserva el código íntegro: basta con quitar
 * este bloque de comentario para reactivarlo.
 *
 * Las traducciones asociadas (`features.*`) siguen intactas en
 * src/lib/translations.ts. Los textos del footer relacionados
 * (`footer.servicesList.heating` y `.patioDesign`) también quedaron comentados
 * allí con la misma advertencia.
 *
 * Para reactivarlo:
 *   1. Quitar la apertura y el cierre de este comentario de bloque.
 *   2. Importar y renderizar <Features /> en src/app/page.tsx.
 * =============================================================================

'use client'

import { FadeUp } from '@/components/animations/FadeUp'
import { Bug, Droplet, ShieldAlert, Wind, Flame, Lightbulb, Sprout, Utensils } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const featureItems = [
  {
    key: "mosquito",
    icon: Bug,
  },
  {
    key: "mist",
    icon: Droplet,
  },
  {
    key: "spider",
    icon: ShieldAlert,
  },
  {
    key: "fly",
    icon: Wind,
  },
  {
    key: "heating",
    icon: Flame,
  },
  {
    key: "lighting",
    icon: Lightbulb,
  },
  {
    key: "turf",
    icon: Sprout,
  },
  {
    key: "kitchens",
    icon: Utensils,
  },
]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container">
        <FadeUp>
          <div className="text-center space-y-[1rem] mb-[4rem]">
            <h2 className="text-h2 font-black tracking-tighter uppercase leading-[1.15] text-[#111111] dark:text-slate-100">
              {t('features.titlePre')}<span className="text-[#ce1126]">{t('features.titleHighlight')}</span>
            </h2>
            <p className="mx-auto text-[#111111] dark:text-slate-300 font-medium text-[1rem] md:text-[1.125rem] max-w-[65ch]">
              {t('features.description')}
            </p>
          </div>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
          {featureItems.map((feature, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="group relative p-[2rem] rounded-[0.5rem] border border-gray-200/50 bg-white dark:bg-slate-950 dark:border-slate-800 hover:border-[#ce1126] hover:shadow-md hover:-translate-y-[0.25rem] transition-all duration-300">
                <div className="mb-[1.5rem] inline-flex h-[3rem] w-[3rem] rounded-[0.25rem] items-center justify-center bg-gray-100 dark:bg-slate-800 text-[#111111] dark:text-slate-300 group-hover:bg-[#ce1126] group-hover:text-white transition-colors duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-[1.25rem] font-black mb-[0.75rem] uppercase tracking-tight text-[#111111] dark:text-slate-100">
                  {t(`features.items.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-slate-400 text-[1rem] leading-relaxed max-w-[65ch]">
                  {t(`features.items.${feature.key}.desc`)}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

 * ========================================================================== */

export {}
