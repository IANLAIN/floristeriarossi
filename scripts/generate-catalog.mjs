#!/usr/bin/env node
/**
 * generate-catalog.mjs
 * Escanea public/assets/images/<slug>/ y genera src/constants/data.ts
 * con las categorías, el listado de productos y los datos de contacto.
 *
 * Regenera el catálogo tras copiar imágenes:  npm run assets:generate
 */
import { readdirSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'

const IMAGES_DIR = 'public/assets/images'
const OUT_FILE = 'src/constants/data.ts'

const CATEGORY_META = [
  { slug: 'bouquets', label: 'Bouquets', base: 'Bouquet', order: 0 },
  { slug: 'engalanados', label: 'Engalanados', base: 'Engalanado', order: 1 },
  { slug: 'fruteros', label: 'Fruteros', base: 'Frutero', order: 2 },
  { slug: 'funebres', label: 'Fúnebres', base: 'Arreglo Fúnebre', order: 3 },
  {
    slug: 'funebres-en-piana',
    label: 'Fúnebres en Piña',
    base: 'Arreglo en Piña',
    order: 4,
  },
  { slug: 'toda-ocasion', label: 'Toda Ocasión', base: 'Diseño', order: 5 },
]

const CONTACT = {
  whatsapp: '573205851765',
  whatsappDisplay: '+57 320 5851765',
  instagram: 'https://www.instagram.com/floristeriarossi/',
  instagramHandle: '@floristeriarossi',
  address: 'Carrera 3 #10-57 Local 2 Cartago, Valle',
  hours: [
    'Lunes a Sábado: 8:00 AM a 12:00 M y 2:00 PM a 6:00 PM',
    'Domingos: 8:30 AM a 12:00 M',
  ],
}

const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i

function listImageFiles(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort((a, b) => a.localeCompare(b))
}

const products = []
const categories = []

for (const meta of CATEGORY_META) {
  const dir = join(IMAGES_DIR, meta.slug)
  const files = listImageFiles(dir)

  categories.push({ id: meta.slug, label: meta.label })

  files.forEach((file, index) => {
    const num = String(index + 1).padStart(2, '0')
    products.push({
      id: `${meta.slug}-${num}`,
      name: `${meta.base} ${num}`,
      image: `/assets/images/${meta.slug}/${file}`,
      categoryId: meta.slug,
    })
  })
}

function indent(value, spaces) {
  const prefix = ' '.repeat(spaces)
  return JSON.stringify(value, null, 2)
    .split('\n')
    .map((line, i) => (i === 0 ? line : `${prefix}${line}`))
    .join('\n')
}

function buildFile() {
  const categoryLines = categories
    .map((c, i) => `  ${JSON.stringify(c)}${i < categories.length - 1 ? ',' : ''}`)
    .join('\n')

  const productLines = products
    .map((p, i) => `  ${indent(p, 2)}${i < products.length - 1 ? ',' : ''}`)
    .join('\n')

  return `// Archivo generado automáticamente por scripts/generate-catalog.mjs.
// NO EDITAR A MANO. Regenera con: npm run assets:generate
import type { Category, ContactInfo, Product } from '../types/catalog'

export const CONTACT: ContactInfo = {
  whatsapp: ${JSON.stringify(CONTACT.whatsapp)},
  whatsappDisplay: ${JSON.stringify(CONTACT.whatsappDisplay)},
  instagram: ${JSON.stringify(CONTACT.instagram)},
  instagramHandle: ${JSON.stringify(CONTACT.instagramHandle)},
  address: ${JSON.stringify(CONTACT.address)},
  hours: ${indent(CONTACT.hours, 2)},
}

export const CATEGORIES: Category[] = [
${categoryLines}
]

export const PRODUCTS: Product[] = [
${productLines}
]
`
}

mkdirSync(dirname(OUT_FILE), { recursive: true })
writeFileSync(OUT_FILE, buildFile())
console.log(`✅ Generado ${OUT_FILE}: ${products.length} productos, ${categories.length} categorías.`)
