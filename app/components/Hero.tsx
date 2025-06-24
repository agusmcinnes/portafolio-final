"use client"

import { motion } from "framer-motion"
import { ArrowRight, GraduationCap, Briefcase, Award, Users, Rocket, TrendingUp, Code, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const statsCards = [
  {
    icon: GraduationCap,
    title: "Formación profesional",
    description: "Tecnicatura Universitaria en Programación UTN",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "Experiencia real",
    description: "2+ años programando",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Award,
    title: "Resultados comprobados",
    description: "15+ proyectos completados",
    color: "from-blue-500 to-violet-500",
  },
  {
    icon: Users,
    title: "Clientes satisfechos",
    description: "Siempre cumplo al 100% con los requisitos de mis clientes",
    color: "from-violet-500 to-blue-500",
  },
]

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 flex items-center justify-center px-4 relative overflow-hidden pt-20 w-full"
      id="hero"
    >
      {/* Enhanced Background decorations - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated geometric shapes - Smaller on mobile */}
        <motion.div
          className="absolute top-20 left-2 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-gradient-to-br from-blue-200/60 to-violet-200/60 rounded-3xl rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-2 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-gradient-to-br from-violet-200/60 to-blue-200/60 rounded-full"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 left-2 md:left-20 w-10 h-10 md:w-20 md:h-20 bg-gradient-to-br from-blue-300/50 to-violet-300/50 rounded-2xl rotate-12"
          animate={{
            rotate: [12, 60, 12],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Large gradient blobs - Adjusted positioning */}
        <motion.div
          className="absolute -top-40 -right-20 md:-right-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-blue-200/40 to-violet-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-20 md:-left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-violet-200/40 to-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        {/* Floating tech elements - Hidden on small screens */}
        <motion.div
          className="absolute top-32 right-16 md:right-32 text-blue-400/30 hidden md:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <TrendingUp className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-8 md:right-16 text-violet-400/30 hidden md:block"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-6 h-6 md:w-10 md:h-10" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-600 to-violet-600 mb-4 mt-20 leading-tight px-2 p-2">
            Agustín <br className="md:hidden" /> Mc Innes Alemany
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Code className="w-6 h-6 text-blue-600" />
            </motion.div>
            <p className="text-xl md:text-2xl font-bold text-gray-700">Programador Web</p>
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <Sparkles className="w-6 h-6 text-violet-600" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Value Proposition - Fixed Text Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8 px-2"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6 lg:leading-normal">
            Transforma tu negocio con un software que{" "}
            <motion.span
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                atraiga más clientes
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </motion.span>{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-2xl md:text-4xl"
            >
              🚀
            </motion.span>
          </h2>
        </motion.div>
        {/* Enhanced CTA Button - Most Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-20 px-2"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="relative bg-gradient-to-r from-blue-900 via-blue-600 to-violet-800 hover:from-violet-900 hover:via-blue-950 hover:to-blue-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl lg:text-2xl font-black rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform border-4 border-white/30 group overflow-hidden"
            >
              <motion.span
                className="flex items-center gap-2 md:gap-4 relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                🎯 Agendá una reunión gratis
                <ArrowRight className="w-5 h-5 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.span>

              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-800 via-violet-600 to-gray-600- rounded-3xl blur-lg opacity-40"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xs md:text-sm text-gray-500 mt-4 font-medium px-2"
          >
            💬 Respuesta en menos de 2 horas • Sin compromiso • 100% gratis
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 max-w-5xl mx-auto px-2"
        >
          {statsCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${card.color} rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <card.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 md:mb-2 leading-tight">{card.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 font-medium">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </section>
  )
}
