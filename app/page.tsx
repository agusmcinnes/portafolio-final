"use client"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Process from "./components/Process"
import WhyWebsite from "./components/WhyWebsite"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import WhatsAppButton from "./components/WhatsAppButton"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Projects />
      <Process />
      <WhyWebsite />
      <Testimonials />
      <Contact />
      <WhatsAppButton />
    </main>
  )
}
