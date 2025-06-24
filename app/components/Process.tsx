"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { MessageCircle, Palette, Code, Rocket } from "lucide-react"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"

// Custom hook for animated counting
function useAnimatedCounter(end: number, duration: number = 2) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { duration })
      return controls.stop
    }
  }, [count, end, duration, isInView])

  return { ref, count: rounded }
}

const steps = [
  {
    icon: MessageCircle,
    title: "Conversamos",
    description: "Charlamos sobre tu proyecto, objetivos y necesidades específicas.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Palette,
    title: "Diseño",
    description: "Creo el diseño personalizado de tu sitio, adaptado a tu marca y audiencia.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Code,
    title: "Desarrollo",
    description: "Programo tu sitio web con las mejores tecnologías, rápido y optimizado.",
    color: "from-blue-500 to-violet-500",
  },
  {
    icon: Rocket,
    title: "Lanzamos",
    description: "Tu sitio web está listo y online. Incluye capacitación y soporte continuo.",
    color: "from-violet-500 to-blue-500",
  },
]

// Statistics data
const stats = [
  { number: 15, suffix: "+", label: "Proyectos completados" },
  { number: 100, suffix: "%", label: "Clientes satisfechos" },
  { number: -24, suffix: "h", label: "Tiempo de respuesta" },
  { number: 2, suffix: " años", label: "De experiencia" },
]

export default function Process() {
  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proceso{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              simple y efectivo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajar conmigo es fácil, rápido y 100% personalizado. Desde la idea hasta el lanzamiento.
          </p>
        </motion.div>

        {/* Animated Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          
          {stats.map((stat, index) => {
            const { ref, count } = useAnimatedCounter(stat.number, 2 + index * 0.2)
            
            return (
              <div key={index} ref={ref} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  <motion.span>{count}</motion.span>
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            )
          })}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => {
            const { ref: stepRef, count: stepCount } = useAnimatedCounter(index + 1, 1)
            
            // Define shadow colors based on step
            const getShadowClass = (stepIndex: number) => {
              switch(stepIndex) {
                case 0: return "shadow-2xl shadow-blue-500 hover:shadow-xl hover:shadow-blue-900/70"
                case 1: return "shadow-2xl shadow-violet-500 hover:shadow-xl hover:shadow-violet-900/70"
                case 2: return "shadow-2xl shadow-blue-500 hover:shadow-xl hover:shadow-blue-900/70"
                case 3: return "shadow-2xl shadow-violet-500 hover:shadow-xl hover:shadow-violet-900/70"
                default: return "shadow-2xl hover:shadow-xl"
              }
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-20"
              >
                <div className={`bg-white rounded-2xl p-8 transition-all duration-300 text-center h-full ${getShadowClass(index)}`}>
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-3xl hover:shadow-xl transition-shadow duration-300`}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div 
                      ref={stepRef}
                      className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                    >
                      <motion.span>{stepCount}</motion.span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>

                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para empezar?</h3>
            <p className="text-gray-600 mb-6">
              El primer paso es una conversación para hablar de tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Consulta gratuita
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Sin compromiso de contratación
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Respuesta en 24hs
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
