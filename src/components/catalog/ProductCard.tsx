import { Maximize2, MessageCircle } from 'lucide-react'
import type { Product } from '../../types/catalog'
import { assetUrl } from '../../utils/assets'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import { getButtonClasses } from '../ui/Button'

interface ProductCardProps {
  product: Product
  onImageClick: (product: Product) => void
}

function ProductCard({ product, onImageClick }: ProductCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-primary/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-card sm:rounded-2xl">
      <button
        type="button"
        onClick={() => onImageClick(product)}
        className="relative block aspect-square w-full cursor-zoom-in overflow-hidden bg-background-alt text-left transition-transform active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-label={`Ver arreglo completo: ${product.name}`}
      >
        <img
          src={assetUrl(product.image)}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="800"
          height="800"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-black/45 px-2 py-1.5 text-[11px] font-medium text-white/95 shadow-sm backdrop-blur-[2px] transition-all duration-300 sm:bottom-2.5 sm:right-2.5 sm:px-2.5 sm:group-hover:bg-primary/90"
        >
          <Maximize2 className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          <span className="hidden sm:inline sm:max-w-0 sm:overflow-hidden sm:whitespace-nowrap sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:max-w-28 sm:group-hover:opacity-100">
            Ver completo
          </span>
        </span>
      </button>
      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-5">
        <button
          type="button"
          onClick={() => onImageClick(product)}
          className="text-center font-serif text-sm leading-snug text-primary transition-colors hover:text-primary-light focus:outline-none focus-visible:underline sm:text-lg"
        >
          {product.name}
        </button>
        <a
          href={buildWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses({
            variant: 'primary',
            size: 'sm',
            className:
              'mt-auto w-full gap-1.5 px-2.5 py-2 text-[11px] active:scale-[0.98] min-[400px]:text-xs sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm',
          })}
        >
          <MessageCircle className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          <span className="truncate">Pedir por WhatsApp</span>
        </a>
      </div>
    </article>
  )
}

export default ProductCard
