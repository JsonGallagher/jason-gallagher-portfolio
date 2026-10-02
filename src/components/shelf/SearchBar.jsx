import { Search, X } from 'lucide-react'

export default function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search collection"
        className="field pl-10 pr-12"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="icon-button absolute right-0 top-1/2 -translate-y-1/2"
        >
          <X className="w-4 h-4 text-muted" />
        </button>
      )}
    </div>
  )
}
