import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Experience from '../components/Experience'
import FeaturedProjects from '../components/FeaturedProjects'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Expertise />
        <FeaturedProjects />
        <Experience />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
