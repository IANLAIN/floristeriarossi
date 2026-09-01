import { Flower2 } from 'lucide-react'

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/20 bg-white/60 px-6 py-16 text-center">
      <Flower2 className="h-10 w-10 text-secondary-dark" />
      <h3 className="mt-4 font-serif text-xl text-primary">Próximamente</h3>
      <p className="mt-1 max-w-sm text-neutral-500">
        Estamos preparando nuevos diseños para esta categoría.
      </p>
    </div>
  )
}

export default EmptyState
