import { useMemo } from 'react'
import type { Category, FilterValue } from '../../types/catalog'

export type { FilterValue }

interface CategoryFilterProps {
  categories: Category[]
  activeCategory: FilterValue
  onChange: (value: FilterValue) => void
}

interface FilterOption {
  id: FilterValue
  label: string
}

function CategoryFilter({ categories, activeCategory, onChange }: CategoryFilterProps) {
  const options = useMemo<FilterOption[]>(
    () => [{ id: 'all', label: 'Todos' }, ...categories],
    [categories],
  )

  return (
    <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
      {options.map((option) => {
        const isActive = activeCategory === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 sm:py-2 sm:text-sm ${
              isActive
                ? 'bg-primary text-white shadow-soft'
                : 'bg-white text-primary hover:bg-primary/10'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
