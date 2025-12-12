import { useState, useEffect, createContext, useContext } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Values from './components/Values'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Skills from './components/Skills'
import CTA from './components/CTA'
import Footer from './components/Footer'

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
      <div className="min-h-screen bg-primary dark:bg-primary-dark transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <Values />
          <Testimonials />
          <Experience />
          <Skills />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
