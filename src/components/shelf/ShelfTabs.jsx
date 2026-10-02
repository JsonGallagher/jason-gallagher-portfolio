import { BookOpen, Film, Tv } from 'lucide-react'

const tabs = [
  { id: 'films', label: 'Films', icon: Film },
  { id: 'tv', label: 'TV', icon: Tv },
  { id: 'books', label: 'Books', icon: BookOpen },
]

export default function ShelfTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const Icon = tab.icon

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="choice-button"
            aria-pressed={isActive}
            aria-label={tab.label}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
