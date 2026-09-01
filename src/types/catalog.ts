export type CategoryId =
  | 'bouquets'
  | 'engalanados'
  | 'fruteros'
  | 'funebres'
  | 'funebres-en-piana'
  | 'toda-ocasion'

export interface Category {
  id: CategoryId
  label: string
}

export interface Product {
  id: string
  name: string
  image: string
  categoryId: CategoryId
}

export interface ContactInfo {
  whatsapp: string
  whatsappDisplay: string
  instagram: string
  instagramHandle: string
  address: string
  hours: string[]
}

/** Categoría activa en el filtro: una categoría concreta o 'all' (todo el catálogo). */
export type FilterValue = CategoryId | 'all'
