import Image from 'next/image'
import { fotoDe, type SlotServicio } from '@/config/media-servicios'

/**
 * Imagen de una tarjeta de servicio.
 *
 * Tres estados, en este orden:
 *
 *   1. Foto real de la operación, si existe. Es lo que se quiere.
 *   2. Ilustración de la plaga, mientras la foto no llegue. Dice qué plaga es
 *      sin afirmar nada sobre quién la trata: es la alternativa limpia, no un
 *      stock disfrazado de trabajo propio.
 *   3. Cartel que dice qué foto falta, si no hubiera ni foto ni ilustración.
 *      Nunca un cuadro de color: un bloque liso es indistinguible de un error
 *      de código y se publica sin que nadie lo note.
 *
 * El `alt` sigue al estado. Con ilustración dice "Ilustración de un mosquito",
 * no "Nuestro técnico fumigando": un alt que afirme más de lo que la imagen
 * muestra es la misma mentira, escrita donde nadie la revisa.
 */
export function FotoServicio({
  slot,
  className = '',
}: {
  slot: SlotServicio
  className?: string
}) {
  const foto = fotoDe(slot)

  // 1. Foto real.
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

  // 2. Ilustración. Cuadrada de origen (viewBox 120×120): se declara con el
  //    mismo alto y ancho para que el navegador no la deforme.
  if (foto.ilustracion) {
    return (
      <Image
        src={foto.ilustracion}
        alt={foto.alt}
        width={120}
        height={120}
        className={className}
      />
    )
  }

  // 3. Cartel de lo que falta. Se parte en líneas cortas para que quepa.
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
    </svg>
  )
}
