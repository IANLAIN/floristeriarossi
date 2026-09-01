import { X } from 'lucide-react'
import type { LightboxImage } from '../../hooks/useImageLightbox'
import { assetUrl } from '../../utils/assets'
import Button from '../ui/Button'

interface ImageModalProps {
  image: LightboxImage | null
  onClose: () => void
}

function ImageModal({ image, onClose }: ImageModalProps) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-dark/90 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada de ${image.alt}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <Button
        type="button"
        variant="secondary"
        size="sm"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 h-11 w-11 rounded-full p-0"
        aria-label="Cerrar imagen ampliada"
      >
        <X className="h-5 w-5" />
      </Button>
      <img
        src={assetUrl(image.src)}
        alt={image.alt}
        decoding="async"
        className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
      />
    </div>
  )
}

export default ImageModal
