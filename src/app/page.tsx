import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import About from '@/components/About'
import Pillars from '@/components/Pillars'
import Services from '@/components/Services'
import Differential from '@/components/Differential'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'
import CtaBanner from '@/components/CtaBanner'
import Contact from '@/components/Contact'
import RevealObserver from '@/components/RevealObserver'

export default function Home() {
  return (
    <>
      <RevealObserver />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Pillars />
        <Services />
        <Differential />
        <HowItWorks />
        <Testimonials />
        <CtaBanner />
      </main>
      <Contact />
    </>
  )
}
