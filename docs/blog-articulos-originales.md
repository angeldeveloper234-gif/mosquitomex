# Artículos originales del blog — respaldo

> ⚠️ **NO BORRAR.** Estos dos artículos venían de la plantilla original del sitio
> y trataban sobre confort exterior (climatización y calefacción de patios), no
> sobre control de plagas. Se retiraron del blog en agosto de 2026 porque diluían
> la relevancia temática del sitio de cara a Google, y se sustituyeron por
> contenido de control de plagas.
>
> Se conservan aquí íntegros por si el cliente confirma que quiere recuperarlos.
> Para reactivarlos, volver a añadirlos al array `blog.articles` en
> `src/lib/translations.ts` (versiones ES y EN) y restaurar sus fechas en
> `src/lib/blog.ts`.

---

## 1. `mist-cooling`

- **Título:** Sistemas de niebla: Climatiza tu patio este verano
- **Categoría:** Climatización
- **Imagen:** `/images/blog-mist.png`
- **Fecha original:** 2025-05-21
- **Resumen:** Descubre la tecnología de nebulización de alta presión que reduce la temperatura exterior hasta 12°C.

**Contenido (3 párrafos, separados por `\n\n` en el código):**

> El verano es la época perfecta para disfrutar de comidas al aire libre, carnes asadas y tardes junto a la piscina. Sin embargo, el calor extremo puede hacer que permanecer en el patio sea insoportable durante las horas centrales del día. Afortunadamente, existe una solución innovadora: los sistemas de enfriamiento por niebla de alta presión.
>
> Estos sistemas funcionan atomizando agua purificada a través de boquillas de precisión a presiones extremadamente altas. Esto crea una micro-niebla ultrafina cuyas gotas son tan pequeñas que se evaporan instantáneamente al entrar en contacto con el aire caliente. Este proceso físico, conocido como enfriamiento por evaporación térmica, absorbe el calor del ambiente y reduce la temperatura del aire circundante hasta en 12°C, todo esto sin mojar a las personas ni las superficies.
>
> Es la misma tecnología de lujo que se utiliza en los resorts más exclusivos del mundo y en restaurantes premium con terrazas. Además de refrescar el ambiente, la cortina de niebla actúa como un filtro natural que precipita el polvo, polen y alérgenos suspendidos en el aire, e incluso mantiene alejados a los insectos voladores. Convierte tu patio en un oasis fresco y habitable durante todo el año.

---

## 2. `outdoor-heating`

- **Título:** Terrazas todo el año: Calefacción y confort exterior
- **Categoría:** Confort
- **Imagen:** `/images/blog-heating.png`
- **Fecha original:** 2025-06-18
- **Resumen:** No abandones tu patio durante el invierno. Las mejores soluciones de calefacción exterior con estilo.

**Contenido (3 párrafos, separados por `\n\n` en el código):**

> Cuando bajan las temperaturas, la tendencia natural es refugiarse dentro de la casa y dejar el patio o la terraza en el olvido hasta la próxima primavera. Sin embargo, con el diseño y el equipamiento adecuados, el invierno puede convertirse en una de las temporadas más acogedoras para disfrutar del aire libre.
>
> La calefacción exterior ha evolucionado enormemente en los últimos años, pasando de los ruidosos y poco estéticos calentadores de gas a sistemas infrarrojos radiantes de alta tecnología. Estos calentadores transmiten calor directamente a las personas y objetos a través de ondas electromagnéticas seguras, en lugar de calentar el aire que puede ser dispersado fácilmente por el viento. Esto asegura un confort térmico inmediato y un consumo energético altamente eficiente.
>
> Para crear una atmósfera verdaderamente premium, combina estos sistemas de calefacción con iluminación decorativa cálida en tonos ámbar y muebles de exterior confortables con mantas texturizadas. Una terraza bien iluminada y calefaccionada se convierte en el lugar ideal para disfrutar de una copa de vino por la noche o una taza de café por la mañana, expandiendo los metros cuadrados habitables de tu hogar sin importar el clima.

---

## Versiones en inglés

Las traducciones al inglés de ambos artículos (`Mist Systems` y `Outdoor Heating`)
se retiraron del mismo array en la sección `en` de `src/lib/translations.ts`.

## Servicios heredados relacionados

En la misma línea, quedaron comentados (no borrados) en el código:

- `src/components/sections/Features.tsx` — componente completo, nunca se importaba.
  Listaba: Calefacción Exterior, Iluminación Decorativa, Pasto Sintético y Cocinas Exteriores.
- `src/lib/translations.ts` → `footer.servicesList.heating` y `.patioDesign` —
  aparecían en el footer de todas las páginas.
