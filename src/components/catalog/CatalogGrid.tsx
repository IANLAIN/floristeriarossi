import type { Product } from '../../types/catalog'
import EmptyState from '../common/EmptyState'
import ProductCard from './ProductCard'

interface CatalogGridProps {
  products: Product[]
}

function CatalogGrid({ products }: CatalogGridProps) {
  if (products.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default CatalogGrid
