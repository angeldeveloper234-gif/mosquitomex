/**
 * Fotos de las tarjetas de /servicios.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  ESTADO ACTUAL: NO HAY NINGUNA FOTO REAL. LAS SEIS SON PLACEHOLDER.
 * ══════════════════════════════════════════════════════════════════════════
 *
 * Se buscaron fotos de la operación en public/ y en todo el Drive del estudio.
 * No existe ninguna de Mosquito Mex. Lo único parecido que hay en el Drive es:
 *
 *   · RECURSOS -/fumcon - viejo/moodboard/  → capturas de plantillas web de
 *     OTRAS empresas de control de plagas, y de OTRO cliente.
 *   · RECURSOS -/fumcon - viejo/image ai/   → imágenes generadas por IA.
 *
 * Ninguna de las dos puede usarse. La primera es material de terceros; la
 * segunda no documenta nada porque no ocurrió. Poner cualquiera de las dos
 * como "nuestra operación" es exactamente lo que el encargo prohíbe.
 *
 * ── LA REGLA ────────────────────────────────────────────────────────────
 *
 *   1. SOLO fotos reales de la operación de Mosquito Mex. Nada de stock, nada
 *      de IA, nada de otro cliente.
 *   2. Ninguna foto puede repetirse en dos tarjetas. Hay un test que lo
 *      comprueba (media-servicios.test.mjs).
 *   3. Mientras falte una foto, se dibuja un cartel que DICE QUÉ FALTA. No un
 *      cuadro de color: un bloque liso es indistinguible de "se rompió el
 *      código", y así se publica sin que nadie lo note.
 *
 * ── CÓMO SE AGREGA UNA FOTO ─────────────────────────────────────────────
 *
 *   a. Dejar el archivo en public/images/servicios/<slot>.jpg y .webp,
 *      1600px de ancho, calidad ~70 (usar scripts/procesar-fotos.mjs).
 *   b. Cambiar `pendiente: true` por los datos reales en la entrada de abajo.
 *   c. Escribir el `alt` describiendo LO QUE SE VE, en español y sin adornar.
 *
 * La lista de qué foto sacar para cada tarjeta está en FOTOS-PENDIENTES.md,
 * escrita para mandarle al cliente por WhatsApp.
 */

export type SlotServicio =
  | 'control-de-mosquitos'
  | 'control-de-cucarachas'
  | 'control-de-roedores'
  | 'control-de-termitas'
  | 'control-de-chinches'
  | 'fumigacion-comercial'

export interface FotoServicio {
  slot: SlotServicio
  /** Ruta del JPG. Vacía mientras esté pendiente. */
  src: string
  /** Copia WebP. Se sirve primero por <picture>. */
  webp: string
  /** En español. Describe lo que se ve, no lo que quisiéramos. */
  alt: string
  /** true mientras no exista la foto real. */
  pendiente: boolean
  /** Qué foto hay que sacar. Se dibuja en el cartel y va al documento. */
  queFalta: string
}

/** Entrada sin foto: el cartel dirá qué falta. */
function faltante(slot: SlotServicio, queFalta: string): FotoServicio {
  return {
    slot,
    src: '',
    webp: '',
    alt: `Falta la foto de ${queFalta}`,
    pendiente: true,
    queFalta,
  }
}

/**
 * El emparejamiento que pidió el encargo, listo para cuando lleguen las fotos:
 * nebulización exterior → mosquitos; técnico en restaurante o bodega →
 * fumigación comercial; estaciones de cebo → roedores. Cada `queFalta`
 * describe exactamente la toma que corresponde a esa tarjeta.
 */
export const FOTOS_SERVICIOS: Record<SlotServicio, FotoServicio> = {
  'control-de-mosquitos': faltante(
    'control-de-mosquitos',
    'nebulización en exterior: técnico con la nebulizadora en un jardín o patio'
  ),
  'control-de-cucarachas': faltante(
    'control-de-cucarachas',
    'aplicación de gel en cocina: la mano del técnico aplicando en una juntura o alacena'
  ),
  'control-de-roedores': faltante(
    'control-de-roedores',
    'estación de cebo instalada y rotulada, contra un muro o en un andén'
  ),
  'control-de-termitas': faltante(
    'control-de-termitas',
    'inyección en madera o suelo: taladro, jeringa o barrera perimetral'
  ),
  'control-de-chinches': faltante(
    'control-de-chinches',
    'tratamiento en colchón o base de cama, con el equipo a la vista'
  ),
  'fumigacion-comercial': faltante(
    'fumigacion-comercial',
    'técnico uniformado trabajando en una cocina de restaurante o en una bodega'
  ),
}

export const fotoDe = (slot: SlotServicio) => FOTOS_SERVICIOS[slot]

/** Cuántas faltan. Se usa en el aviso de desarrollo. */
export const cuantasFaltan = () =>
  Object.values(FOTOS_SERVICIOS).filter((f) => f.pendiente).length
