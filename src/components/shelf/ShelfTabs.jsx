import { motion } from 'framer-motion'
import { BookOpen, Film, Tv } from 'lucide-react'

const tabs = [
  { id: 'films', label: 'Films', icon: Film },
  { id: 'tv', label: 'TV', icon: Tv },
  { id: 'books', label: 'Books', icon: BookOpen },
]

export default function ShelfTabs({ activeTab, onTabChange }) {
  return (
    <div className="flex gap-1 p-1 bg-black/5 dark:bg-white/5 rounded-lg">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        const Icon = tab.icon

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? 'text-text-primary dark:text-text-light'
                : 'text-text-secondary dark:text-text-light/60 hover:text-text-primary dark:hover:text-text-light'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white dark:bg-white/10 rounded-md shadow-sm"
                transition={{ type: 'spring', duration: 0.4 }}
              />
            )}
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
