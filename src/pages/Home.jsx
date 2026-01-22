import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Expertise from '../components/Expertise'
import Values from '../components/Values'
import Testimonials from '../components/Testimonials'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
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
  )
}
