import PageMetadata from './components/PageMetadata.jsx'
import { useState, useEffect, createContext, useContext, lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
const Projects = lazy(() => import('./pages/Projects'))
const Shelf = lazy(() => import('./pages/Shelf'))
import ScrollToTop from './components/ScrollToTop'
import Resume from './pages/Resume'

// Dark mode context
export const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode')
      if (saved !== null) return JSON.parse(saved)
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <PageMetadata />
          <Suspense fallback={<main className="min-h-screen px-6 pt-32" aria-live="polite">Loading…</main>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/shelf" element={<Shelf />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </MotionConfig>
    </ThemeContext.Provider>
  )
}

export default App
