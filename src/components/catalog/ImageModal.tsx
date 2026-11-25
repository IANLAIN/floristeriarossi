import { useEffect, useRef, type TouchEvent } from 'react'
import { ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'
import type { Product } from '../../types/catalog'
import { assetUrl } from '../../utils/assets'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import Button, { getButtonClasses } from '../ui/Button'

interface ImageModalProps {
  product: Product | null
  currentIndex: number
  totalCount: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

function ImageModal({
  product,
  currentIndex,
  totalCount,
  onClose,
  onPrevious,
  onNext,
}: ImageModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const touchStartXRef = useRef<number | null>(null)

  const isOpen = Boolean(product)

  useEffect(() => {
    if (!isOpen) return

    const previousFocusedElement = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    return () => {
      previousFocusedElement?.focus?.()
    }
  }, [isOpen])

  if (!product) return null

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || totalCount <= 1) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartXRef.current
    const deltaX = endX - touchStartXRef.current
    touchStartXRef.current = null

    if (Math.abs(deltaX) < 45) return
    if (deltaX < 0) {
      onNext()
    } else {
      onPrevious()
    }
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary-dark/92 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Vista completa de ${product.name}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="pointer-events-none absolute inset-x-3 top-3 z-10 flex items-center justify-between sm:inset-x-5 sm:top-5">
        <span className="rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          {currentIndex + 1} / {totalCount}
        </span>
        <Button
          ref={closeButtonRef}
          type="button"
          variant="secondary"
          size="sm"
          onClick={onClose}
          className="pointer-events-auto h-10 w-10 rounded-full p-0 shadow-lg sm:h-11 sm:w-11"
          aria-label="Cerrar imagen ampliada"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {totalCount > 1 && (
        <>
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Ver arreglo anterior"
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-5 sm:h-11 sm:w-11"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Ver siguiente arreglo"
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/65 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:h-11 sm:w-11"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </>
      )}

      <img
        key={product.id}
        src={assetUrl(product.image)}
        alt={product.name}
        decoding="async"
        className="h-auto max-h-[70dvh] w-auto max-w-[calc(100vw-4.5rem)] rounded-xl object-contain shadow-2xl sm:max-h-[76dvh] sm:max-w-[80vw]"
      />

      <div className="mt-3 flex w-full max-w-md flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/95 px-4 py-2.5 text-left shadow-lg sm:mt-4 sm:px-5 sm:py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-serif text-sm font-semibold text-primary-dark sm:text-base">
            {product.name}
          </p>
        </div>
        <a
          href={buildWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses({
            variant: 'primary',
            size: 'sm',
            className: 'shrink-0 px-3.5 py-2 text-xs sm:px-4 sm:text-sm',
          })}
        >
          <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          Pedir este arreglo
        </a>
      </div>
    </div>
  )
}

export default ImageModal
