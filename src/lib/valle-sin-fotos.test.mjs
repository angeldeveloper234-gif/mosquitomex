import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

/**
 * REGLA DURA DE LA PAGINA DEL VALLE DE TEXAS.
 *
 * Ahi NO puede haber ninguna foto de operacion. Ni de Mexico, ni de stock, ni
 * de ningun lado. Una foto de un tecnico trabajando, puesta en la pagina de
 * Texas, sugiere que ahi ya se opera — y todavia no. El texto puede decir
 * "proximamente" todo lo que quiera: la foto lo desmiente antes de que nadie
 * lea el texto.
 *
 * Todo el apoyo visual de esa pagina es mapa, iconos e ilustracion. Este test
 * lo hace cumplir.
 */

const RAIZ = path.join(import.meta.dirname, '..', '..')
const leer = (p) => fs.readFileSync(path.join(RAIZ, p), 'utf8')

const ARCHIVOS_DEL_VALLE = [
  'src/components/sections/ValleTexas.tsx',
  'src/app/valle-de-texas/page.tsx',
]

/** Todo lo que significa "esto es una foto". */
const SENAL_FOTO = [
  /<Image\b/,
  /<img\b/,
  /next\/image/,
  /FotoServicio/,
  /media-servicios/,
  /\.(jpg|jpeg|png|webp|avif)\b/i,
  /backgroundImage/,
]

test('la pagina del Valle de Texas no usa ninguna foto', () => {
  const infracciones = []
  for (const archivo of ARCHIVOS_DEL_VALLE) {
    const src = leer(archivo)
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/^\s*\/\/.*$/gm, '')
    for (const senal of SENAL_FOTO) {
      if (senal.test(src)) infracciones.push(`${archivo} → ${senal}`)
    }
  }
  assert.deepEqual(
    infracciones,
    [],
    `Hay fotos en la pagina del Valle. Ahi solo van mapa, iconos e ` +
      `ilustracion: una foto de operacion sugiere que ya se opera en Texas. ` +
      `${infracciones.join(' · ')}`
  )
})

/** El apoyo visual que SI corresponde tiene que estar. */
test('la pagina del Valle usa mapa e iconos', () => {
  const src = leer('src/components/sections/ValleTexas.tsx')
  assert.ok(/MapaTexas/.test(src), 'Falta el mapa de Texas')
  assert.ok(/IconoMosquito|ICONOS/.test(src), 'Faltan los iconos de plagas')
})

/** El aviso de estado no se puede perder al agregar diseno. */
test('el aviso de estado sigue en la pagina', () => {
  const src = leer('src/components/sections/ValleTexas.tsx')
  assert.ok(/c\.etiqueta/.test(src), 'Falta la etiqueta de estado')
  assert.ok(/c\.aviso/.test(src), 'Falta el aviso de estado')
})

/** El mapa y los iconos no pueden traer una dependencia nueva. */
test('el mapa y los iconos no dependen de una libreria nueva', () => {
  for (const archivo of ['src/components/ui/MapaTexas.tsx', 'src/components/ui/IconosPlagas.tsx']) {
    const imports = [...leer(archivo).matchAll(/^import .*?from ['"]([^'"]+)['"]/gm)].map((m) => m[1])
    const externas = imports.filter((i) => !i.startsWith('.') && !i.startsWith('@/') && i !== 'react')
    assert.deepEqual(externas, [], `${archivo} importa: ${externas.join(', ')}`)
  }
})
