import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Moon, Sun } from 'lucide-react'
import { useTheme } from '../App'
import ShelfTabs from '../components/shelf/ShelfTabs'
import SearchBar from '../components/shelf/SearchBar'
import FilterTags from '../components/shelf/FilterTags'
import MediaGrid from '../components/shelf/MediaGrid'
import MediaModal from '../components/shelf/MediaModal'
import booksData from '../data/books.json'
import filmsData from '../data/films.json'
import tvData from '../data/tv.json'

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY
const CACHE_KEY = 'shelf-media-cache'
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

// Cache helpers
const getCache = () => {
  try {
    const cached = localStorage.getItem(CACHE_KEY)
    if (!cached) return null
    const { data, timestamp } = JSON.parse(cached)
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY)
      return null
    }
    return data
  } catch {
    return null
  }
}

const setCache = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
  } catch {
    // localStorage might be full or unavailable
  }
}

export default function Shelf() {
  const { darkMode, toggleDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState('films')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [mediaMetadata, setMediaMetadata] = useState(() => getCache() || {})
  const [selectedItem, setSelectedItem] = useState(null)

  // Fetch TMDB metadata for films and TV shows (parallelized)
  useEffect(() => {
    if (!TMDB_API_KEY) return

    const fetchTMDBMetadata = async () => {
      const allMedia = [...filmsData, ...tvData]
      const itemsToFetch = allMedia.filter(
        (item) => item.tmdbId && !mediaMetadata[`tmdb-${item.tmdbId}`]
      )

      if (itemsToFetch.length === 0) return

      const promises = itemsToFetch.map(async (item) => {
        try {
          const isTV = tvData.some((tv) => tv.tmdbId === item.tmdbId)
          const endpoint = isTV ? 'tv' : 'movie'

          const res = await fetch(
            `https://api.themoviedb.org/3/${endpoint}/${item.tmdbId}?api_key=${TMDB_API_KEY}`
          )
          if (res.ok) {
            const data = await res.json()
            const releaseDate = isTV ? data.first_air_date : data.release_date
            return {
              key: `tmdb-${item.tmdbId}`,
              value: {
                posterPath: data.poster_path,
                description: data.overview,
                releaseYear: releaseDate ? releaseDate.split('-')[0] : null,
              },
            }
          }
        } catch (err) {
          console.error(`Failed to fetch metadata for ${item.title}:`, err)
        }
        return null
      })

      const results = await Promise.all(promises)
      const metadata = {}
      results.forEach((result) => {
        if (result) metadata[result.key] = result.value
      })

      if (Object.keys(metadata).length > 0) {
        setMediaMetadata((prev) => {
          const updated = { ...prev, ...metadata }
          setCache(updated)
          return updated
        })
      }
    }

    fetchTMDBMetadata()
  }, [])

  // Fetch Open Library metadata for books (parallelized)
  useEffect(() => {
    const fetchBookMetadata = async () => {
      const booksToFetch = booksData.filter(
        (book) => book.isbn && !mediaMetadata[`isbn-${book.isbn}`]
      )

      if (booksToFetch.length === 0) return

      const promises = booksToFetch.map(async (book) => {
        try {
          const res = await fetch(
            `https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn}&format=json&jscmd=data`
          )
          if (res.ok) {
            const data = await res.json()
            const bookData = data[`ISBN:${book.isbn}`]
            if (bookData) {
              return {
                key: `isbn-${book.isbn}`,
                value: {
                  description: bookData.notes || bookData.excerpts?.[0]?.text || null,
                  subjects: bookData.subjects?.slice(0, 3).map((s) => s.name) || [],
                  numberOfPages: bookData.number_of_pages,
                  publishDate: bookData.publish_date,
                },
              }
            }
          }
        } catch (err) {
          console.error(`Failed to fetch metadata for ${book.title}:`, err)
        }
        return null
      })

      const results = await Promise.all(promises)
      const metadata = {}
      results.forEach((result) => {
        if (result) metadata[result.key] = result.value
      })

      if (Object.keys(metadata).length > 0) {
        setMediaMetadata((prev) => {
          const updated = { ...prev, ...metadata }
          setCache(updated)
          return updated
        })
      }
    }

    fetchBookMetadata()
  }, [])

  // Get current data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case 'books':
        return booksData
      case 'films':
        return filmsData
      case 'tv':
        return tvData
      default:
        return []
    }
  }

  const currentData = getCurrentData()

  // Get type for MediaCard
  const getMediaType = () => {
    switch (activeTab) {
      case 'books':
        return 'book'
      case 'films':
        return 'film'
      case 'tv':
        return 'tv'
      default:
        return 'book'
    }
  }

  // Get poster paths for MediaGrid (extract from metadata)
  const posterPaths = useMemo(() => {
    const paths = {}
    Object.entries(mediaMetadata).forEach(([key, value]) => {
      if (key.startsWith('tmdb-') && value.posterPath) {
        const tmdbId = key.replace('tmdb-', '')
        paths[tmdbId] = value.posterPath
      }
    })
    return paths
  }, [mediaMetadata])

  // Get metadata for selected item
  const getSelectedItemMetadata = () => {
    if (!selectedItem) return null
    if (selectedItem.tmdbId) {
      return mediaMetadata[`tmdb-${selectedItem.tmdbId}`]
    }
    if (selectedItem.isbn) {
      return mediaMetadata[`isbn-${selectedItem.isbn}`]
    }
    return null
  }

  // Filter items based on search and filter
  const filteredItems = useMemo(() => {
    let items = currentData

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      items = items.filter((item) => {
        const title = item.title?.toLowerCase() || ''
        const creator =
          (item.author || item.director || item.creator)?.toLowerCase() || ''
        return title.includes(query) || creator.includes(query)
      })
    }

    // Apply filter
    if (activeFilter !== 'all') {
      if (activeFilter === 'life-changing') {
        items = items.filter((item) => item.lifeChanging)
      } else if (activeFilter === 'liked') {
        items = items.filter((item) => item.liked)
      }
    }

    return items
  }, [currentData, searchQuery, activeFilter, activeTab])

  // Reset search and filter when switching tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSearchQuery('')
    setActiveFilter('all')
  }

  // Handle item click to open modal
  const handleItemClick = (item) => {
    setSelectedItem(item)
  }

  // Close modal
  const handleCloseModal = () => {
    setSelectedItem(null)
  }

  // Get item count label
  const getCountLabel = () => {
    const count = filteredItems.length
    const total = currentData.length
    const typeLabels = {
      books: { singular: 'book', plural: 'books' },
      films: { singular: 'film', plural: 'films' },
      tv: { singular: 'show', plural: 'shows' },
    }
    const { singular, plural } = typeLabels[activeTab] || { singular: 'item', plural: 'items' }
    const label = count === 1 ? singular : plural

    if (count === total) {
      return `${count} ${label}`
    }
    return `${count} of ${total} ${plural}`
  }

  // Get search placeholder
  const getSearchPlaceholder = () => {
    const placeholders = {
      books: 'Search books...',
      films: 'Search films...',
      tv: 'Search TV shows...',
    }
    return placeholders[activeTab] || 'Search...'
  }

  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-300">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-primary/90 dark:bg-primary-dark/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back link */}
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium text-text-secondary dark:text-text-light/70 hover:text-text-primary dark:hover:text-text-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </Link>

            {/* Page Title */}
            <h1 className="font-serif text-2xl sm:text-3xl font-medium">The Shelf</h1>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-text-light" />
              ) : (
                <Moon className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Description */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-l-4 border-yellow-500/70 pl-6 py-2 mb-10"
        >
          <p className="font-serif text-2xl text-text-primary dark:text-text-light/90 leading-relaxed">
            A curated collection of books, films, and TV shows that have shaped my thinking.
          </p>
          <p className="text-text-secondary dark:text-text-light/50 mt-1">
            Organized by year consumed, with personal ratings and notes.
          </p>
        </motion.div>

        {/* Tabs and Search Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6"
        >
          <ShelfTabs activeTab={activeTab} onTabChange={handleTabChange} />

          <div className="w-full sm:w-64">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder={getSearchPlaceholder()}
            />
          </div>
        </motion.div>

        {/* Filters and Count Row */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
        >
          <FilterTags
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <span className="text-sm text-text-secondary dark:text-text-light/50">
            {getCountLabel()}
          </span>
        </motion.div>

        {/* Content */}
        <MediaGrid
          items={filteredItems}
          type={getMediaType()}
          posterPaths={posterPaths}
          onItemClick={handleItemClick}
        />
      </main>

      {/* Modal */}
      <MediaModal
        item={selectedItem}
        type={getMediaType()}
        posterPath={selectedItem?.tmdbId ? posterPaths[selectedItem.tmdbId] : null}
        metadata={getSelectedItemMetadata()}
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
      />
    </div>
  )
}
