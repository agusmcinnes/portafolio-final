"use client"

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion"
import { MapPin, Heart, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

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

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sobre mí</h2>
            <div className="space-y-6">
              <p className="text-md lg:text-lg text-gray-600 leading-relaxed mr-4">
                  Soy Agustín, desarrollador web de Mar del Plata, especializado en crear sitios modernos, rápidos y a medida para potenciar cualquier negocio. Mi pasión por la tecnología y el diseño se traduce en soluciones digitales que no solo destacan visualmente, sino que también generan resultados concretos. Si querés llevar tu proyecto al próximo nivel, estoy listo para convertir tus ideas en experiencias digitales efectivas y memorables.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Mar del Plata, Argentina</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Heart className="w-5 h-5 text-violet-600" />
                  <span>Apasionado por el código</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span>Resultados rápidos</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <StatisticItem number={15} suffix="+" label="Proyectos" color="text-blue-600" delay={0} />
                <StatisticItem number={2} suffix="+" label="Años" color="text-violet-600" delay={0.2} />
                <StatisticItem number={100} suffix="%" label="Satisfacción" color="text-blue-600" delay={0.4} />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-violet-800 flex items-center justify-center">
                <Image
                  src="/images/agus_portfolio.webp"
                  alt="Agustín Mc Innes"
                  width={500}
                  height={500}
                  className="rounded-full object-cover border-4 border-violet-400/75 shadow-xl"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <span className="text-white text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Statistic item component with animated counter
function StatisticItem({ number, suffix, label, color, delay }: {
  number: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}) {
  const { ref, count } = useAnimatedCounter(number, 2 + delay)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      ref={ref}
      className="text-center"
    >
      <div className={`text-3xl font-bold ${color}`}>
        <motion.span>{count}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  )
}
