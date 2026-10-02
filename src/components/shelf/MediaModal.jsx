import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Star, Heart } from 'lucide-react'

function StarRating({ rating, maxRating = 10 }) {
  const stars = []
  for (let i = 1; i <= maxRating; i++) {
    if (rating >= i) {
      // Full star
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
      )
    } else if (rating >= i - 0.5) {
      // Half star - use overlay technique
      stars.push(
        <div key={i} className="relative w-4 h-4">
          <Star className="absolute w-4 h-4 text-yellow-500/30" />
          <div className="absolute overflow-hidden w-1/2">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          </div>
        </div>
      )
    } else {
      // Empty star
      stars.push(
        <Star key={i} className="w-4 h-4 text-yellow-500/30" />
      )
    }
  }
  return (
    <div className="flex items-center gap-0.5">
      {stars}
      <span className="ml-2 text-sm text-muted">
        {rating}/{maxRating}
      </span>
    </div>
  )
}

const OPEN_LIBRARY_COVER_URL = 'https://covers.openlibrary.org/b/isbn'
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export default function MediaModal({ item, type, posterPath, metadata, isOpen, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!item) return null

  const getImageUrl = () => {
    if (type === 'book' && item.isbn) {
      return `${OPEN_LIBRARY_COVER_URL}/${item.isbn}-L.jpg`
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

  const getCreatorLabel = () => {
    if (type === 'book') return 'Author:'
    if (type === 'film') return 'Directed by:'
    if (type === 'tv') return 'Created by:'
    return ''
  }

  const imageUrl = getImageUrl()
  const isLifeChanging = item.lifeChanging
  const isLiked = item.liked
  const description = item.description || metadata?.description
  const userNotes = item.review

  // TODO: Re-enable when affiliate links are ready
  // const handleAffiliateClick = () => {
  //   if (item.affiliateUrl) {
  //     window.open(item.affiliateUrl, '_blank', 'noopener,noreferrer')
  //   }
  // }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-lg max-h-[85vh] overflow-auto surface"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="icon-button absolute top-4 right-4 z-10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              {/* Cover Image */}
              <div className="relative w-40 aspect-[2/3] rounded overflow-hidden bg-black/5 dark:bg-white/5 mb-6">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <span className="text-sm text-muted text-center">
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
              </div>

              {/* Title */}
              <h2 className="case-title mb-2">
                {item.title}
              </h2>

              {/* Creator */}
              <p className="text-sm text-muted mb-1">
                <span className="font-semibold">{getCreatorLabel()}</span> {getCreator()}
              </p>

              {/* Release Year - for films and TV only */}
              {(type === 'film' || type === 'tv') && metadata?.releaseYear && (
                <p className="text-sm text-muted mb-4">
                  <span className="font-semibold">Released:</span> {metadata.releaseYear}
                </p>
              )}

              {/* Maintain spacing for books */}
              {type === 'book' && <div className="mb-3" />}

              {/* Book subjects/tags from API */}
              {type === 'book' && metadata?.subjects?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {metadata.subjects.map((subject, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-black/5 dark:bg-white/10 rounded"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              )}

              {/* Description */}
              {description && (
                <p className="text-muted leading-relaxed mb-4">
                  {description}
                </p>
              )}

              {/* My Rating */}
              {item.rating != null && (
                <div className="border-t border-black/10 dark:border-white/10 pt-4 mt-4">
                  <p className="text-sm font-medium text-ink mb-2">
                    My Rating
                  </p>
                  <StarRating rating={item.rating} />
                </div>
              )}

              {/* User Notes */}
              {userNotes && (
                <div className={`${item.rating != null ? 'pt-4 mt-4' : 'border-t border-black/10 dark:border-white/10 pt-4 mt-4'}`}>
                  <p className="text-sm font-medium text-ink mb-2">
                    My Notes
                  </p>
                  <p className="text-text-primary dark:text-text-light leading-relaxed">
                    {userNotes}
                  </p>
                </div>
              )}

              {/* TODO: Re-enable affiliate links when ready
              {item.affiliateUrl && (
                <div className="mt-6">
                  <button
                    onClick={handleAffiliateClick}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-dark text-text-light dark:bg-text-light dark:text-primary-dark rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {type === 'book' ? 'Buy on Amazon' : type === 'tv' ? 'Watch Now' : 'Buy on Amazon'}
                  </button>
                  <p className="text-xs text-muted mt-2">
                    May be affiliate link
                  </p>
                </div>
              )}
              */}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
