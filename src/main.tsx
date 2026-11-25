import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { getRouterBasename } from './utils/assets'
import { initVersionAutoRefresh } from './utils/versionCheck'
import './index.css'

initVersionAutoRefresh()

const rootElement = document.getElementById('root')
const routerBasename = getRouterBasename()

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz de la aplicación.')
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
