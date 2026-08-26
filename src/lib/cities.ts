/**
 * Ciudades con página propia de cobertura.
 *
 * ── EL ORDEN ES LA PRIORIDAD, Y SALE DE LOS DATOS ────────────────────────
 *
 * En el último mes, 18 de 25 consultas entraron desde Ciudad de México. Por eso
 * CDMX va primera en el arreglo, primera en el sitemap, primera en `areaServed`
 * y primera en el title del home. El norte no se abandona: Monterrey, Saltillo
 * y Guadalajara tienen la misma estructura de página, solo van después.
 *
 * Si el patrón de consultas cambia, se reordena este arreglo y todo lo demás se
 * reordena solo. No hay una segunda lista que mantener sincronizada.
 *
 * ── LO QUE NO SE DICE ────────────────────────────────────────────────────
 *
 * NUNCA "tenemos sucursal en". El negocio no tiene direcciones confirmadas
 * (ver el aviso en site.ts) y una sucursal inventada es lo primero que un
 * cliente comprueba y lo primero que Google castiga. Se dice "damos servicio",
 * que es lo verdadero.
 *
 * Tampoco hay cifras, ni reseñas, ni tiempos de respuesta prometidos: nada de
 * eso está confirmado.
 *
 * ── POR QUÉ CADA PÁGINA DICE COSAS DISTINTAS ─────────────────────────────
 *
 * Cuatro páginas iguales cambiando el nombre de la ciudad son contenido
 * duplicado: compiten entre sí y ninguna posiciona. Lo que las diferencia acá
 * es real y verificable: el clima y el tipo de construcción de cada ciudad
 * determinan qué plaga aparece y cómo hay que tratarla. Un edificio de
 * departamentos en la Ciudad de México y una casa con jardín en Saltillo no
 * tienen el mismo problema.
 */

export type Ciudad = {
  slug: string
  /** Nombre de la ciudad tal como se escribe. */
  nombre: string
  /**
   * Entidad federativa. La Ciudad de México NO está dentro de un estado: es
   * una entidad federativa por derecho propio desde 2016, así que su "estado"
   * es ella misma. Coahuila se llama oficialmente Coahuila de Zaragoza.
   */
  estado: string
  /** Nombre oficial completo, para el JSON-LD. */
  estadoOficial: string
  es: ContenidoCiudad
  en: ContenidoCiudad
}

type ContenidoCiudad = {
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  /** Por qué esta ciudad tiene los problemas que tiene. */
  contextoTitulo: string
  contexto: string[]
  /** Las plagas que de verdad predominan ahí, y por qué. */
  plagasTitulo: string
  plagas: { nombre: string; porQue: string }[]
  /** Qué hacemos distinto en esta ciudad. */
  servicioTitulo: string
  servicio: string
}

export const CIUDADES: Ciudad[] = [
  // ── 1. Máxima prioridad: de acá entra la mayoría de las consultas ────────
  {
    slug: 'ciudad-de-mexico',
    nombre: 'Ciudad de México',
    estado: 'Ciudad de México',
    estadoOficial: 'Ciudad de México',
    es: {
      metaTitle: 'Control de Plagas en Ciudad de México | Fumigación Profesional',
      metaDescription:
        'Damos servicio de control de plagas y fumigación en la Ciudad de México: departamentos, edificios, oficinas y restaurantes. Cucarachas, roedores y chinches. Cotización sin costo.',
      h1: 'Control de plagas en la Ciudad de México',
      intro:
        'Damos servicio en la Ciudad de México para hogares, edificios y negocios. La capital tiene un problema de plagas distinto al del resto del país, y tratarlo como si fuera igual es la razón más común por la que una fumigación no funciona.',
      contextoTitulo: 'Por qué la Ciudad de México es un caso aparte',
      contexto: [
        'Es una ciudad vertical. En un edificio de departamentos, las tuberías, los ductos y los cubos de instalaciones conectan un piso con otro, y las plagas los usan como pasillos. Fumigar un solo departamento sirve de poco si el edificio comparte instalaciones: la plaga se mueve al departamento vecino y regresa en unas semanas.',
        'La densidad de restaurantes, cocinas y locales de alimentos es altísima, y con ella la presión sanitaria. Un local con una cocina activa necesita un manejo continuo, no una visita aislada.',
        'El clima es templado y de altura, con poca humedad la mayor parte del año. Eso reduce el problema de mosquito respecto de las ciudades de costa, pero favorece a la cucaracha y al roedor, que viven en el interior de los inmuebles y en el drenaje.',
      ],
      plagasTitulo: 'Lo que más atendemos en la Ciudad de México',
      plagas: [
        {
          nombre: 'Cucaracha alemana',
          porQue:
            'Es la que se instala dentro de cocinas y baños, y la que viaja entre departamentos. Es pequeña, se esconde en rendijas y se reproduce rápido. Requiere tratar el conjunto, no un punto.',
        },
        {
          nombre: 'Roedores',
          porQue:
            'Entran desde el drenaje, desde obras vecinas y por huecos de instalaciones. En edificios suben por los ductos. El control empieza por sellar los accesos, no por poner cebo.',
        },
        {
          nombre: 'Chinches de cama',
          porQue:
            'Se transportan en maletas y muebles usados. En zonas de mucha rotación de inquilinos se propagan de un departamento a otro con facilidad.',
        },
      ],
      servicioTitulo: 'Cómo trabajamos acá',
      servicio:
        'Revisamos el inmueble completo antes de aplicar nada, incluidas las áreas comunes y los pasos de instalaciones si se trata de un edificio. En locales de alimentos dejamos el registro del tratamiento por escrito, que es lo que le van a pedir en una verificación sanitaria. Si el problema es de todo el edificio, se lo decimos: tratar solo su departamento sería cobrarle por algo que va a volver.',
    },
    en: {
      metaTitle: 'Pest Control in Mexico City | Professional Fumigation',
      metaDescription:
        'Pest control and fumigation service in Mexico City: apartments, buildings, offices and restaurants. Cockroaches, rodents and bed bugs. Free quote.',
      h1: 'Pest control in Mexico City',
      intro:
        'We serve homes, buildings and businesses across Mexico City. The capital has a pest problem unlike the rest of the country, and treating it as if it were the same is the most common reason a fumigation fails.',
      contextoTitulo: 'Why Mexico City is a different case',
      contexto: [
        'It is a vertical city. In an apartment building, pipes, ducts and utility shafts connect one floor to the next, and pests use them as corridors. Treating a single apartment achieves little when the building shares its installations: the pest moves next door and returns within weeks.',
        'The density of restaurants and food businesses is very high, and so is health-inspection pressure. An active kitchen needs continuous management, not a one-off visit.',
        'The climate is temperate and high-altitude, with low humidity most of the year. That reduces mosquito pressure compared with coastal cities, but favours cockroaches and rodents, which live inside buildings and in the drainage system.',
      ],
      plagasTitulo: 'What we treat most in Mexico City',
      plagas: [
        {
          nombre: 'German cockroach',
          porQue:
            'The one that settles into kitchens and bathrooms, and the one that travels between apartments. Small, hides in cracks, breeds fast. It needs the whole unit treated, not one spot.',
        },
        {
          nombre: 'Rodents',
          porQue:
            'They come in from drains, neighbouring construction and utility gaps. In buildings they climb through shafts. Control starts by sealing entry points, not by putting out bait.',
        },
        {
          nombre: 'Bed bugs',
          porQue:
            'They travel in luggage and second-hand furniture. Where tenant turnover is high they spread easily from one apartment to another.',
        },
      ],
      servicioTitulo: 'How we work here',
      servicio:
        'We inspect the whole property before applying anything, including common areas and utility runs in buildings. In food businesses we leave a written record of the treatment, which is what a health inspection will ask for. If the problem belongs to the whole building, we say so: treating only your apartment would be charging you for something that will come back.',
    },
  },

  // ── 2. Monterrey ─────────────────────────────────────────────────────────
  {
    slug: 'monterrey',
    nombre: 'Monterrey',
    estado: 'Nuevo León',
    estadoOficial: 'Nuevo León',
    es: {
      metaTitle: 'Control de Plagas en Monterrey, Nuevo León | Fumigación',
      metaDescription:
        'Damos servicio de control de plagas y fumigación en Monterrey y su área metropolitana. Alacranes, cucarachas, roedores y mosquitos. Cotización sin costo.',
      h1: 'Control de plagas en Monterrey, Nuevo León',
      intro:
        'Damos servicio en Monterrey y su área metropolitana. El calor de la región marca qué plagas aparecen y en qué momento del año, y eso cambia el tratamiento.',
      contextoTitulo: 'Lo que el clima de Monterrey provoca',
      contexto: [
        'El calor extremo y seco empuja a las plagas hacia el interior de las casas a buscar sombra y agua. Por eso en verano aumentan los reportes dentro de la vivienda aunque el problema venga de afuera.',
        'El alacrán es una preocupación real en Nuevo León, no una rareza. Entra por grietas de muro, por debajo de las puertas y por registros, y busca lugares frescos: clósets, zapatos, ropa de cama.',
        'La temporada de lluvias concentra la reproducción del mosquito en patios, albercas sin uso y cacharros con agua. Es un problema estacional, y conviene tratarlo antes de que empiece, no cuando ya hay piquetes.',
      ],
      plagasTitulo: 'Lo que más atendemos en Monterrey',
      plagas: [
        {
          nombre: 'Alacranes',
          porQue:
            'El riesgo es sanitario, no de molestia. El control combina barrera química en el perímetro con sellado de accesos, porque un alacrán que no puede entrar no hay que buscarlo adentro.',
        },
        {
          nombre: 'Cucaracha americana',
          porQue:
            'La grande, la que sale del drenaje y de los registros con el calor. Se trata por fuera hacia adentro: en los registros y el perímetro, que es de donde viene.',
        },
        {
          nombre: 'Mosquitos',
          porQue:
            'Estacional, ligado a lluvias. Se ataca el criadero, no solo el adulto: sin eliminar el agua estancada, la nebulización dura días.',
        },
      ],
      servicioTitulo: 'Cómo trabajamos acá',
      servicio:
        'Empezamos por el perímetro del inmueble, que en Monterrey es de donde entra casi todo. Revisamos grietas, huecos bajo puertas y registros de drenaje, y le decimos qué hay que sellar aunque no sea trabajo nuestro. En casas con jardín o alberca revisamos los puntos de agua acumulada antes de la temporada de lluvias.',
    },
    en: {
      metaTitle: 'Pest Control in Monterrey, Nuevo León | Fumigation',
      metaDescription:
        'Pest control and fumigation service in Monterrey and its metropolitan area. Scorpions, cockroaches, rodents and mosquitoes. Free quote.',
      h1: 'Pest control in Monterrey, Nuevo León',
      intro:
        'We serve Monterrey and its metropolitan area. The regional heat determines which pests appear and when, and that changes the treatment.',
      contextoTitulo: 'What Monterrey’s climate causes',
      contexto: [
        'Extreme dry heat pushes pests indoors in search of shade and water. That is why indoor reports rise in summer even when the problem originates outside.',
        'Scorpions are a genuine concern in Nuevo León, not a rarity. They enter through wall cracks, under doors and through drains, and seek cool places: closets, shoes, bedding.',
        'The rainy season concentrates mosquito breeding in yards, unused pools and containers holding water. It is seasonal, and worth treating before it starts rather than once the bites appear.',
      ],
      plagasTitulo: 'What we treat most in Monterrey',
      plagas: [
        {
          nombre: 'Scorpions',
          porQue:
            'The risk is medical, not nuisance. Control combines a chemical perimeter barrier with sealing entry points — a scorpion that cannot get in does not have to be hunted indoors.',
        },
        {
          nombre: 'American cockroach',
          porQue:
            'The large one that emerges from drains and manholes in the heat. Treated from the outside in: at the drains and perimeter, where it comes from.',
        },
        {
          nombre: 'Mosquitoes',
          porQue:
            'Seasonal, tied to rainfall. We target breeding sites, not just adults: without removing standing water, fogging lasts days.',
        },
      ],
      servicioTitulo: 'How we work here',
      servicio:
        'We start at the building perimeter, which in Monterrey is where almost everything gets in. We check cracks, door gaps and drain covers, and tell you what needs sealing even when it is not our job. In houses with gardens or pools we check standing-water points before the rainy season.',
    },
  },

  // ── 3. Saltillo ──────────────────────────────────────────────────────────
  {
    slug: 'saltillo',
    nombre: 'Saltillo',
    estado: 'Coahuila',
    estadoOficial: 'Coahuila de Zaragoza',
    es: {
      metaTitle: 'Control de Plagas en Saltillo, Coahuila | Fumigación',
      metaDescription:
        'Damos servicio de control de plagas y fumigación en Saltillo, Coahuila. Alacranes, roedores y cucarachas en casa, oficina e industria. Cotización sin costo.',
      h1: 'Control de plagas en Saltillo, Coahuila',
      intro:
        'Damos servicio en Saltillo. El clima semidesértico y de altura de la ciudad, con inviernos fríos y veranos secos, provoca un patrón de plagas marcadamente estacional.',
      contextoTitulo: 'Lo que el clima de Saltillo provoca',
      contexto: [
        'La oscilación de temperatura entre el día y la noche, y entre verano e invierno, es fuerte. Cuando baja el termómetro las plagas buscan el interior de los inmuebles: el aumento de reportes de roedores en otoño e invierno responde a eso, no a que haya más roedores.',
        'El entorno semidesértico favorece al alacrán, igual que en el resto de la región. Entra por grietas y por juntas de construcción, sobre todo en viviendas cercanas a terrenos baldíos o a lomeríos.',
        'La actividad industrial y de bodegas de la zona plantea un problema distinto al doméstico: superficies grandes, andenes de carga y rotación de mercancía, donde el control tiene que ser preventivo y documentado.',
      ],
      plagasTitulo: 'Lo que más atendemos en Saltillo',
      plagas: [
        {
          nombre: 'Alacranes',
          porQue:
            'Mismo criterio que en el resto de la región: barrera perimetral y sellado. En construcciones nuevas conviene revisar juntas y registros antes de habitar.',
        },
        {
          nombre: 'Roedores',
          porQue:
            'El pico es de otoño en adelante, cuando buscan calor. En bodegas el control se planifica por temporada, con estaciones de monitoreo, no con una visita de emergencia.',
        },
        {
          nombre: 'Cucarachas',
          porQue:
            'Se concentran donde hay humedad constante: cocinas, cuartos de lavado y áreas de servicio. En clima seco, la humedad interior es la que sostiene la población.',
        },
      ],
      servicioTitulo: 'Cómo trabajamos acá',
      servicio:
        'Planificamos por temporada en vez de reaccionar: la mayoría de los problemas de Saltillo son previsibles por calendario. En vivienda revisamos el perímetro y los puntos de humedad interior. En bodega e industria dejamos el programa por escrito, con puntos de monitoreo identificados, para que el control pueda auditarse.',
    },
    en: {
      metaTitle: 'Pest Control in Saltillo, Coahuila | Fumigation',
      metaDescription:
        'Pest control and fumigation service in Saltillo, Coahuila. Scorpions, rodents and cockroaches for homes, offices and industry. Free quote.',
      h1: 'Pest control in Saltillo, Coahuila',
      intro:
        'We serve Saltillo. The city’s semi-desert, high-altitude climate — cold winters, dry summers — produces a markedly seasonal pest pattern.',
      contextoTitulo: 'What Saltillo’s climate causes',
      contexto: [
        'Temperature swings between day and night, and between summer and winter, are large. When it drops, pests move indoors: the rise in rodent reports in autumn and winter reflects that, not a larger rodent population.',
        'The semi-desert environment favours scorpions, as elsewhere in the region. They enter through cracks and construction joints, especially in homes near empty lots or hillsides.',
        'The area’s industrial and warehouse activity poses a different problem from domestic work: large surfaces, loading docks and stock turnover, where control must be preventive and documented.',
      ],
      plagasTitulo: 'What we treat most in Saltillo',
      plagas: [
        {
          nombre: 'Scorpions',
          porQue:
            'Same approach as elsewhere in the region: perimeter barrier and sealing. In new construction, joints and drains are worth checking before moving in.',
        },
        {
          nombre: 'Rodents',
          porQue:
            'The peak runs from autumn onward, when they seek warmth. In warehouses, control is planned by season with monitoring stations, not as an emergency visit.',
        },
        {
          nombre: 'Cockroaches',
          porQue:
            'They concentrate where humidity is constant: kitchens, laundry rooms and service areas. In a dry climate, indoor moisture is what sustains the population.',
        },
      ],
      servicioTitulo: 'How we work here',
      servicio:
        'We plan by season rather than react: most problems in Saltillo are predictable by calendar. In homes we check the perimeter and indoor moisture points. In warehouses and industry we leave a written programme with identified monitoring points, so the control can be audited.',
    },
  },

  // ── 4. Guadalajara ───────────────────────────────────────────────────────
  {
    slug: 'guadalajara',
    nombre: 'Guadalajara',
    estado: 'Jalisco',
    estadoOficial: 'Jalisco',
    es: {
      metaTitle: 'Control de Plagas en Guadalajara, Jalisco | Fumigación',
      metaDescription:
        'Damos servicio de control de plagas y fumigación en Guadalajara y su zona metropolitana. Mosquitos, termitas, cucarachas y roedores. Cotización sin costo.',
      h1: 'Control de plagas en Guadalajara, Jalisco',
      intro:
        'Damos servicio en Guadalajara y su zona metropolitana. La temporada de lluvias marca el calendario de plagas de la ciudad más que cualquier otro factor.',
      contextoTitulo: 'Lo que el clima de Guadalajara provoca',
      contexto: [
        'La temporada de lluvias es larga y concentrada. Cada patio, maceta, canaleta y cacharro que junta agua se convierte en criadero de mosquito, y el ciclo de huevo a adulto se completa en poco más de una semana. Por eso el problema escala tan rápido cuando empieza a llover.',
        'La humedad sostenida favorece a la termita subterránea, que ataca estructuras de madera desde el suelo y suele descubrirse tarde, cuando el daño ya está hecho.',
        'La ciudad tiene mucha vivienda con jardín y patio, lo que amplía la superficie exterior a tratar respecto de una ciudad vertical.',
      ],
      plagasTitulo: 'Lo que más atendemos en Guadalajara',
      plagas: [
        {
          nombre: 'Mosquitos',
          porQue:
            'El problema principal de la ciudad en temporada. Es también el vector del dengue, así que el control tiene una dimensión sanitaria, no solo de confort.',
        },
        {
          nombre: 'Termitas',
          porQue:
            'La humedad sostenida las favorece. Conviene revisar antes de que el daño sea visible: cuando se nota a simple vista, la estructura ya está comprometida.',
        },
        {
          nombre: 'Cucarachas y roedores',
          porQue:
            'Las lluvias inundan drenajes y registros y empujan a ambos hacia el interior. El pico coincide con las primeras tormentas fuertes.',
        },
      ],
      servicioTitulo: 'Cómo trabajamos acá',
      servicio:
        'El trabajo empieza por eliminar criaderos, no por nebulizar. Recorremos patio, azotea, canaletas y macetas con usted y le señalamos cada punto de agua acumulada, porque son los que sostienen la población. La nebulización viene después, y sin ese paso previo su efecto dura pocos días.',
    },
    en: {
      metaTitle: 'Pest Control in Guadalajara, Jalisco | Fumigation',
      metaDescription:
        'Pest control and fumigation service in Guadalajara and its metropolitan area. Mosquitoes, termites, cockroaches and rodents. Free quote.',
      h1: 'Pest control in Guadalajara, Jalisco',
      intro:
        'We serve Guadalajara and its metropolitan area. The rainy season sets the city’s pest calendar more than any other factor.',
      contextoTitulo: 'What Guadalajara’s climate causes',
      contexto: [
        'The rainy season is long and concentrated. Every yard, planter, gutter and container that collects water becomes a mosquito breeding site, and the egg-to-adult cycle completes in little over a week. That is why the problem escalates so fast once the rain starts.',
        'Sustained humidity favours subterranean termites, which attack timber structures from the ground and are usually found late, once damage is done.',
        'The city has a great deal of housing with yards and gardens, which widens the outdoor area to treat compared with a vertical city.',
      ],
      plagasTitulo: 'What we treat most in Guadalajara',
      plagas: [
        {
          nombre: 'Mosquitoes',
          porQue:
            'The city’s main seasonal problem. Also the dengue vector, so control has a health dimension, not just comfort.',
        },
        {
          nombre: 'Termites',
          porQue:
            'Sustained humidity favours them. Worth inspecting before damage is visible: by the time you can see it, the structure is already compromised.',
        },
        {
          nombre: 'Cockroaches and rodents',
          porQue:
            'Rain floods drains and manholes and pushes both indoors. The peak coincides with the first heavy storms.',
        },
      ],
      servicioTitulo: 'How we work here',
      servicio:
        'The work starts by removing breeding sites, not by fogging. We walk the yard, roof, gutters and planters with you and point out every standing-water spot, because those sustain the population. Fogging comes afterwards, and without that first step its effect lasts only days.',
    },
  },
]

export const getCiudad = (slug: string) => CIUDADES.find((c) => c.slug === slug)

/** Ruta de la página de una ciudad. */
export const rutaCiudad = (slug: string) => `/control-de-plagas/${slug}`
