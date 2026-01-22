import { motion } from 'framer-motion'
import MediaCard from './MediaCard'

export default function MediaGrid({ items, type, posterPaths = {}, onItemClick }) {
  // Group items by year, sorted newest first
  const groupedByYear = items.reduce((acc, item) => {
    const year = item.year || 'Unknown'
    if (!acc[year]) acc[year] = []
    acc[year].push(item)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => {
    if (a === 'Unknown') return 1
    if (b === 'Unknown') return -1
    return parseInt(b) - parseInt(a)
  })

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-secondary dark:text-text-light/60">
          No items found matching your search.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      {sortedYears.map((year) => (
        <motion.section
          key={year}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Year Header */}
          <h2 className="font-serif text-3xl font-semibold mb-6 pb-2 border-b border-black/10 dark:border-white/10">
            {year}
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
            {groupedByYear[year].map((item, idx) => (
              <MediaCard
                key={item.id}
                item={item}
                type={type}
                index={idx}
                posterPath={posterPaths[item.tmdbId]}
                onClick={() => onItemClick(item)}
              />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  )
}
