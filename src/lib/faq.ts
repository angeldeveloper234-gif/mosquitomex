import type { FaqItem } from './services'
import { HOME_FAQ } from './faq-home'

/**
 * FAQ COMPLETA — la de la página /faq.
 *
 * Relación con HOME_FAQ: el home sigue mostrando su bloque corto de ocho
 * preguntas (las de antes de contratar). Esta página es el conjunto completo y
 * es la ÚNICA que emite el schema FAQPage. Dos páginas con el mismo FAQPage y
 * las mismas preguntas compiten entre sí y Google se queda con una.
 *
 * DE DÓNDE SALEN LAS RESPUESTAS NUEVAS
 * El bloque de negocios y las respuestas sobre capacitación, garantía,
 * productos y reportes salen del catálogo institucional de PCP Internacional
 * entregado por el cliente (ver src/lib/pcp.ts). Hasta ahora esas respuestas no
 * se podían dar: el comentario de faq-home.ts decía "las respuestas evitan
 * precios, garantías y certificaciones concretas porque el cliente aún no los
 * ha confirmado". El catálogo es esa confirmación, para todo menos el precio.
 *
 * REGLA DE ATRIBUCIÓN
 * Lo que el catálogo declara de la RED se dice de la red, no de MosquitoMEX.
 * Donde aplicarlo al servicio residencial sería una inferencia nuestra, la
 * respuesta lo dice abiertamente en vez de afirmarlo.
 */

/** Preguntas de quien está por contratar. Son las del home. */
export const FAQ_GENERAL: FaqItem[] = HOME_FAQ

/** Preguntas sobre la empresa y el respaldo de la red. */
export const FAQ_EMPRESA: FaqItem[] = [
  {
    question: '¿Qué es PCP Internacional y qué relación tiene con MosquitoMEX?',
    answer:
      'PCP Internacional Control de Plagas y Fumigaciones es la red a la que MosquitoMEX está asociada. Fue fundada en 2009 por Jorge Luis Guevara IV y su modelo consiste en que cada empresa asociada opera con su propia marca, bajo un sello común que la distingue como empresa certificada con servicios de calidad internacional. Por eso puede encontrar el nombre PCP en el perfil o en la documentación del servicio: es la red, y MosquitoMEX es una de sus empresas.',
  },
  {
    question: '¿Big Cat y MosquitoMEX son la misma empresa?',
    answer:
      'No son la misma empresa, pero sí son de la misma red. Big Cat es otra empresa asociada a PCP Internacional, con su propia marca y su propia cobertura. Compartimos los estándares de servicio y la capacitación de la red. Si su ciudad la atiende mejor Big Cat, se lo decimos.',
  },
  {
    question: '¿Qué capacitación tienen los técnicos que llegan a mi domicilio?',
    answer:
      'Los técnicos de la red reciben formación a través de los programas de capacitación profesional de AIB, Global Estándar y otras instituciones, dentro de un programa de supervisión y capacitación avalado en los Estados Unidos. No es personal eventual: el método de trabajo y la supervisión son los mismos para un domicilio que para una planta de alimentos.',
  },
  {
    question: '¿Qué garantía tienen los servicios?',
    answer:
      'La red PCP Internacional declara una Cobertura por Garantía que permite recibir tantos servicios como sean necesarios, sin costo adicional y con respuesta dentro de las primeras 24 horas, hasta que el cliente quede completamente satisfecho. Al cotizar le confirmamos por escrito qué cobertura aplica a su caso concreto, porque las condiciones cambian según el tipo de plaga y de inmueble.',
  },
  {
    question: '¿Los productos que usan contaminan?',
    answer:
      'La red trabaja con un programa de bajo impacto ambiental basado en el no uso de plaguicidas contaminantes, y con productos y tecnologías de laboratorios reconocidos en innovación. El enfoque es de Manejo Integrado de Plagas: primero se corrige lo que atrae a la plaga y se cierran los accesos, y el producto se aplica de forma dirigida, no como una nebulización general de toda la propiedad.',
  },
  {
    question: '¿Me entregan un comprobante o reporte de cada visita?',
    answer:
      'Sí. La gestión de inspecciones y servicios de la red se administra en MobiWork360, su plataforma: desde ahí se registran las órdenes de servicio, los certificados y los informes de inspección, que pueden incluir imágenes y gráficas por ubicación. Para un hogar suele bastar el comprobante del servicio; para un negocio con auditoría, el registro completo es parte de lo que se entrega.',
  },
]

/** Preguntas de negocios, restaurantes e industria. */
export const FAQ_NEGOCIOS: FaqItem[] = [
  {
    question: '¿Dan servicio a restaurantes y negocios de alimentos?',
    answer:
      'Sí, y es una parte central del trabajo de la red. Los programas se diseñan con los principios de HACCP y en apego a los estándares exigidos por la FSMA y la FDA, con el registro documental que un establecimiento de alimentos necesita a la mano cuando llega una verificación.',
  },
  {
    question: '¿El servicio me sirve para el Distintivo H o para la NOM-251?',
    answer:
      'El control de plagas es uno de los puntos que se revisan en esos procesos, y el programa se entrega documentado para que pueda presentarlo. La red trabaja con los estándares del Distintivo H y M y con la NOM-251 de la Secretaría de Salud como referencia. El distintivo lo otorga la autoridad y depende de más factores además del control de plagas, así que ninguna empresa de fumigación puede garantizárselo por sí sola.',
  },
  {
    question: '¿Atienden plantas, bodegas y operaciones con auditoría?',
    answer:
      'Sí. Entre las operaciones que atiende la red hay fabricantes de alimentos, silos de granos almacenados, fábricas de empaques, almacenamiento, empacadores, transporte y envases, además de supermercados, tiendas de conveniencia, hoteles, tiendas por departamentos, oficinas, clínicas y hospitales, y escuelas y universidades.',
  },
  {
    question: '¿Cómo funciona un programa continuo para un negocio?',
    answer:
      'Arranca con un análisis de riesgo de plagas, un análisis del entorno y un estudio detallado de las instalaciones. Con eso se entrega un diagnóstico de las condiciones actuales y un plan de operaciones a corto, mediano y largo plazo, en vez de una visita aislada. Después el programa se ajusta con los resultados mes a mes, con objetivos concretos de reducción.',
  },
  {
    question: '¿Ayudan a preparar una auditoría o una certificación?',
    answer:
      'Sí. La red desarrolla planes HACCP y acompaña los procesos de auditoría y certificación, sea cual sea el estándar que le pidan. Si ya tiene un plan de Buenas Prácticas de Manufactura o procedimientos operativos, se parte de lo que existe en vez de empezar de cero.',
  },
]

/** Todas las preguntas, en el orden en que se muestran. Es lo que va al schema. */
export const FAQ_COMPLETA: FaqItem[] = [...FAQ_GENERAL, ...FAQ_EMPRESA, ...FAQ_NEGOCIOS]
