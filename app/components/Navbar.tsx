"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre mí", href: "#about" },
  { name: "Servicios", href: "#services" },
  { name: "Proyectos", href: "#projects" },
  { name: "Proceso", href: "#process" },
  { name: "Testimonios", href: "#testimonials" },
  { name: "Contacto", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()

  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <motion.div
          style={{ opacity: navbarOpacity }}
          className="bg-white/10 backdrop-blur-md border border-gray-400/50 rounded-3xl shadow-2xl shadow-black/10"
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => scrollToSection("#hero")}
              >
                <motion.div
                  className="relative w-10 h-10 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center overflow-hidden"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Code className="w-5 h-5 text-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <motion.span
                  className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent sm:inline"
                  whileHover={{ scale: 1.05 }}
                >
                  Agustín
                </motion.span>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center">
                <div className="flex items-center space-x-1 bg-white/5 rounded-2xl p-1 border border-white/10">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                        activeSection === item.href.substring(1) ? "text-white" : "text-gray-700 hover:text-gray-900"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-lg"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-xl opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden lg:block">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="relative bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-6 py-2 rounded-2xl font-semibold border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  >
                    <span className="relative z-10">Contactar</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white/20 transition-all duration-300" aria-label="Abrir menu"
                >
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Overlay - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : -20,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-x-4 top-24 z-40 lg:hidden flex justify-center"
      >
        <div className="bg-white/95 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl shadow-black/20 overflow-hidden w-full max-w-sm">
          <div className="p-6 space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -20,
                }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.05 : 0,
                }}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{
                duration: 0.3,
                delay: isOpen ? navItems.length * 0.05 : 0,
              }}
              className="pt-4 border-t border-gray-200"
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-2xl font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactar
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Overlay Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
    </>
  )
}
