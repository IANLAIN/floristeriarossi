import { useEffect, useState } from 'react'
import type { Product } from '../types/catalog'

export interface LightboxImage {
  src: string
  alt: string
}

interface ImageLightboxState {
  selectedImage: LightboxImage | null
  openImage: (product: Product) => void
  closeImage: () => void
}

export function useImageLightbox(): ImageLightboxState {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null)

  useEffect(() => {
    if (!selectedImage) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    document.body.classList.add('overflow-hidden')
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.classList.remove('overflow-hidden')
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedImage])

  return {
    selectedImage,
    openImage: (product) => setSelectedImage({ src: product.image, alt: product.name }),
    closeImage: () => setSelectedImage(null),
  }
}
