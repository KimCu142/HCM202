import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './sections/Home'
import Ideology from './sections/Ideology'
import Practice from './sections/Practice'
import References from './sections/References'
import Quiz from './sections/Quiz'

const sectionOrder = ['home', 'ideology', 'practice', 'references'] as const

type SectionId = (typeof sectionOrder)[number]

const App = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id as SectionId)
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-40% 0px -40% 0px',
      },
    )

    sectionOrder.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (id: SectionId) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="flex flex-col gap-16">
        <Home />
        <Ideology />
        <Practice />
        <References />
        <Quiz />
      </main>
      <Footer />
    </div>
  )
}

export default App
