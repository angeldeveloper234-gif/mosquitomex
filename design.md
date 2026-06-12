# MosquitoMex — Design System v2

> Rediseño inspirado en referencias Jorge Guevara (thebugmaster.com + trulynolendevenezuela.com)  
> Objetivo: más orientado a conversión, trust-heavy, estructura profesional, diseño moderno.
> **Paleta:** Los tokens originales (verde) fueron adaptados a la paleta oficial de la marca: rojo `#e82536` + navy `#082135`.

---

## Filosofía de diseño

**Antes (v1):** Premium/luxury — "outdoor living" estético. Bello pero bajo en conversión.  
**Ahora (v2):** Autoridad confiable — "fumigadora profesional de referencia". La confianza convierte.

El hero es una promesa, no solo una imagen. Cada sección responde una objeción del prospecto.

---

## Tokens de color (paleta roja — marca MosquitoMex)

```css
--ds-900: #04111c;   /* Dark navy — fondos oscuros, footer */
--ds-800: #082135;   /* Top bar, overlays, body text */
--ds-700: #e82536;   /* Primary red — CTAs, iconos activos */
--ds-600: #c91e2d;   /* Hover states, eyebrows */
--ds-500: #f04454;   /* Accents secundarios */
--ds-100: #fdeaec;   /* Tinted backgrounds */
--ds-50:  #fff5f6;   /* Off-white con tint rojo */

--ds-amber:    #F5A623; /* CTA urgente, badges, stars */
--ds-amber-dk: #C8861B; /* Hover del amber */

--white:     #FFFFFF;
--ds-off:    #F8F8F8;   /* Background de forms/cards */
--ds-text:   #082135;   /* Body text principal */
--ds-muted:  #5A6070;   /* Subtítulos, labels, meta */
--ds-border: #E5E8EC;   /* Borders suaves */
```

---

## Tipografía

| Rol     | Fuente            | Peso    | Uso                               |
|---------|-------------------|---------|-----------------------------------|
| Display | Plus Jakarta Sans | 700–800 | H1, H2, logo, números grandes     |
| Body    | DM Sans           | 400–600 | Párrafos, labels, nav links       |

```css
/* Escala fluid (clamp) */
--fs-xs:  clamp(0.75rem,   1.5vw, 0.8125rem);
--fs-sm:  clamp(0.875rem,  1.8vw, 0.9375rem);
--fs-md:  clamp(1rem,      2vw,   1.0625rem);
--fs-lg:  clamp(1.125rem,  2.5vw, 1.25rem);
--fs-xl:  clamp(1.375rem,  3vw,   1.625rem);
--fs-2xl: clamp(1.75rem,   4vw,   2.25rem);
--fs-3xl: clamp(2.25rem,   5vw,   3rem);
--fs-4xl: clamp(2.75rem,   6vw,   4rem);
```

---

## Spacing & radii

```
--r:    6px   (máximo permitido — botones, inputs, cards, badges)
--r-lg: 6px   (igual — no se usan valores mayores)

Base: 4px scale → 0.25rem pasos
Padding de secciones: padding: 6rem 2rem
Max-width contenido: 1200px centrado
```

> **Regla de radii:** `border-radius` máximo es **6px** en todos los elementos sin excepción.
> No usar `rounded-xl`, `rounded-2xl`, `rounded-full` ni ningún valor superior a `rounded` (6px).
> Aplica a: botones, cards, inputs, badges, modales, iconos contenedor, chips, formularios.

---

## Estructura de la página (orden de secciones)

```
1.  TOP BAR        — Phone number destacado + promo badge
2.  NAV STICKY     — Logo + links + "Agendar visita gratis" CTA
3.  HERO           — Headline + trust bullets + dual CTA + form card
4.  LOGOS MARQUEE  — "Empresas que confían en nosotros"
5.  PEST GRID      — 8 plagas en grilla clickeable → scroll a form
6.  VALUE PROPS    — Dark green bg: Sin químicos / Mismo día / Garantía 100%
7.  HOW IT WORKS   — 3 pasos numerados, dashed connector line
8.  ABOUT          — Split grid: foto + badge "20 años" + stats + checklist
9.  TESTIMONIALS   — 3 cards con estrellas ★★★★★
10. CTA BANNER     — Verde, headline + 2 botones (llamar + agendar)
11. CONTACT FORM   — Split: info de contacto + proceso + form completo
12. FOOTER         — 4 cols: brand/socials + servicios + empresa + contacto
```

---

## Componentes clave

### Pest Card

```
Estado default:  bg --off, border --border, texto oscuro, hover suave
Estado hover:    bg --g700, border transparente, texto blanco, translateY(-3px)
```

Clic en cualquier pest card → scroll suave a `#contacto` (intención implícita de cotizar).

### Trust Check (hero)

```
Círculo verde --g600, ícono check blanco 12px
Texto: semibold, rgba(255,255,255,.88)
```

### Botón primario vs amber

```css
/* btn-primary: uso default en nav y forms */
btn-primary { background: var(--g700); color: white; }

/* btn-amber: uso para llamadas urgentes / teléfono */
btn-amber   { background: var(--amber); color: var(--g900); }
```

**Regla:** `btn-amber` siempre lleva `href="tel:"` — crea urgencia sin abusar.

### Section eyebrow

```css
font-size: var(--fs-xs);
font-weight: 700;
letter-spacing: .1em;
text-transform: uppercase;
color: var(--g600);                        /* sobre fondo blanco */
/* color: rgba(255,255,255,.5);  sobre fondo oscuro */

/* Decoración */
.eyebrow::before {
  content: '';
  width: 20px;
  height: 2px;
  background: currentColor;
}
```

---

## Hero card (quick quote form)

- **Posición:** columna derecha del hero (desktop) / debajo del texto (mobile)
- Background blanco, `shadow-lg`, `border-radius: 16px`
- **Campos:** Nombre / Teléfono / Tipo de plaga (select) / Tipo de propiedad (select)
- **Submit:** `btn-primary btn-lg` full-width
- **Footer note:** "🔒 Sin costo. Sin compromiso. 100% confidencial."

---

## Paleta de uso por sección

| Sección      | Fondo        | Texto               |
|--------------|--------------|---------------------|
| Top bar      | `--ds-800`   | `rgba(white,.9)`    |
| Nav          | `--white`    | `--ds-text`         |
| Hero         | `--ds-800`   | white               |
| Logos bar    | `--ds-50`    | `--ds-muted`        |
| Pest grid    | `--white`    | `--ds-text`         |
| Value props  | `--ds-800`   | white               |
| How it works | `--ds-off`   | `--ds-text`         |
| About        | `--white`    | `--ds-text`         |
| Testimonials | `--ds-50`    | `--ds-text`         |
| CTA banner   | `--ds-700`   | white               |
| Contact      | `--white`    | `--ds-text`         |
| Footer       | `--ds-900`   | `rgba(white,.8)`    |

---

## Animaciones

```css
/* Fade-in on scroll */
opacity: 0 → 1;
transform: translateY(20px) → translateY(0);
transition: 0.6s ease;
threshold: 0.1;

/* Logo marquee */
animation: scroll-logos 30s linear infinite;
/* pausa en hover */

/* Hover cards */
transition: all .25s;
/* hover: translateY(-3px) */

/* Botones */
transition: all .2s;
/* hover: translateY(-1px) + shadow */
```

**Regla anti-AI:** No animar texto carácter por carácter. No scroll-jacking. No parallax de fondo. Menos = mejor.

---

## Diferencias v1 → v2

| Elemento      | v1                           | v2                                     |
|---------------|------------------------------|----------------------------------------|
| Hero          | Video YouTube full-screen    | Imagen estática + form de cotización   |
| CTA principal | "Agendar Mi Presupuesto"     | Dual: llamar por tel + form            |
| Estructura    | Sin pest grid                | Grilla de 8 plagas con hover           |
| Proceso       | 3 steps solo en #contacto    | Sección propia "Cómo funciona"         |
| Testimonios   | Cards básicas                | Stars + avatar + fuente (Google/FB)    |
| Nav           | Sin teléfono visible         | Teléfono en top bar siempre visible    |
| Garantía      | Mencionada en hero           | Sección value prop dedicada            |
| Form          | Solo al fondo                | Duplicado: hero card + sección final   |

---

## Checklist de implementación (Next.js)

- [ ] Instalar `@next/font` con Plus Jakarta Sans + DM Sans
- [ ] Crear `tokens.css` con todas las variables CSS
- [ ] Migrar video hero → hero con imagen + form card
- [ ] Crear componente `PestGrid` con clic → scroll to form
- [ ] Crear componente `HowItWorks` (nueva sección)
- [ ] Actualizar `Testimonials` con estrellas y fuente
- [ ] Agregar top bar con teléfono
- [ ] Agregar `btn-amber` al nav para teléfono en mobile
- [ ] Reemplazar meta tags con dominio real (no `clientedomain.com`)
- [ ] Configurar OG image real

---

## Archivos a crear / modificar

| Archivo                                   | Acción   | Descripción                          |
|-------------------------------------------|----------|--------------------------------------|
| `src/app/globals.css`                     | Modificar | Agregar tokens CSS completos         |
| `src/app/layout.tsx`                      | Modificar | Fuentes Plus Jakarta Sans + DM Sans  |
| `src/components/layout/Header.tsx`        | Modificar | Top bar + nav sticky + btn-amber     |
| `src/components/sections/Hero.tsx`        | Modificar | Imagen estática + hero card form     |
| `src/components/sections/PestGrid.tsx`    | Crear     | Grilla 8 plagas                      |
| `src/components/sections/ValueProps.tsx`  | Crear     | 3 props sobre fondo --g900           |
| `src/components/sections/HowItWorks.tsx`  | Crear     | 3 pasos con conector                 |
| `src/components/sections/About.tsx`       | Modificar | Split grid + badge "20 años" + stats |
| `src/components/sections/Testimonials.tsx`| Modificar | Stars + avatar + fuente              |
| `src/components/sections/CTABanner.tsx`   | Crear     | Banner verde con 2 botones           |
| `src/components/layout/Footer.tsx`        | Modificar | 4 columnas + redes                   |

---

*Versión: 2.0 · Cliente: Jorge Guevara · Angel Design Studio*
