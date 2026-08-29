/**
 * Mapa de Texas con el Rio Grande Valley resaltado.
 *
 * SVG inline y dibujado a mano: sin librería de mapas, sin GeoJSON, sin una
 * dependencia nueva. Pesa lo que ocupa este archivo y no pide una sola
 * petición de red.
 *
 * El contorno es una silueta ESTILIZADA de Texas, no una proyección
 * cartográfica. Se conservan los rasgos que hacen a Texas reconocible de un
 * vistazo —el panhandle arriba, el escalón de El Paso a la izquierda, la curva
 * del Río Bravo bajando hacia el sureste y la punta del Valle abajo— sin
 * pretender precisión de coordenadas. Para orientar a alguien sobre dónde
 * queda el Valle es lo que hace falta; un contorno exacto pesaría mucho más y
 * no comunicaría nada extra a este tamaño.
 *
 * Los cuatro condados se marcan como puntos con etiqueta, no como polígonos:
 * a esta escala los polígonos reales serían manchas indistinguibles.
 *
 * Colores por `currentColor` y tokens de marca, así funciona sobre fondo claro
 * y oscuro sin duplicar el componente.
 */

/** Los cuatro condados, ubicados sobre la silueta. */
const CONDADOS_MAPA = [
  { nombre: 'Starr', x: 300, y: 396 },
  { nombre: 'Hidalgo', x: 322, y: 407 },
  { nombre: 'Willacy', x: 348, y: 400 },
  { nombre: 'Cameron', x: 345, y: 414 },
] as const

export function MapaTexas({
  className = '',
  idPrefijo = 'tx',
  decorativo = false,
}: {
  className?: string
  /** Evita colisión de ids si el mapa se usa dos veces en la misma página. */
  idPrefijo?: string
  /**
   * true cuando el mapa es solo fondo y el mismo mapa ya aparece descrito en
   * otra parte de la página. Lo oculta al lector de pantalla en vez de hacerle
   * leer la misma descripción dos veces.
   *
   * Es una prop y no un `aria-hidden` suelto desde afuera porque TypeScript
   * acepta `aria-*` en cualquier componente sin comprobar que se reenvíe: se
   * escribiría igual, no fallaría el build, y no haría nada.
   */
  decorativo?: boolean
}) {
  const idBrillo = `${idPrefijo}-brillo`

  const etiqueta = decorativo
    ? { 'aria-hidden': true as const, focusable: 'false' as const }
    : {
        role: 'img' as const,
        'aria-label':
          'Mapa de Texas con el Valle de Texas, en el extremo sur sobre la frontera con México, resaltado. Incluye los condados de Starr, Hidalgo, Willacy y Cameron.',
      }

  return (
    <svg viewBox="0 0 460 470" className={className} {...etiqueta}>
      <defs>
        <radialGradient id={idBrillo} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ce1126" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ce1126" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/*
        Silueta de Texas. El trazo va: panhandle (arriba, rectangular) →
        frontera norte → borde este con Luisiana → costa del Golfo bajando al
        suroeste → punta del Valle → Río Bravo subiendo al noroeste → escalón
        de El Paso → vuelta al panhandle.
      */}
      <path
        d="M126 44 L232 40 L236 96 L300 100 L318 132 L330 178 L352 206
           L368 250 L392 286 L404 318 L378 352 L352 378 L338 400 L352 418
           L330 428 L300 404 L268 388 L238 356 L206 330 L172 316 L146 286
           L118 262 L96 230 L74 196 L58 158 L44 120 L60 116 L92 118 L124 120 Z"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* El Río Bravo: es la frontera con México y el borde suroeste. */}
      <path
        d="M44 120 L58 158 L74 196 L96 230 L118 262 L146 286 L172 316
           L206 330 L238 356 L268 388 L300 404 L338 400"
        fill="none"
        stroke="#006847"
        strokeOpacity="0.65"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />

      {/* Halo sobre el Valle, para que el ojo caiga ahí primero. */}
      <circle cx="326" cy="404" r="72" fill={`url(#${idBrillo})`} />

      {/* La zona del Valle, resaltada. */}
      <path
        d="M286 386 L318 396 L352 392 L360 412 L338 426 L304 414 L284 400 Z"
        fill="#ce1126"
        fillOpacity="0.85"
        stroke="#ce1126"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {CONDADOS_MAPA.map((c) => (
        <circle key={c.nombre} cx={c.x} cy={c.y} r="3.2" fill="#ffffff" />
      ))}

      {/* Línea guía hasta la etiqueta, para no encimar texto sobre el Valle. */}
      <path
        d="M352 410 L400 434"
        stroke="#ce1126"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="404"
        y="432"
        fontFamily="system-ui, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#ce1126"
      >
        Valle de
      </text>
      <text
        x="404"
        y="448"
        fontFamily="system-ui, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#ce1126"
      >
        Texas
      </text>

      <text
        x="150"
        y="200"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="3"
        fill="currentColor"
        fillOpacity="0.32"
      >
        TEXAS
      </text>

      {/* México, del otro lado del río. Contexto, no cobertura. */}
      <text
        x="120"
        y="330"
        fontFamily="system-ui, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="1.5"
        fill="#006847"
        fillOpacity="0.7"
        transform="rotate(-38 120 330)"
      >
        MÉXICO
      </text>
    </svg>
  )
}
