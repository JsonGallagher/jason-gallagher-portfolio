import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'

const OPEN_LIBRARY_COVER_URL = 'https://covers.openlibrary.org/b/isbn'
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w300'

export default function MediaCard({ item, type, index = 0, posterPath, onClick }) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const getImageUrl = () => {
    if (type === 'book' && item.isbn) {
      return `${OPEN_LIBRARY_COVER_URL}/${item.isbn}-M.jpg`
    }
    if ((type === 'film' || type === 'tv') && posterPath) {
      return `${TMDB_IMAGE_URL}${posterPath}`
    }
    return null
  }

  const getCreator = () => {
    if (type === 'book') return item.author
    if (type === 'film') return item.director
    if (type === 'tv') return item.creator
    return ''
  }

  const imageUrl = getImageUrl()
  const isLifeChanging = item.lifeChanging
  const isLiked = item.liked

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      aria-label={item.title}
      className="media-card group"
    >
      {/* Cover Image */}
      <span className="block relative aspect-[2/3] rounded overflow-hidden bg-black/5 dark:bg-white/5 mb-3">
        {imageUrl && !imageError ? (
          <>
            {!imageLoaded && (
              <span className="block absolute inset-0 animate-pulse bg-black/10 dark:bg-white/10" />
            )}
            <img
              src={imageUrl}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-opacity duration-150 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <span className="block w-full h-full flex items-center justify-center p-4">
            <span className="text-sm text-muted text-center line-clamp-3">
              {item.title}
            </span>
          </span>
        )}

        {/* Tag Badge */}
        {(isLifeChanging || isLiked) && (
          <span className="block absolute top-2 right-2">
            {isLifeChanging ? (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400/90 text-yellow-900">
                <Star className="w-4 h-4 fill-current" />
              </span>
            ) : (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-400/90 text-white">
                <Heart className="w-4 h-4 fill-current" />
              </span>
            )}
          </span>
        )}

      </span>

      {/* Info */}
      <span className="media-title block font-medium text-sm leading-tight mb-1 line-clamp-2">
        {item.title}
      </span>
      <span className="block text-xs text-muted">
        {getCreator()}
      </span>
    </motion.button>
  )
}
