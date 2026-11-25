import { useMemo, useState } from 'react'
import { CATEGORIES, PRODUCTS } from '../constants/data'
import type { Category, Product, FilterValue } from '../types/catalog'

export type { FilterValue }

export interface CategoryWithCount extends Category {
  count: number
}

export interface CatalogFilters {
  /** Categorías que tienen al menos un producto, con su cantidad total. */
  categories: CategoryWithCount[]
  /** Cantidad total de diseños en el catálogo. */
  totalProductsCount: number
  /** Categoría seleccionada ('all' = todo el catálogo). */
  activeCategory: FilterValue
  /** Productos filtrados según la categoría activa. */
  filteredProducts: Product[]
  /** Etiqueta legible de la categoría activa. */
  activeCategoryLabel: string
  /** Cambia la categoría activa. */
  setActiveCategory: (value: FilterValue) => void
}

/**
 * Hook de responsabilidad única: gestiona el estado del filtro por categoría
 * y calcula los productos visibles. Mantiene la UI libre de lógica compleja.
 */
export function useCatalogFilters(): CatalogFilters {
  const [activeCategory, setActiveCategory] = useState<FilterValue>('all')

  const categories = useMemo<CategoryWithCount[]>(
    () =>
      CATEGORIES.map((category) => ({
        ...category,
        count: PRODUCTS.filter((p) => p.categoryId === category.id).length,
      })).filter((category) => category.count > 0),
    [],
  )

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS
    return PRODUCTS.filter((product) => product.categoryId === activeCategory)
  }, [activeCategory])

  const activeCategoryLabel = useMemo(() => {
    if (activeCategory === 'all') return 'Todo el catálogo'
    return CATEGORIES.find((c) => c.id === activeCategory)?.label ?? 'Catálogo'
  }, [activeCategory])

  return {
    categories,
    totalProductsCount: PRODUCTS.length,
    activeCategory,
    filteredProducts,
    activeCategoryLabel,
    setActiveCategory,
  }
}
