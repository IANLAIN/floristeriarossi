import { useCatalogFilters } from '../../hooks/useCatalogFilters'
import SectionHeading from '../common/SectionHeading'
import CategoryFilter from './CategoryFilter'
import CatalogGrid from './CatalogGrid'

function CatalogSection() {
  const { categories, activeCategory, filteredProducts, activeCategoryLabel, setActiveCategory } =
    useCatalogFilters()

  return (
    <section id="catalogo" className="container-page py-16 sm:py-20">
      <SectionHeading
        eyebrow="Catálogo"
        title="Nuestros diseños florales"
        subtitle="Explora nuestras creaciones y consulta tu favorito por WhatsApp."
      />

      <div className="mt-8 sm:mt-10">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <p className="mt-4 text-center text-sm text-neutral-500">
        {activeCategoryLabel} · {filteredProducts.length}{' '}
        {filteredProducts.length === 1 ? 'diseño' : 'diseños'}
      </p>

      <div className="mt-6">
        <CatalogGrid products={filteredProducts} />
      </div>
    </section>
  )
}

export default CatalogSection
