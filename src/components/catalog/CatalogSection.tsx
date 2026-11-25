import { Maximize2 } from 'lucide-react'
import { useCatalogFilters } from '../../hooks/useCatalogFilters'
import { useImageLightbox } from '../../hooks/useImageLightbox'
import SectionHeading from '../common/SectionHeading'
import CategoryFilter from './CategoryFilter'
import CatalogGrid from './CatalogGrid'
import ImageModal from './ImageModal'

function CatalogSection() {
  const {
    categories,
    totalProductsCount,
    activeCategory,
    filteredProducts,
    activeCategoryLabel,
    setActiveCategory,
  } = useCatalogFilters()
  const { selectedProduct, currentIndex, totalCount, openImage, closeImage, showPrevious, showNext } =
    useImageLightbox(filteredProducts)

  return (
    <section id="catalogo" className="container-page py-8 text-center sm:py-14 lg:py-16">
      <SectionHeading
        eyebrow="Catálogo"
        title="Nuestros diseños florales"
        subtitle="Explora nuestras creaciones y consulta tu favorito por WhatsApp."
      />

      <div className="mt-6 sm:mt-10">
        <CategoryFilter
          categories={categories}
          totalCount={totalProductsCount}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <p className="mt-3.5 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs text-neutral-500 sm:mt-4 sm:text-sm">
        <span>
          {activeCategoryLabel} · {filteredProducts.length}{' '}
          {filteredProducts.length === 1 ? 'diseño' : 'diseños'}
        </span>
        <span aria-hidden="true" className="text-neutral-300">
          ·
        </span>
        <span className="inline-flex items-center gap-1 text-primary/80">
          <Maximize2 className="h-3 w-3 shrink-0" aria-hidden="true" />
          Toca una foto para ver el arreglo completo
        </span>
      </p>

      <div className="mt-5 sm:mt-6">
        <CatalogGrid products={filteredProducts} onImageClick={openImage} />
      </div>
      <ImageModal
        product={selectedProduct}
        currentIndex={currentIndex}
        totalCount={totalCount}
        onClose={closeImage}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </section>
  )
}

export default CatalogSection
