import { useCatalogFilters } from '../../hooks/useCatalogFilters'
import { useImageLightbox } from '../../hooks/useImageLightbox'
import SectionHeading from '../common/SectionHeading'
import CategoryFilter from './CategoryFilter'
import CatalogGrid from './CatalogGrid'
import ImageModal from './ImageModal'

function CatalogSection() {
  const { categories, activeCategory, filteredProducts, activeCategoryLabel, setActiveCategory } =
    useCatalogFilters()
  const { selectedImage, openImage, closeImage } = useImageLightbox()

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
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <p className="mt-3.5 text-center text-xs text-neutral-500 sm:mt-4 sm:text-sm">
        {activeCategoryLabel} · {filteredProducts.length}{' '}
        {filteredProducts.length === 1 ? 'diseño' : 'diseños'}
      </p>

      <div className="mt-5 sm:mt-6">
        <CatalogGrid products={filteredProducts} onImageClick={openImage} />
      </div>
      <ImageModal image={selectedImage} onClose={closeImage} />
    </section>
  )
}

export default CatalogSection
