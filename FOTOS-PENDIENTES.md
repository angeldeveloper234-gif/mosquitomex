# Fotos que faltan para la página de Servicios

Las seis tarjetas de `/servicios` muestran una **ilustración de la plaga**
mientras no haya foto real. La ilustración dice qué plaga es; una foto dice
que ustedes la tratan. **No es lo mismo, y las fotos siguen haciendo falta.**

Antes de las ilustraciones había un cartel que decía "FALTA ESTA FOTO". Se
quitó porque ya hay algo digno que mostrar, pero eso hizo que el recordatorio
dejara de verse en pantalla: este documento es ahora el único lugar donde
consta que las seis fotos están pendientes.

## Por qué no se puso una foto cualquiera

Se buscaron fotos de la operación en el proyecto y en todo el Drive del
estudio. **No existe ninguna de Mosquito Mex.** Lo único parecido que hay es:

- Capturas de plantillas web **de otras empresas** de control de plagas, en la
  carpeta de otro cliente.
- Imágenes **generadas por IA**.

Ninguna de las dos sirve. La primera es material de terceros; la segunda no
documenta nada, porque no pasó. Poner cualquiera de las dos como si fuera la
operación de Mosquito Mex es justo lo que no se puede hacer: es el tipo de
cosa que un cliente detecta, y cuando la detecta deja de creer el resto del
sitio.

---

## Mensaje para mandarle al cliente (copiar y pegar)

> Hola, para terminar la página de servicios necesito seis fotos del trabajo
> real. Con el celular está bien — no hace falta fotógrafo. Lo que importa es
> que se vea el trabajo, no que sea una foto perfecta.
>
> Una por cada servicio:
>
> **1. Mosquitos** — Un técnico nebulizando en exterior, en un jardín o patio.
> Que se vea la nebulizadora en uso.
>
> **2. Cucarachas** — La mano del técnico aplicando gel en una juntura, una
> alacena o debajo de una tarja. De cerca.
>
> **3. Roedores** — Una estación de cebo ya instalada y rotulada, contra un
> muro o en un andén de carga.
>
> **4. Termitas** — La inyección en madera o en el suelo: el taladro, la
> jeringa, o la barrera del perímetro.
>
> **5. Chinches** — El tratamiento de un colchón o una base de cama, con el
> equipo a la vista.
>
> **6. Fumigación comercial** — Un técnico uniformado trabajando en una cocina
> de restaurante o en una bodega.
>
> Tres cosas que ayudan mucho:
>
> - Con buena luz. Si es de día y en exterior, mejor.
> - Que se vea el uniforme o el equipo, porque es lo que transmite que es un
> trabajo profesional.
> - Mandámelas **como archivo**, no por el chat normal, así no se comprimen.
>
> Si en alguna foto sale un cliente o su casa reconocible, avisame para
> pedirle permiso antes de publicarla.

---

## Para el estudio

| Tarjeta | Slot en el código | Toma que corresponde |
| --- | --- | --- |
| Mosquitos | `control-de-mosquitos` | Nebulización en exterior |
| Cucarachas | `control-de-cucarachas` | Aplicación de gel en cocina |
| Roedores | `control-de-roedores` | Estación de cebo instalada |
| Termitas | `control-de-termitas` | Inyección en madera o suelo |
| Chinches | `control-de-chinches` | Tratamiento en colchón |
| Fumigación comercial | `fumigacion-comercial` | Técnico en restaurante o bodega |

### Cómo se agrega una foto cuando llegue

1. Procesarla a 1600px de ancho, JPG y WebP, y dejarla en
   `public/images/servicios/<slot>.jpg` y `.webp`.
2. En `src/config/media-servicios.ts`, cambiar esa entrada: `pendiente: false`,
   las dos rutas, y el `alt` describiendo **lo que se ve**.
3. `npm test` — falla si la foto no existe, si el `alt` es demasiado corto o si
   la misma foto quedó en dos tarjetas.

### Lo que el código no deja hacer

- Repetir una foto en dos tarjetas.
- Declarar una foto que no está en `public/`.
- Dejar una entrada pendiente sin decir qué falta.

Las tres cosas rompen el build. No es celo: la regla de "solo fotos reales"
solo se sostiene si algo la vigila.
