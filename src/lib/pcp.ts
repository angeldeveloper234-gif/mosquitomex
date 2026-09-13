/**
 * PCP INTERNACIONAL — la red a la que pertenece MosquitoMEX.
 *
 * ORIGEN DE ESTOS DATOS
 * Todo lo que hay en este archivo sale del catálogo institucional de PCP
 * Internacional ("CATALAGO_PCP_CORREGIDO", 8 páginas), entregado por el
 * cliente. NADA está inferido ni redondeado. Si un dato no está en el
 * catálogo, no está acá: va como <PorConfirmar> en la página.
 *
 * POR QUÉ IMPORTA QUE ESTO EXISTA
 * 1. `pcp` es la consulta que más aparece en todo el ecosistema del cliente
 *    (345 apariciones en tres meses, cero clics). El perfil de Google se llama
 *    "FUMIGACIONES PCP INTERNACIONAL" y hasta ahora la palabra PCP no aparecía
 *    en ningún sitio de la red: Google los mostraba y nadie entraba porque el
 *    resultado no decía lo que la persona había buscado.
 * 2. Un perfil de Google que se llama de una forma y apunta a un sitio que
 *    nunca la menciona es un desajuste real entre nombre y sitio web.
 * 3. MosquitoMEX y Big Cat comparten dueño, teléfono y correo, y compiten por
 *    las mismas ciudades sin ninguna relación declarada. Visto desde afuera
 *    eso tiene la forma de una red de sitios duplicados. Declarar la relación
 *    es lo que convierte "dos sitios sospechosamente parecidos" en "dos
 *    empresas de una misma red".
 */

export const PCP = {
  nombre: 'PCP Internacional',
  nombreCompleto: 'PCP Internacional Control de Plagas y Fumigaciones',
  descriptor: 'Profesionales en Control de Plagas',
  sitio: 'https://www.pcpinternacional.com',
  /** Año de fundación declarado en el catálogo. */
  fundacion: 2009,
  telefono: '(81) 8989 6390',
  email: 'gerenciaop@pcpinternacional.com',
  domicilio:
    'Río Mississippi 44-I, Colonia del Valle, C.P. 66220, San Pedro Garza García, Nuevo León, México.',
} as const

/** Fundador y presidente de la red. Trayectoria según el catálogo. */
export const FUNDADOR = {
  nombre: 'Jorge Luis Guevara IV',
  cargo: 'Presidente y CEO',
  /** El catálogo dice "más de 25 años en la Industria". */
  aniosEnLaIndustria: 25,
  trayectoria: [
    'Comenzó su carrera en 1991 en SC Johnson, división de mercados institucionales, impartiendo capacitaciones de inocuidad en la industria alimenticia.',
    'Después, como empresario independiente en Truly Nolen Internacional, fue master franquiciado para Venezuela y México.',
    'En 2009 funda PCP Internacional Control de Plagas y Fumigaciones, con un programa de mejora continua y un modelo de franquicia independiente para todo México.',
  ],
} as const

/**
 * Lo que PCP aporta a las empresas asociadas.
 *
 * La frase clave del catálogo, y la que explica por qué MosquitoMEX y Big Cat
 * son marcas distintas de una misma red, es que el modelo le ofrece a otras
 * empresas "un modelo de desarrollo integral con su propia marca, bajo el
 * amparo de un sello que los distingue como una empresa certificada con
 * servicios de calidad internacional".
 */
export const RESPALDO_RED = [
  {
    titulo: 'Capacitación de los técnicos',
    detalle:
      'Los técnicos de la red reciben formación a través de los programas de capacitación profesional de AIB, Global Estándar y otras instituciones, bajo un programa de supervisión y capacitación avalado en los Estados Unidos.',
  },
  {
    titulo: 'Manejo Integrado de Plagas',
    detalle:
      'Los programas de servicio se diseñan con los principios de HACCP y en apego a los estándares exigidos por la FSMA y la FDA, no como visitas aisladas de aplicación de producto.',
  },
  {
    titulo: 'Bajo impacto ambiental',
    detalle:
      'La red trabaja con un programa de bajo impacto ambiental basado en el no uso de plaguicidas contaminantes, y con productos y tecnologías de laboratorios reconocidos en innovación.',
  },
  {
    titulo: 'Registro de cada visita',
    detalle:
      'La gestión de inspecciones y servicios se administra en MobiWork360, la plataforma de la red: cada cliente tiene acceso a sus órdenes de servicio, certificados e informes de inspección, con imágenes y gráficas por ubicación.',
  },
] as const

/**
 * Las marcas de la red que tienen sitio propio.
 * Se enlazan entre sí de forma explícita y declarada: es lo contrario de una
 * red de sitios que finge no conocerse.
 */
export const MARCAS_HERMANAS = [
  {
    nombre: 'Big Cat Control de Plagas',
    url: 'https://bigcat.mx',
    descripcion:
      'Empresa hermana dentro de la red PCP, con cobertura en Nuevo León, Coahuila, Querétaro, Tamaulipas y otros estados del país.',
  },
] as const

/**
 * Industrias que la red atiende, según el catálogo. Se usan tal cual: no se
 * agregan ni se quitan rubros para que la lista "quede mejor".
 */
export const INDUSTRIAS = [
  'Fabricantes de alimentos',
  'Silos de granos almacenados',
  'Fábricas de empaques',
  'Materia prima',
  'Almacenamiento',
  'Empacadores',
  'Transporte',
  'Envases',
  'Supermercados',
  'Tiendas de conveniencia',
  'Hoteles y recreación',
  'Tiendas por departamentos',
  'Oficinas',
  'Clínicas y hospitales',
  'Escuelas y universidades',
] as const
