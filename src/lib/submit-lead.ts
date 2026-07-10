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
  opts: {
    subject: string
    replyTo?: string
    /** Web3Forms access key (según el formulario). Default: key de la empresa. */
    accessKey?: string
    /** Correo destino para el fallback mailto. Default: correo de la empresa. */
    toEmail?: string
  }
): Promise<SubmitResult> {
  const accessKey = opts.accessKey ?? SITE.formAccessKey
  const toEmail = opts.toEmail ?? SITE.email

  // Fallback: sin key configurada → abrir cliente de correo
  if (!accessKey) {
    const body = Object.entries(fields)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    if (typeof window !== 'undefined') {
      window.location.href =
        `mailto:${toEmail}?subject=${encodeURIComponent(opts.subject)}&body=${encodeURIComponent(body)}`
    }
    return { ok: true, fallback: true }
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: opts.subject,
      from_name: 'MosquitoMEX Web',
      ...(opts.replyTo ? { replyto: opts.replyTo } : {}),
      ...fields,
    }),
  })

  const data = await res.json().catch(() => ({ success: false }))
  return { ok: res.ok && !!data.success }
}
