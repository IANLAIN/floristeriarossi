import { useCallback, useEffect, useMemo, useState } from 'react'
import type { Product } from '../types/catalog'

interface ImageLightboxState {
  selectedProduct: Product | null
  currentIndex: number
  totalCount: number
  openImage: (product: Product) => void
  closeImage: () => void
  showPrevious: () => void
  showNext: () => void
}

export function useImageLightbox(products: Product[]): ImageLightboxState {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null)

  const currentIndex = useMemo(() => {
    if (!selectedProductId) return -1
    return products.findIndex((product) => product.id === selectedProductId)
  }, [products, selectedProductId])

  const selectedProduct = currentIndex >= 0 ? products[currentIndex] : null

  const closeImage = useCallback(() => {
    setSelectedProductId(null)
  }, [])

  const showPrevious = useCallback(() => {
    if (products.length <= 1 || currentIndex < 0) return
    const prevIndex = (currentIndex - 1 + products.length) % products.length
    setSelectedProductId(products[prevIndex].id)
  }, [currentIndex, products])

  const showNext = useCallback(() => {
    if (products.length <= 1 || currentIndex < 0) return
    const nextIndex = (currentIndex + 1) % products.length
    setSelectedProductId(products[nextIndex].id)
  }, [currentIndex, products])

  useEffect(() => {
    if (!selectedProduct) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeImage()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.classList.add('overflow-hidden')
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeImage, selectedProduct, showNext, showPrevious])

  return {
    selectedProduct,
    currentIndex,
    totalCount: products.length,
    openImage: (product) => setSelectedProductId(product.id),
    closeImage,
    showPrevious,
    showNext,
  }
}
