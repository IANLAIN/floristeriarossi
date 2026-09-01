import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/common/PageLoader'

const Home = lazy(() => import('./views/Home'))
const Catalog = lazy(() => import('./views/Catalog'))
const Contact = lazy(() => import('./views/Contact'))
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
