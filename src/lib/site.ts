/**
 * Configuración central del sitio (SEO / branding).
 * ⚠️ El cliente debe confirmar/actualizar estos valores reales antes del deploy final:
 *   - url (dominio definitivo)
 *   - phone / whatsapp
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
  phone: '+52 81 1115 0958',
  phoneHref: 'tel:+528111150958',
  whatsappHref: 'https://wa.me/528111150958',
  // Correo general de la empresa (footer, JSON-LD, formulario de cotización)
  email: 'contacto@mosquitomex.com',
  // Correo dedicado a solicitudes de franquicia
  franchiseEmail: 'contacto@bigcat.com.mx',
  areaServed: 'México',
  // Web3Forms: cada key entrega al correo con el que se registró.
  //  - NEXT_PUBLIC_WEB3FORMS_KEY           → contacto@mosquitomex.com (cotización)
  //  - NEXT_PUBLIC_WEB3FORMS_KEY_FRANCHISE → contacto@bigcat.com.mx   (franquicias)
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
