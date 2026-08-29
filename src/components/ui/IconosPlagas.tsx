/**
 * Íconos de plagas, dibujados para el proyecto.
 *
 * SVG de trazo, sin librería nueva y sin emoji. El emoji tiene dos problemas
 * acá: cambia de dibujo según el sistema operativo, y los de Unicode reciente
 * —la cucaracha y la mosca son de 2020— salen como caja vacía en navegadores
 * o fuentes que no los traen.
 *
 * Cada uno se dibuja por los rasgos que distinguen a la especie, no por
 * "parecer un bicho": la probóscide del mosquito, la cintura y las antenas
 * acodadas de la hormiga, la cabeza ancha y las mandíbulas de la termita, la
 * cintura de avispa. A 40px tienen que poder diferenciarse entre sí.
 *
 * Todo va con `currentColor`, así heredan el color del contexto y funcionan
 * sobre claro y sobre oscuro sin duplicar nada.
 */

type Props = { className?: string }

const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

/** Mosquito: probóscide larga, alas estrechas, patas colgando. */
export function IconoMosquito({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Mosquito">
      <path d="M24 18v14" />
      <path d="M24 32l-3 6" />
      <circle cx="24" cy="15" r="3.4" />
      <path d="M22 12L15 6" />
      <path d="M26 12l7-6" />
      <path d="M22 20C16 16 11 17 8 21c4 3 10 3 14 0" />
      <path d="M26 20c6-4 11-3 14 1-4 3-10 3-14 0" />
      <path d="M22 26l-8 8" />
      <path d="M26 26l8 8" />
      <path d="M22 29l-9 3" />
      <path d="M26 29l9 3" />
    </svg>
  )
}

/** Hormiga roja de fuego: tres segmentos, cintura marcada, antenas acodadas. */
export function IconoHormiga({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Hormiga">
      <circle cx="24" cy="11" r="4" />
      <ellipse cx="24" cy="22" rx="4" ry="5" />
      <ellipse cx="24" cy="36" rx="5.5" ry="6.5" />
      <path d="M21 8l-4-3-1-3" />
      <path d="M27 8l4-3 1-3" />
      <path d="M20 19l-8-4" />
      <path d="M28 19l8-4" />
      <path d="M20 23h-9" />
      <path d="M28 23h9" />
      <path d="M20 27l-8 5" />
      <path d="M28 27l8 5" />
    </svg>
  )
}

/** Termita subterránea: cuerpo blando y ancho, cabeza con mandíbulas. */
export function IconoTermita({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Termita">
      <path d="M20 10h8a3 3 0 013 3v2a3 3 0 01-3 3h-8a3 3 0 01-3-3v-2a3 3 0 013-3z" />
      <path d="M21 10l-3-4" />
      <path d="M27 10l3-4" />
      <ellipse cx="24" cy="30" rx="7" ry="12" />
      <path d="M17 24h14" />
      <path d="M17 31h14" />
      <path d="M17 38h14" />
      <path d="M17 20l-6-3" />
      <path d="M31 20l6-3" />
      <path d="M17 25l-7 1" />
      <path d="M31 25l7 1" />
    </svg>
  )
}

/** Cucaracha: óvalo aplanado, antenas muy largas hacia atrás. */
export function IconoCucaracha({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Cucaracha">
      <circle cx="24" cy="13" r="3.5" />
      <path d="M21 11L12 4" />
      <path d="M27 11l9-7" />
      <ellipse cx="24" cy="29" rx="8.5" ry="13" />
      <path d="M24 17v24" />
      <path d="M16 21l-7-4" />
      <path d="M32 21l7-4" />
      <path d="M15 29H7" />
      <path d="M33 29h8" />
      <path d="M16 37l-7 4" />
      <path d="M32 37l7 4" />
    </svg>
  )
}

/** Rata: silueta de cuadrúpedo, oreja redonda, cola larga y fina. */
export function IconoRoedor({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Roedor">
      <path d="M8 32c0-6 5-10 11-10h8c6 0 11 4 11 9 0 4-3 6-7 6H15c-4 0-7-2-7-5z" />
      <circle cx="35" cy="24" r="5" />
      <circle cx="33" cy="19" r="3" />
      <path d="M40 25h3" />
      <path d="M39 27l3 2" />
      <path d="M39 23l3-2" />
      <path d="M8 32C4 30 3 24 6 20" />
      <path d="M17 37v4" />
      <path d="M28 37v4" />
    </svg>
  )
}

/** Avispa: cintura estrecha, abdomen con bandas, aguijón. */
export function IconoAvispa({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Avispa">
      <circle cx="24" cy="11" r="3.5" />
      <path d="M22 8l-3-4" />
      <path d="M26 8l3-4" />
      <ellipse cx="24" cy="19" rx="4.5" ry="4" />
      <path d="M24 23c-1 0-2 1-2 2s1 1 2 1 2 0 2-1-1-2-2-2z" />
      <ellipse cx="24" cy="34" rx="6" ry="8" />
      <path d="M18 32h12" />
      <path d="M18.5 37h11" />
      <path d="M24 42v3" />
      <path d="M20 16C14 12 9 13 7 17c4 3 9 3 13 1" />
      <path d="M28 16c6-4 11-3 13 1-4 3-9 3-13 1" />
    </svg>
  )
}

/** Gota: para el bloque de agua estancada y resacas. */
export function IconoAgua({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Agua estancada">
      <path d="M24 6c6 8 11 13 11 19a11 11 0 01-22 0c0-6 5-11 11-19z" />
      <path d="M18 27c0 3 2 6 5 6.5" />
    </svg>
  )
}

/** Tormenta: para el bloque de temporada de huracanes. */
export function IconoTormenta({ className = 'size-8' }: Props) {
  return (
    <svg {...base} className={className} role="img" aria-label="Tormenta">
      <path d="M14 30a8 8 0 011-15.9A11 11 0 0136 16a7 7 0 01-1 14H14z" />
      <path d="M26 32l-5 8h7l-4 7" />
    </svg>
  )
}
