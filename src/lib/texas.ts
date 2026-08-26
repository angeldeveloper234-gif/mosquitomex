/**
 * Interruptor de la operación en Texas.
 *
 * ⚠️ MANTENER EN `false` HASTA QUE LA OPERACIÓN EXISTA DE VERDAD.
 *
 * Existe como una sola constante, y no como una condición repetida en cada
 * archivo, para que encender Texas sea un cambio consciente en un solo lugar y
 * no algo que pase por accidente al editar una página suelta.
 *
 * Mientras esté en `false`:
 *   · /texas se sirve con `noindex` y en modo "próximamente".
 *   · /texas no entra al sitemap.
 *   · Texas no se enlaza desde el menú ni desde el pie.
 *   · No hay formulario, ni teléfono de servicio, ni botón de cotización.
 *
 * Ponerlo en `true` antes de tener técnicos, licencia estatal de aplicador de
 * plaguicidas y teléfono local significa recibir consultas que hay que
 * rechazar. Sale más caro que esperar.
 */
export const TEXAS_ACTIVO = false

/** Año previsto de apertura. Es una previsión, no un compromiso. */
export const TEXAS_ANIO = 2027
