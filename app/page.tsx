import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="px-6 py-8 space-y-16">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  )
}
