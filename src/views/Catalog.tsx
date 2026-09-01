import CatalogSection from '../components/catalog/CatalogSection'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Catalog() {
  useDocumentTitle('Floristería Rossi - Catálogo')

  return <CatalogSection />
}

export default Catalog
