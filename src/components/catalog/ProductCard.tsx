import { MessageCircle } from 'lucide-react'
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
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-2xl">
      <button
        type="button"
        onClick={() => onImageClick(product)}
        className="relative block aspect-square w-full overflow-hidden bg-background-alt text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-label={`Ampliar imagen de ${product.name}`}
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
      </button>
      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:gap-3 sm:p-5">
        <h3 className="text-center font-serif text-sm leading-snug text-primary sm:text-lg">
          {product.name}
        </h3>
        <a
          href={buildWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses({
            variant: 'primary',
            size: 'sm',
            className:
              'mt-auto w-full gap-1.5 px-2.5 py-2 text-[11px] min-[400px]:text-xs sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm',
          })}
        >
          <MessageCircle className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
          <span className="truncate">Consultar diseño</span>
        </a>
      </div>
    </article>
  )
}

export default ProductCard
