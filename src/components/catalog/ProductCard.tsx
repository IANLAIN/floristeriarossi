import { MessageCircle } from 'lucide-react'
import type { Product } from '../../types/catalog'
import { buildWhatsAppLink } from '../../utils/whatsapp'
import Button from '../ui/Button'

interface ProductCardProps {
  product: Product
  onImageClick: (product: Product) => void
}

function ProductCard({ product, onImageClick }: ProductCardProps) {
  const handleConsult = () => {
    window.open(buildWhatsAppLink(product.name), '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
      <button
        type="button"
        onClick={() => onImageClick(product)}
        className="relative aspect-square overflow-hidden bg-background-alt text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
        aria-label={`Ampliar imagen de ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-center font-serif text-lg text-primary">{product.name}</h3>
        <Button
          onClick={handleConsult}
          variant="primary"
          size="sm"
          className="mt-auto w-full"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar Diseño
        </Button>
      </div>
    </article>
  )
}

export default ProductCard
