import type { FaqItem } from './services'

/**
 * FAQ general de la home.
 *
 * Redactada para responder lo que la gente pregunta antes de contratar. Las
 * respuestas evitan precios, garantías y certificaciones concretas porque el
 * cliente aún no los ha confirmado; cuando los confirme, actualizar aquí.
 */
export const HOME_FAQ: FaqItem[] = [
  {
    question: '¿Cuánto cuesta un servicio de fumigación?',
    answer:
      'El costo depende del tamaño del inmueble, del tipo de plaga y del nivel de infestación, por lo que no existe un precio único. Hacemos una inspección previa y entregamos una cotización sin costo antes de realizar cualquier trabajo, para que sepas exactamente qué vas a pagar.',
  },
  {
    question: '¿Los productos son seguros para niños y mascotas?',
    answer:
      'Trabajamos con productos de uso profesional aplicados según sus indicaciones de seguridad. El técnico te informará qué tiempo debe pasar antes de reingresar a las áreas tratadas y qué precauciones tomar con niños y mascotas. Si en el domicilio hay bebés, personas alérgicas o mascotas, avísanos antes para ajustar el plan.',
  },
  {
    question: '¿En qué zonas de México dan servicio?',
    answer:
      'Damos cobertura en todo México, tanto en hogares como en negocios. Al solicitar tu cotización indícanos la ciudad y la dirección donde se realizaría el servicio para confirmarte la disponibilidad y agendar la visita.',
  },
  {
    question: '¿Cuánto tarda en hacer efecto el tratamiento?',
    answer:
      'Sobre los insectos presentes el efecto suele ser muy rápido. La eliminación completa depende de la plaga: en cucarachas y chinches hay que esperar a que nazcan y mueran los ejemplares de los huevos ya puestos, por lo que se programa una visita de seguimiento.',
  },
  {
    question: '¿Tengo que salir de mi casa durante el servicio?',
    answer:
      'En muchos tratamientos focalizados no es necesario desalojar, y basta con mantenerse fuera de las áreas tratadas durante unas horas. En casos que requieren una aplicación más amplia sí puede pedirse desocupar temporalmente. Te lo indicamos con claridad antes de agendar, nunca al llegar.',
  },
  {
    question: '¿Cada cuánto se debe fumigar?',
    answer:
      'Para prevención en un hogar suele recomendarse un tratamiento periódico a lo largo del año, ajustado a la temporada y al entorno. En negocios de alimentos, hoteles y bodegas la frecuencia es mayor y se maneja como un programa continuo con registro de cada visita.',
  },
  {
    question: '¿Qué plagas controlan?',
    answer:
      'Atendemos mosquitos, cucarachas, ratas y ratones, termitas y comején, chinches de cama, hormigas, arañas, moscas y alacranes, tanto en viviendas como en empresas. Si no sabes con qué plaga estás lidiando, la identificamos durante la inspección.',
  },
  {
    question: '¿Qué necesito preparar antes de la visita?',
    answer:
      'Depende del tratamiento. Por lo general se pide despejar el acceso a rincones y zócalos, guardar alimentos y utensilios que estén a la vista, y prever el resguardo de las mascotas. Te enviamos las indicaciones concretas al confirmar la cita.',
  },
]
