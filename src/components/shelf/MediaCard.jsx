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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      {/* Cover Image */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 mb-3">
        {imageUrl && !imageError ? (
          <>
            {!imageLoaded && (
              <div className="absolute inset-0 animate-pulse bg-black/10 dark:bg-white/10" />
            )}
            <img
              src={imageUrl}
              alt={item.title}
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4">
            <span className="text-sm text-text-secondary dark:text-text-light/50 text-center line-clamp-3">
              {item.title}
            </span>
          </div>
        )}

        {/* Tag Badge */}
        {(isLifeChanging || isLiked) && (
          <div className="absolute top-2 right-2">
            {isLifeChanging ? (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-yellow-400/90 text-yellow-900">
                <Star className="w-4 h-4 fill-current" />
              </span>
            ) : (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-400/90 text-white">
                <Heart className="w-4 h-4 fill-current" />
              </span>
            )}
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Info */}
      <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {item.title}
      </h3>
      <p className="text-xs text-text-secondary dark:text-text-light/60">
        {getCreator()}
      </p>
    </motion.div>
  )
}
