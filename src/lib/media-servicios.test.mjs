import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { FOTOS_SERVICIOS } from '../config/media-servicios.ts'

/**
 * Protege las dos reglas del encargo de fotos:
 *   1. Ninguna foto puede repetirse en dos tarjetas.
 *   2. Toda foto declarada tiene que existir en public/.
 *
 * Se importa el modulo de verdad (Node borra los tipos al vuelo), asi que
 * comprueba VALORES y no el formato del archivo.
 */

const RAIZ = path.join(import.meta.dirname, '..', '..')
const entradas = () => Object.values(FOTOS_SERVICIOS)

test('ninguna foto se repite en dos tarjetas', () => {
  const porSrc = new Map()
  for (const f of entradas()) {
    if (f.pendiente || !f.src) continue
    if (!porSrc.has(f.src)) porSrc.set(f.src, [])
    porSrc.get(f.src).push(f.slot)
  }
  const repetidas = [...porSrc.entries()]
    .filter(([, s]) => s.length > 1)
    .map(([src, s]) => `${src} en ${s.join(', ')}`)
  assert.deepEqual(repetidas, [], `Fotos repetidas: ${repetidas.join(' · ')}`)
})

test('toda foto declarada existe en public/', () => {
  const faltan = []
  for (const f of entradas()) {
    if (f.pendiente) continue
    for (const ruta of [f.src, f.webp]) {
      if (!ruta) { faltan.push(`${f.slot}: ruta vacia pero no esta pendiente`); continue }
      if (!fs.existsSync(path.join(RAIZ, 'public', ruta))) faltan.push(`${f.slot} -> ${ruta}`)
    }
  }
  assert.deepEqual(faltan, [], `Archivos declarados que no existen: ${faltan.join(' · ')}`)
})

/**
 * Una foto sin `alt` util es una foto que nadie puede verificar. Y sobre todo:
 * el alt es donde se nota si alguien puso stock, porque no puede describir una
 * operacion que no ocurrio.
 */
test('toda foto real lleva alt descriptivo', () => {
  const flojas = entradas()
    .filter((f) => !f.pendiente)
    .filter((f) => !f.alt || f.alt.trim().split(/\s+/).length < 5)
    .map((f) => f.slot)
  assert.deepEqual(flojas, [], `Alt demasiado corto en: ${flojas.join(', ')}`)
})

test('toda entrada pendiente dice que foto falta', () => {
  const mudas = entradas()
    .filter((f) => f.pendiente)
    .filter((f) => !f.queFalta || f.queFalta.trim().length < 20)
    .map((f) => f.slot)
  assert.deepEqual(mudas, [], `Sin descripcion de lo que falta: ${mudas.join(', ')}`)
})

test('los seis slots del encargo estan declarados', () => {
  const esperados = [
    'control-de-mosquitos', 'control-de-cucarachas', 'control-de-roedores',
    'control-de-termitas', 'control-de-chinches', 'fumigacion-comercial',
  ]
  const faltan = esperados.filter((s) => !FOTOS_SERVICIOS[s])
  assert.deepEqual(faltan, [], `Faltan slots: ${faltan.join(', ')}`)
})
