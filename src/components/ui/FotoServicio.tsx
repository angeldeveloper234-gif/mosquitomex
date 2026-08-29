import Image from 'next/image'
import { fotoDe, type SlotServicio } from '@/config/media-servicios'

/**
 * Foto de una tarjeta de servicio, o el cartel de lo que falta.
 *
 * El cartel NO es un rectángulo de color: escribe encima, legible, qué toma
 * hace falta para esa tarjeta. Un bloque liso es indistinguible de un error de
 * código, y así se publica sin que nadie lo note. Un cartel que dice "FALTA:
 * nebulización en exterior" se nota a la primera y además le dice al cliente
 * exactamente qué sacar.
 *
 * Se dibuja como SVG inline: no pesa, no pide red y se ve igual en cualquier
 * pantalla.
 */
export function FotoServicio({
  slot,
  className = '',
}: {
  slot: SlotServicio
  className?: string
}) {
  const foto = fotoDe(slot)

  if (!foto.pendiente) {
    return (
      <picture>
        <source srcSet={foto.webp} type="image/webp" />
        <Image
          src={foto.src}
          alt={foto.alt}
          width={1600}
          height={1067}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={className}
        />
      </picture>
    )
  }

  // Se parte en líneas cortas para que quepan en el cartel sin desbordarse.
  const lineas: string[] = []
  let actual = ''
  for (const palabra of foto.queFalta.split(' ')) {
    if ((actual + ' ' + palabra).trim().length > 34) {
      lineas.push(actual.trim())
      actual = palabra
    } else {
      actual += ' ' + palabra
    }
  }
  if (actual.trim()) lineas.push(actual.trim())

  return (
    <svg
      viewBox="0 0 480 320"
      className={className}
      role="img"
      aria-label={`Falta la foto: ${foto.queFalta}`}
    >
      <rect width="480" height="320" fill="#F1F3F5" />
      <rect
        x="8"
        y="8"
        width="464"
        height="304"
        fill="none"
        stroke="#C8CDD6"
        strokeWidth="2"
        strokeDasharray="10 8"
      />
      <text
        x="240"
        y="64"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="20"
        fontWeight="800"
        letterSpacing="2"
        fill="#ce1126"
      >
        FALTA ESTA FOTO
      </text>
      {lineas.slice(0, 5).map((linea, i) => (
        <text
          key={linea}
          x="240"
          y={112 + i * 26}
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="17"
          fill="#3C4450"
        >
          {linea}
        </text>
      ))}
      <text
        x="240"
        y="290"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="13"
        fill="#8A919E"
      >
        Solo fotos reales de la operación · nada de stock
      </text>
    </svg>
  )
}
