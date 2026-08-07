'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/animations/FadeUp'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/services'

/**
 * Acordeón de preguntas frecuentes.
 *
 * Usa <details>/<summary> nativos: el contenido de todas las respuestas queda
 * en el HTML del servidor, así que Google y los motores de IA lo leen aunque
 * el usuario no despliegue nada. El schema FAQPage se inyecta desde la página
 * que renderiza este componente.
 */
export function FAQ({
  items,
  title = 'Preguntas Frecuentes',
  subtitle,
}: {
  items: FaqItem[]
  title?: string
  subtitle?: string
}) {
  if (!items.length) return null

  return (
    <section id="faq" className="section-padding bg-white dark:bg-slate-950 border-t border-[#E5E8EC] dark:border-slate-800">
      <div className="container max-w-3xl">
        <FadeUp>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-[#111111] dark:text-white mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-[#ce1126] mx-auto" />
            {subtitle && (
              <p className="text-[#5A6070] dark:text-slate-400 mt-5 leading-relaxed max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="space-y-3">
            {items.map((item, i) => (
              <FaqRow key={i} item={item} />
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false)

  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="group border border-[#E5E8EC] dark:border-slate-800 rounded-lg bg-[#F8F9FA] dark:bg-slate-900 overflow-hidden transition-colors hover:border-[#006847]/40"
    >
      <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 select-none [&::-webkit-details-marker]:hidden">
        <h3 className="font-black text-[0.9375rem] md:text-base text-[#111111] dark:text-white leading-snug">
          {item.question}
        </h3>
        <ChevronDown
          className="size-5 shrink-0 text-[#006847] transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="px-5 pb-5 -mt-1">
        <p className="text-[#5A6070] dark:text-slate-400 leading-relaxed text-[0.9375rem]">
          {item.answer}
        </p>
      </div>
    </details>
  )
}
