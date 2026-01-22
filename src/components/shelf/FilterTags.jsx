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
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive
                ? 'bg-primary-dark text-text-light dark:bg-text-light dark:text-primary-dark'
                : 'bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/15'
            }`}
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
