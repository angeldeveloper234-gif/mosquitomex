/**
 * Valle de Texas / Rio Grande Valley — segundo mercado de la marca.
 *
 * ══════════════════════════════════════════════════════════════════════════
 *  EL INTERRUPTOR DE ESTADO — LEER ANTES DE TOCAR
 * ══════════════════════════════════════════════════════════════════════════
 *
 * `ESTADO` tiene dos valores y CAMBIA LO QUE EL SITIO AFIRMA. No es un detalle
 * de diseño: es la diferencia entre decir la verdad y no decirla.
 *
 *   'proximamente'  (A)  No se opera todavía. La página anuncia la expansión,
 *                        no ofrece servicio, y no hay ningún botón de
 *                        contratar. ES EL VALOR POR DEFECTO, a propósito: si
 *                        alguien duda, la opción segura es no prometer.
 *
 *   'presente'      (B)  Ya se da servicio. Recién entonces la página puede
 *                        ofrecer contratación.
 *
 * ── ANTES DE PONER 'presente', TRES COSAS TIENEN QUE SER CIERTAS ────────
 *
 *   1. Hay técnicos que puedan ir al Valle.
 *   2. Existe la licencia de aplicador de plaguicidas del Texas Department of
 *      Agriculture. En Texas aplicar plaguicidas comercialmente sin licencia
 *      es ilegal, y anunciar el servicio antes de tenerla expone al negocio.
 *   3. Hay un teléfono o forma de contacto real para esa zona.
 *
 * Si las tres no se cumplen, queda en 'proximamente'. Publicar servicio que no
 * existe no solo es mentir: genera llamadas que hay que rechazar, y eso cuesta
 * más caro que no haberlas recibido.
 *
 * ── LO QUE NO HAY ACÁ, Y NO SE INVENTA ──────────────────────────────────
 *
 * Ni teléfono del Valle, ni dirección, ni reseñas, ni cantidad de clientes.
 * Nada de eso está confirmado. El teléfono que se muestra es el de México, y
 * se dice que es el de México.
 *
 * Sobre el vínculo con MCS Austin: existe, pero no sabemos qué es exactamente
 * (¿socio? ¿proveedor? ¿franquicia?). Hasta que el cliente lo aclare NO se
 * menciona en la página: nombrar a un tercero y equivocarse en la relación es
 * peor que no nombrarlo. Cuando lo confirme, entra acá abajo.
 */

export type EstadoMercado = 'proximamente' | 'presente'

/**
 * ⚠️ CAMBIAR SOLO CUANDO EL CLIENTE CONFIRME. Ver las tres condiciones arriba.
 */
export const ESTADO: EstadoMercado = 'proximamente'

/** Año previsto de apertura. Es una previsión, no un compromiso. */
export const ANIO_APERTURA = 2027

/**
 * Los cuatro condados del Rio Grande Valley y sus ciudades principales.
 * Es geografía verificable, no una lista inventada de "zonas de cobertura".
 */
export const CONDADOS = [
  { nombre: 'Hidalgo County', ciudades: ['McAllen', 'Edinburg', 'Mission', 'Pharr', 'Weslaco'] },
  { nombre: 'Cameron County', ciudades: ['Brownsville', 'Harlingen', 'San Benito'] },
  { nombre: 'Starr County', ciudades: ['Rio Grande City'] },
  { nombre: 'Willacy County', ciudades: ['Raymondville'] },
] as const

/** Textos que dependen del estado. Una sola fuente para no contradecirse. */
export const ESTADO_COPY = {
  presente: {
    es: {
      etiqueta: 'Presentes en el Valle de Texas',
      titulo: 'Control de plagas en el Valle de Texas',
      resumen:
        'Damos servicio de control de plagas en el Rio Grande Valley. Somos una franquicia internacional: la misma operación que atiende México, ahora también de este lado del río.',
      aviso:
        'Atendemos en español y en inglés. El servicio se coordina por teléfono o WhatsApp.',
      cta: 'Solicitar cotización',
    },
    en: {
      etiqueta: 'Now serving the Rio Grande Valley',
      titulo: 'Pest control in the Rio Grande Valley',
      resumen:
        'We provide pest control across the Rio Grande Valley. We are an international franchise: the same operation that serves Mexico, now on this side of the river too.',
      aviso: 'We work in English and Spanish. Service is arranged by phone or WhatsApp.',
      cta: 'Request a quote',
    },
  },
  proximamente: {
    es: {
      etiqueta: `Próximamente en el Valle de Texas · ${ANIO_APERTURA}`,
      titulo: 'Control de plagas en el Valle de Texas',
      resumen:
        `Somos una franquicia internacional de control de plagas. Hoy operamos en México y el Valle de Texas es nuestra próxima apertura, prevista para ${ANIO_APERTURA}.`,
      aviso:
        'Todavía no damos servicio en el Valle de Texas. Preferimos decírselo antes de que pierda tiempo: si necesita atención hoy, aún no somos su opción.',
      cta: 'Avisarme cuando abramos',
    },
    en: {
      etiqueta: `Coming to the Rio Grande Valley · ${ANIO_APERTURA}`,
      titulo: 'Pest control in the Rio Grande Valley',
      resumen:
        `We are an international pest control franchise. We operate in Mexico today, and the Rio Grande Valley is our next opening, planned for ${ANIO_APERTURA}.`,
      aviso:
        'We are not servicing the Rio Grande Valley yet. We would rather tell you up front: if you need help today, we are not your option yet.',
      cta: 'Notify me when we open',
    },
  },
} as const

export const copy = (idioma: 'es' | 'en') => ESTADO_COPY[ESTADO][idioma]
