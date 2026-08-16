/**
 * Configuración central del sitio (SEO / branding).
 * ⚠️ El cliente debe confirmar/actualizar estos valores reales antes del deploy final:
 *   - url (dominio definitivo)
 *   - address / geo
 *   - redes sociales (sameAs)
 */

export const SITE = {
  name: 'MosquitoMEX',
  legalName: 'MosquitoMEX Control de Plagas',
  // Dominio oficial (override opcional con env SITE_URL en el hosting):
  url: (process.env.SITE_URL || 'https://mosquitomex.com').replace(/\/$/, ''),
  locale: 'es_MX',
  lang: 'es',
  description:
    'Servicio profesional de control de plagas y fumigación en México. Expertos en control de mosquitos para hogares y empresas. Cotización sin costo.',
  slogan: 'Nosotros llegamos, y las plagas se van',
  logo: '/mosquitos-mx.png',
  ogImage: '/og-default.jpg',
  phone: '+52 81 1475 3426',
  // Formato E.164 — usar en el "telephone" de JSON-LD, no el visible con espacios.
  phoneE164: '+528114753426',
  phoneHref: 'tel:+528114753426',
  whatsappHref: 'https://wa.me/528114753426',
  // Correo único del negocio: cotizaciones y franquicias entran al mismo buzón.
  email: 'bigcatmexico@gmail.com',
  // Correo dedicado a solicitudes de franquicia
  franchiseEmail: 'bigcatmexico@gmail.com',
  areaServed: 'México',
  // Web3Forms: cada key entrega al correo con el que se registró.
  // AMBAS deben estar registradas con bigcatmexico@gmail.com. Basta con generar
  // una sola key y usarla en las dos variables mientras el buzón sea el mismo.
  //  - NEXT_PUBLIC_WEB3FORMS_KEY           → cotizaciones  (bigcatmexico@gmail.com)
  //  - NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE → franquicias   (bigcatmexico@gmail.com)
  // Las access keys son públicas/seguras en el cliente. Obténlas gratis en https://web3forms.com
  formAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '',
  franchiseAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE || '',
  // Redes sociales oficiales (rellenar con URLs reales):
  socials: [] as string[],
  keywords: [
    'control de plagas',
    'fumigación',
    'control de mosquitos',
    'fumigación México',
    'control de plagas México',
    'exterminio de plagas',
    'fumigadora',
    'control de cucarachas',
    'control de roedores',
    'nebulización',
    'manejo integrado de plagas',
  ],
} as const

export const absoluteUrl = (path = '') =>
  `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
