/**
 * Catálogo de servicios — fuente única para las páginas /servicios/[slug],
 * el sitemap, el menú y los datos estructurados.
 *
 * Nota de contenido: las descripciones son informativas y verificables. No se
 * afirman precios, garantías ni certificaciones concretas porque el cliente
 * aún no los ha confirmado. Al confirmarlos, añadirlos aquí (un solo lugar).
 */

export type FaqItem = { question: string; answer: string }

export type ProcessStep = { title: string; desc: string }

export type Service = {
  slug: string
  /** Nombre corto para menús y enlaces internos */
  name: string
  /** H1 de la página */
  h1: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  emoji: string
  /** Párrafo de apertura, debajo del H1 */
  intro: string
  /** Señales de infestación — contenido útil que además captura búsquedas informativas */
  signsTitle: string
  signs: string[]
  /** Por qué importa: riesgos reales */
  risksTitle: string
  risks: string
  process: ProcessStep[]
  faq: FaqItem[]
  /** Slugs de servicios relacionados (enlazado interno) */
  related: string[]
}

/** Proceso estándar de Manejo Integrado de Plagas, común a todos los servicios. */
const MIP_PROCESS: ProcessStep[] = [
  {
    title: 'Inspección',
    desc: 'Revisamos el inmueble para identificar la plaga, su nivel de actividad, los puntos de entrada y las condiciones que la están favoreciendo.',
  },
  {
    title: 'Diagnóstico y plan',
    desc: 'Te explicamos qué encontramos y proponemos un plan a la medida del lugar, con los productos y la frecuencia adecuados. La cotización es sin costo.',
  },
  {
    title: 'Tratamiento',
    desc: 'Aplicamos el tratamiento en los focos detectados con equipo profesional, siguiendo las indicaciones de seguridad para las personas y las mascotas del lugar.',
  },
  {
    title: 'Seguimiento',
    desc: 'Verificamos el resultado y recomendamos las medidas de prevención necesarias para evitar que la plaga regrese.',
  },
]

export const SERVICES: Service[] = [
  {
    slug: 'control-de-mosquitos',
    name: 'Control de Mosquitos',
    h1: 'Control de Mosquitos y Fumigación Profesional',
    metaTitle: 'Control de Mosquitos en México | Fumigación Profesional',
    metaDescription:
      'Elimina los mosquitos de tu jardín, terraza o negocio. Tratamiento profesional contra el mosquito transmisor del dengue. Cobertura en todo México y cotización sin costo.',
    keywords: [
      'control de mosquitos',
      'fumigación de mosquitos',
      'eliminar mosquitos',
      'nebulización mosquitos',
      'control de mosquitos México',
      'fumigación contra dengue',
    ],
    emoji: '🦟',
    intro:
      'El mosquito no solo arruina las tardes al aire libre: en México es el principal transmisor de enfermedades como el dengue, el zika y el chikungunya. Nuestro tratamiento ataca al mosquito adulto y, sobre todo, elimina los criaderos donde se reproduce, que es lo que realmente corta el ciclo.',
    signsTitle: '¿Tienes un problema de mosquitos?',
    signs: [
      'Piquetes constantes al atardecer y al amanecer, las horas de mayor actividad',
      'Agua estancada en macetas, cubetas, tinacos, canaletas o llantas',
      'Zonas de sombra con humedad y vegetación densa donde se refugian de día',
      'Mayor presencia después de la temporada de lluvias',
    ],
    risksTitle: 'Por qué conviene atenderlo a tiempo',
    risks:
      'El mosquito Aedes aegypti transmite dengue, zika y chikungunya, y se reproduce en cantidades mínimas de agua limpia: basta con el agua acumulada en una tapa de botella. Como su ciclo de huevo a adulto puede completarse en poco más de una semana, una población pequeña se multiplica muy rápido si no se interrumpe.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Cuánto tarda en hacer efecto la fumigación contra mosquitos?',
        answer:
          'El efecto sobre los mosquitos adultos presentes es prácticamente inmediato tras la aplicación. La reducción sostenida se nota en los días siguientes, conforme se agota el ciclo de los que estaban por nacer y se eliminan los criaderos.',
      },
      {
        question: '¿Es seguro para niños y mascotas?',
        answer:
          'Sí, siempre que se respeten las indicaciones de seguridad. El técnico te dirá cuánto tiempo debes mantener a niños y mascotas fuera de las áreas tratadas y cuándo se puede volver a usar el espacio con normalidad.',
      },
      {
        question: '¿Cada cuánto hay que repetir el tratamiento?',
        answer:
          'Depende del entorno y de la temporada. En zonas cálidas y durante la época de lluvias la presión de mosquitos es mucho mayor y suele requerirse un programa periódico; en otros casos, un tratamiento puntual con medidas de prevención es suficiente.',
      },
      {
        question: '¿Sirve si mi vecino tiene agua estancada?',
        answer:
          'El tratamiento protege tu propiedad, pero los mosquitos vuelan entre predios. Si hay un criadero cercano fuera de tu terreno, lo detectamos en la inspección y te indicamos cómo abordarlo para que el resultado dure.',
      },
      {
        question: '¿Cuánto cuesta el servicio?',
        answer:
          'El precio depende del tamaño del inmueble, del tipo de espacio y del nivel de infestación. Por eso hacemos una inspección y te entregamos una cotización sin costo antes de cualquier trabajo.',
      },
    ],
    related: ['fumigacion-comercial', 'control-de-cucarachas'],
  },

  {
    slug: 'control-de-cucarachas',
    name: 'Control de Cucarachas',
    h1: 'Fumigación y Control de Cucarachas',
    metaTitle: 'Fumigación de Cucarachas | Eliminación Profesional',
    metaDescription:
      'Elimina las cucarachas de tu casa, restaurante o negocio de raíz. Tratamiento profesional en nidos y puntos de refugio. Cobertura nacional y cotización sin costo.',
    keywords: [
      'fumigación de cucarachas',
      'control de cucarachas',
      'eliminar cucarachas',
      'plaga de cucarachas',
      'fumigar cucarachas casa',
      'exterminar cucarachas',
    ],
    emoji: '🪳',
    intro:
      'La cucaracha es una de las plagas más difíciles de eliminar por cuenta propia: se esconde en grietas, se reproduce rápido y desarrolla resistencia a los insecticidas de venta libre. Un tratamiento profesional actúa sobre los refugios y el nido, no solo sobre los ejemplares que se ven.',
    signsTitle: 'Señales de una infestación de cucarachas',
    signs: [
      'Ver cucarachas de día: suele indicar que la población ya es alta',
      'Excremento parecido a granos de pimienta o café molido en cajones y alacenas',
      'Olor característico, aceitoso y desagradable, en cocinas o zonas cerradas',
      'Cápsulas de huevos (ootecas) de color café en rincones y detrás de muebles',
      'Manchas oscuras en juntas de azulejos, bisagras y detrás de electrodomésticos',
    ],
    risksTitle: 'Por qué es un problema de salud',
    risks:
      'Las cucarachas se desplazan entre drenajes, basura y superficies donde se prepara comida, y pueden transportar bacterias como salmonela. Además, sus restos y excrementos son un desencadenante conocido de asma y alergias, sobre todo en niños. Para un negocio de alimentos, su presencia es también un riesgo sanitario y reputacional.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Por qué siguen apareciendo cucarachas si ya fumigué?',
        answer:
          'Los insecticidas de supermercado suelen matar solo lo que se ve y dispersan al resto hacia otros refugios. Si no se trata el nido y los puntos de entrada, la población se recupera. Además, algunas especies han desarrollado resistencia a ciertos ingredientes activos.',
      },
      {
        question: '¿Tengo que salir de mi casa durante el tratamiento?',
        answer:
          'Depende del tipo de aplicación. Muchos tratamientos actuales son focalizados y permiten volver a ocupar el espacio en pocas horas. El técnico te indicará el tiempo de reingreso exacto según lo que se aplique en tu caso.',
      },
      {
        question: '¿Debo vaciar la cocina y los muebles?',
        answer:
          'Te daremos una lista breve de preparación antes de la visita. Normalmente implica despejar el acceso a zócalos y esquinas, y proteger o guardar alimentos y utensilios que estén a la vista.',
      },
      {
        question: '¿En cuánto tiempo desaparecen?',
        answer:
          'Se suele notar una caída importante en los primeros días. En infestaciones establecidas se requiere más de una visita, porque hay que alcanzar a los ejemplares que van naciendo de las ootecas ya puestas.',
      },
      {
        question: '¿Atienden restaurantes y negocios de alimentos?',
        answer:
          'Sí. Para giros de alimentos manejamos programas de control periódico con documentación del servicio, que es lo que suelen exigir las revisiones sanitarias.',
      },
    ],
    related: ['control-de-roedores', 'fumigacion-comercial'],
  },

  {
    slug: 'control-de-roedores',
    name: 'Control de Roedores',
    h1: 'Control de Ratas y Ratones',
    metaTitle: 'Control de Roedores | Eliminación de Ratas y Ratones',
    metaDescription:
      'Elimina ratas y ratones de tu casa, bodega o negocio. Control profesional con estaciones seguras y sellado de accesos. Cobertura nacional y cotización sin costo.',
    keywords: [
      'control de roedores',
      'eliminar ratas',
      'control de ratones',
      'plaga de ratas',
      'exterminio de roedores',
      'fumigación de roedores',
    ],
    emoji: '🐀',
    intro:
      'Los roedores causan daños que van mucho más allá de la molestia: roen cableado, contaminan alimentos y se reproducen a gran velocidad. El control efectivo combina la eliminación de la población activa con el cierre de los accesos por donde entran.',
    signsTitle: 'Cómo saber si tienes roedores',
    signs: [
      'Excremento pequeño y oscuro en alacenas, cajones, bodegas o cerca de la basura',
      'Ruidos de carreras o rasguños en techos, muros y entretechos por la noche',
      'Marcas de roedura en empaques, muebles, tuberías o cables',
      'Rastros de grasa a lo largo de muros y zócalos por donde transitan',
      'Nidos de papel, tela o cartón triturado en espacios poco usados',
    ],
    risksTitle: 'Riesgos reales de una plaga de roedores',
    risks:
      'Los roedores pueden transmitir enfermedades como leptospirosis, salmonelosis y hantavirus a través de su orina, excremento y pelo. Al roer cableado eléctrico son además una causa documentada de cortos circuitos e incendios. Sus dientes crecen de forma continua, así que roen de manera permanente.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Usan veneno? ¿Es seguro con mascotas en casa?',
        answer:
          'Cuando se requiere cebo, se coloca en estaciones cerradas y ancladas, diseñadas para que el producto quede fuera del alcance de mascotas y niños. En interiores habitados suelen priorizarse métodos mecánicos. Siempre te explicamos qué se va a usar y dónde.',
      },
      {
        question: '¿Qué pasa si un roedor muere dentro de una pared?',
        answer:
          'Es una preocupación válida. Por eso el plan prioriza la captura y el control en puntos accesibles, y el sellado de entradas para reducir el tránsito hacia el interior de muros y entretechos.',
      },
      {
        question: '¿Sellan por dónde entran?',
        answer:
          'Identificamos los puntos de acceso durante la inspección y te indicamos cuáles hay que corregir. Sin cerrar las entradas, cualquier control es temporal: llegarán nuevos roedores desde el exterior.',
      },
      {
        question: '¿Cuánto tarda en resolverse?',
        answer:
          'Un control de roedores requiere seguimiento por definición: hay que monitorear el consumo y la actividad en las estaciones durante varias visitas hasta que la actividad se detiene.',
      },
      {
        question: '¿Atienden bodegas y naves industriales?',
        answer:
          'Sí. En esos espacios trabajamos con programas de monitoreo periódico y registro del servicio, que es lo que piden las auditorías.',
      },
    ],
    related: ['control-de-cucarachas', 'fumigacion-comercial'],
  },

  {
    slug: 'control-de-termitas',
    name: 'Control de Termitas',
    h1: 'Control y Fumigación de Termitas',
    metaTitle: 'Control de Termitas | Fumigación contra Comején',
    metaDescription:
      'Protege tu construcción de las termitas y el comején. Detección de daño estructural y tratamiento profesional de la colonia. Cobertura nacional y cotización sin costo.',
    keywords: [
      'control de termitas',
      'fumigación de termitas',
      'comején',
      'eliminar termitas',
      'plaga de termitas',
      'tratamiento contra comején',
    ],
    emoji: '🐜',
    intro:
      'Las termitas trabajan en silencio y desde dentro de la madera, así que el daño casi siempre se descubre cuando ya es considerable. Atacan vigas, marcos, pisos y muebles, y el tratamiento debe alcanzar a la colonia completa, no solo a los ejemplares visibles.',
    signsTitle: 'Señales de termitas o comején',
    signs: [
      'Madera que suena hueca al golpearla o que se hunde con una ligera presión',
      'Túneles de tierra sobre muros, cimientos o columnas',
      'Alas desprendidas cerca de ventanas y puertas tras un vuelo de enjambre',
      'Polvo fino similar a aserrín bajo muebles o marcos de madera',
      'Pintura abombada o superficies onduladas sin causa aparente de humedad',
    ],
    risksTitle: 'Por qué el daño es tan costoso',
    risks:
      'Una colonia de termitas subterráneas consume celulosa de forma continua y puede permanecer activa durante años sin ser detectada. Al afectar elementos estructurales de madera, la reparación suele ser mucho más cara que el tratamiento preventivo. Además, el daño por termitas normalmente no está cubierto por los seguros de hogar.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Cómo diferencio termitas de hormigas voladoras?',
        answer:
          'La termita tiene el cuerpo de ancho uniforme, antenas rectas y sus cuatro alas son del mismo tamaño. La hormiga tiene la cintura marcada, antenas acodadas y las alas delanteras más largas que las traseras. En la inspección lo confirmamos con certeza.',
      },
      {
        question: '¿Hay que desocupar la construcción?',
        answer:
          'Depende del método que requiera el caso. Muchos tratamientos actuales son localizados o perimetrales y no obligan a desalojar. Te lo indicamos con claridad tras la inspección, antes de programar el trabajo.',
      },
      {
        question: '¿Se pueden prevenir?',
        answer:
          'Sí, en buena medida: controlando filtraciones y humedad, evitando el contacto directo de madera con el suelo y retirando restos de madera o cartón acumulados junto a la construcción.',
      },
      {
        question: '¿El tratamiento elimina toda la colonia?',
        answer:
          'Ese es el objetivo. Por eso no basta con aplicar producto sobre la madera visible: el plan se diseña para que el efecto alcance al nido, que suele estar fuera de la vista.',
      },
    ],
    related: ['control-de-roedores', 'fumigacion-comercial'],
  },

  {
    slug: 'control-de-chinches',
    name: 'Control de Chinches',
    h1: 'Control y Eliminación de Chinches de Cama',
    metaTitle: 'Eliminar Chinches de Cama | Control Profesional',
    metaDescription:
      'Elimina las chinches de cama de tu hogar u hotel con tratamiento profesional en todos los focos de refugio. Cobertura nacional y cotización sin costo.',
    keywords: [
      'chinches de cama',
      'eliminar chinches',
      'control de chinches',
      'fumigación de chinches',
      'plaga de chinches',
      'como eliminar chinches',
    ],
    emoji: '🛏️',
    intro:
      'Las chinches de cama son de las plagas más difíciles de erradicar: se esconden en costuras, bases de cama y grietas a milímetros de donde duermes, resisten largos periodos sin alimentarse y se trasladan con facilidad en maletas y ropa. Requieren un tratamiento minucioso y con seguimiento.',
    signsTitle: 'Cómo identificar chinches de cama',
    signs: [
      'Piquetes en línea o agrupados, generalmente en brazos, piernas, cuello y espalda',
      'Puntos de sangre o manchas oscuras en sábanas y colchón',
      'Pequeñas manchas negras (excremento) en costuras del colchón y base de la cama',
      'Pieles mudadas translúcidas cerca de las costuras y hendiduras',
      'Insectos planos, de color café rojizo y tamaño similar a una semilla de manzana',
    ],
    risksTitle: 'Por qué requieren tratamiento profesional',
    risks:
      'Las chinches no se limitan al colchón: se refugian en el somier, la cabecera, los zócalos, los enchufes y los muebles cercanos. Por eso los tratamientos parciales fracasan casi siempre. Aunque no se les atribuye la transmisión de enfermedades, sus picaduras provocan reacciones alérgicas, insomnio y un fuerte impacto emocional en quienes las padecen.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Tener chinches significa que la casa está sucia?',
        answer:
          'No. Las chinches se transportan en maletas, ropa, muebles de segunda mano y mochilas, y aparecen igual en viviendas impecables, hoteles de cualquier categoría y edificios nuevos. No tienen relación con la limpieza.',
      },
      {
        question: '¿Tengo que tirar mi colchón?',
        answer:
          'En la mayoría de los casos no. El tratamiento está diseñado para tratar el colchón y su entorno. Tirar muebles sin un tratamiento adecuado, además, puede dispersar la plaga a otras áreas del inmueble.',
      },
      {
        question: '¿Cuántas visitas se necesitan?',
        answer:
          'Casi siempre más de una. Los huevos son muy resistentes, así que se programa una visita de seguimiento para alcanzar a los ejemplares que van naciendo y confirmar que la actividad se detuvo.',
      },
      {
        question: '¿Cómo me preparo para el tratamiento?',
        answer:
          'Te entregamos indicaciones previas: normalmente lavar y secar la ropa de cama a alta temperatura, despejar el perímetro de la cama y evitar mover objetos de la habitación afectada a otras, para no dispersar la plaga.',
      },
      {
        question: '¿Atienden hoteles?',
        answer:
          'Sí, con manejo discreto y programación por habitaciones para afectar lo menos posible la operación.',
      },
    ],
    related: ['control-de-cucarachas', 'fumigacion-comercial'],
  },

  {
    slug: 'fumigacion-comercial',
    name: 'Fumigación Comercial',
    h1: 'Fumigación y Control de Plagas para Empresas',
    metaTitle: 'Fumigación Comercial | Control de Plagas para Empresas',
    metaDescription:
      'Control de plagas para restaurantes, hoteles, industria alimentaria, oficinas y bodegas. Programas periódicos con documentación del servicio. Cotización sin costo.',
    keywords: [
      'fumigación comercial',
      'control de plagas empresas',
      'fumigación restaurantes',
      'control de plagas hoteles',
      'fumigación industrial',
      'manejo integrado de plagas',
    ],
    emoji: '🏢',
    intro:
      'En un negocio, una plaga no es solo un problema operativo: compromete la sanidad, la reputación y el cumplimiento normativo. Trabajamos con programas de Manejo Integrado de Plagas (MIP) enfocados en la prevención y en dejar constancia documental de cada servicio.',
    signsTitle: 'Giros que atendemos',
    signs: [
      'Restaurantes, cafeterías y cocinas industriales',
      'Hoteles y establecimientos de hospedaje',
      'Industria de alimentos y plantas de proceso',
      'Supermercados, tiendas de conveniencia y almacenes',
      'Oficinas, escuelas, centros de salud y espacios comunes',
      'Bodegas, naves industriales y centros de distribución',
    ],
    risksTitle: 'Qué incluye un programa comercial',
    risks:
      'Un programa periódico no se limita a aplicar producto: incluye inspecciones programadas, monitoreo con dispositivos en puntos críticos, identificación de las condiciones que atraen a las plagas, recomendaciones de corrección en la infraestructura y un reporte escrito de cada visita, que es la evidencia que suelen solicitar las revisiones sanitarias y las auditorías.',
    process: MIP_PROCESS,
    faq: [
      {
        question: '¿Pueden trabajar fuera del horario de operación?',
        answer:
          'Sí. En restaurantes, hoteles y comercios lo habitual es programar el servicio fuera del horario de atención para no interferir con la operación ni con los clientes.',
      },
      {
        question: '¿Entregan documentación del servicio?',
        answer:
          'Sí. Cada visita se documenta por escrito, con lo encontrado, lo aplicado y las recomendaciones. Es la constancia que normalmente se requiere en una revisión sanitaria o una auditoría.',
      },
      {
        question: '¿Cada cuánto se hacen las visitas?',
        answer:
          'La frecuencia se define según el giro, el tamaño del inmueble y el riesgo. Un negocio de alimentos suele requerir visitas más frecuentes que una oficina.',
      },
      {
        question: '¿Manejan varias sucursales o ubicaciones?',
        answer:
          'Sí. Podemos coordinar un programa con la misma metodología y reporte para varias ubicaciones, con cobertura en todo el país.',
      },
      {
        question: '¿El servicio interrumpe la operación?',
        answer:
          'El objetivo es que no. El plan se diseña alrededor de tus horarios y de las áreas críticas, priorizando métodos que permitan reanudar la actividad lo antes posible.',
      },
    ],
    related: ['control-de-cucarachas', 'control-de-roedores'],
  },
]

export function getServiceBySlug(slug: string): Service | null {
  return SERVICES.find((s) => s.slug === slug) ?? null
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}
