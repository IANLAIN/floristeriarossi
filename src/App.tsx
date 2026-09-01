import { lazy, Suspense } from 'react'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/common/PageLoader'

const Hero = lazy(() => import('./components/Hero'))
const CatalogSection = lazy(() => import('./components/catalog/CatalogSection'))
const Footer = lazy(() => import('./components/layout/Footer'))

function App() {
  return (
    <MainLayout
      footer={
        <Suspense fallback={<PageLoader />}> 
          <Footer />
        </Suspense>
      }
    >
      <Suspense fallback={<PageLoader />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<PageLoader />}>
        <CatalogSection />
      </Suspense>
    </MainLayout>
  )
}

export default App
