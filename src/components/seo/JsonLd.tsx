/**
 * Inyecta un bloque JSON-LD (schema.org) en la página.
 * Server component — no requiere 'use client'.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON serializado; seguro porque el contenido es controlado por nosotros.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
