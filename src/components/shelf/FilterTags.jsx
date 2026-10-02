import { Star, Heart } from 'lucide-react'

const filters = [
  { id: 'all', label: 'All', icon: null },
  { id: 'life-changing', label: 'Life-Changing', icon: Star },
  { id: 'liked', label: 'Liked', icon: Heart },
]

export default function FilterTags({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.id
        const Icon = filter.icon

        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className="choice-button"
            aria-pressed={isActive}
          >
            {Icon && (
              <Icon
                className={`w-3.5 h-3.5 ${
                  filter.id === 'life-changing'
                    ? isActive
                      ? 'text-yellow-400'
                      : 'text-yellow-500'
                    : filter.id === 'liked'
                    ? isActive
                      ? 'text-rose-400'
                      : 'text-rose-500'
                    : ''
                }`}
                fill="currentColor"
              />
            )}
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}
