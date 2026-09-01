import { LoaderCircle } from 'lucide-react'

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <LoaderCircle className="h-9 w-9 animate-spin text-primary" aria-label="Cargando" />
    </div>
  )
}

export default PageLoader
