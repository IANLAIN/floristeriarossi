import { useMemo } from 'react'
import type { CategoryWithCount } from '../../hooks/useCatalogFilters'
import type { FilterValue } from '../../types/catalog'

export type { FilterValue }

interface CategoryFilterProps {
  categories: CategoryWithCount[]
  totalCount: number
  activeCategory: FilterValue
  onChange: (value: FilterValue) => void
}

interface FilterOption {
  id: FilterValue
  label: string
  count: number
}

function CategoryFilter({
  categories,
  totalCount,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  const options = useMemo<FilterOption[]>(
    () => [{ id: 'all', label: 'Todos', count: totalCount }, ...categories],
    [categories, totalCount],
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
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:px-4 sm:py-2 sm:text-sm ${
              isActive
                ? 'border-primary bg-primary text-white shadow-soft'
                : 'border-primary/15 bg-white text-primary hover:border-primary/30 hover:bg-primary/5'
            }`}
          >
            <span>{option.label}</span>
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] leading-none sm:text-[11px] ${
                isActive ? 'bg-white/20 text-white' : 'bg-primary-soft text-primary-dark'
              }`}
            >
              {option.count}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
