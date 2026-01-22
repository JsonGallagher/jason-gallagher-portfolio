import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function Essays() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center py-20"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 dark:bg-white/5 mb-6">
        <FileText className="w-8 h-8 text-text-secondary dark:text-text-light/50" />
      </div>
      <h3 className="font-serif text-2xl mb-3">Essays Coming Soon</h3>
      <p className="text-text-secondary dark:text-text-light/60 max-w-md mx-auto">
        A collection of essays and long-form writing on marketing, technology, and strategy.
      </p>
    </motion.div>
  )
}
