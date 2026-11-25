import { Suspense, useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import PageLoader from './components/common/PageLoader'
import { checkForUpdates, lazyWithReload } from './utils/versionCheck'

const Home = lazyWithReload(() => import('./views/Home'))
const Catalog = lazyWithReload(() => import('./views/Catalog'))
const Contact = lazyWithReload(() => import('./views/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    void checkForUpdates()
  }, [pathname])

  return null
}

function App() {
  return (
    <MainLayout>
      <ScrollToTop />
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
