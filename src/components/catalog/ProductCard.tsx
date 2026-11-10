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
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <button
        type="button"
        onClick={() => onImageClick(product)}
        className="relative aspect-square overflow-hidden bg-background-alt text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-label={`Ampliar imagen de ${product.name}`}
      >
        <img
          src={assetUrl(product.image)}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width="800"
          height="800"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-center font-serif text-lg text-primary">{product.name}</h3>
        <a
          href={buildWhatsAppLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={getButtonClasses({ variant: 'primary', size: 'sm', className: 'mt-auto w-full' })}
        >
          <MessageCircle className="h-4 w-4" />
          Consultar diseño
        </a>
      </div>
    </article>
  )
}

export default ProductCard
