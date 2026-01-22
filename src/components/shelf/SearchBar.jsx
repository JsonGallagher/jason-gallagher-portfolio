import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary dark:text-text-light/50" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg text-sm placeholder:text-text-secondary dark:placeholder:text-text-light/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors"
        >
          <X className="w-4 h-4 text-text-secondary dark:text-text-light/50" />
        </button>
      )}
    </div>
  )
}
