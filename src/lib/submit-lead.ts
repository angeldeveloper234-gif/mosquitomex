import { SITE } from './site'

type SubmitResult = { ok: boolean; fallback?: boolean }

/**
 * Envía un lead de formulario al correo del negocio (contacto@bigcat.com.mx)
 * a través de Web3Forms — sin backend propio.
 *
 * Si aún no se ha configurado la access key (SITE.formAccessKey vacío),
 * hace fallback a un correo `mailto` para no perder el lead.
 */
export async function submitLead(
  fields: Record<string, string>,
  opts: { subject: string; replyTo?: string }
): Promise<SubmitResult> {
  // Fallback: sin key configurada → abrir cliente de correo
  if (!SITE.formAccessKey) {
    const body = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    if (typeof window !== 'undefined') {
      window.location.href =
        `mailto:${SITE.email}?subject=${encodeURIComponent(opts.subject)}&body=${encodeURIComponent(body)}`
    }
    return { ok: true, fallback: true }
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: SITE.formAccessKey,
      subject: opts.subject,
      from_name: 'MosquitoMEX Web',
      ...(opts.replyTo ? { replyto: opts.replyTo } : {}),
      ...fields,
    }),
  })

  const data = await res.json().catch(() => ({ success: false }))
  return { ok: res.ok && !!data.success }
}
