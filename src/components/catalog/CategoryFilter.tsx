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
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((option) => {
        const isActive = activeCategory === option.id
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
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
