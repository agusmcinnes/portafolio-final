"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Users, Trophy, Clock } from "lucide-react"
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

const benefits = [
  {
    icon: Users,
    title: "Más clientes encuentran tu negocio",
    description: "Tu sitio web trabaja 24/7 atrayendo nuevos clientes mientras dormís",
  },
  {
    icon: Trophy,
    title: "Te diferenciás de la competencia",
    description: "Un sitio profesional te posiciona como líder en tu sector",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Tus clientes pueden conocerte y contactarte en cualquier momento",
  },
]

export default function WhyWebsite() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-violet-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Por qué necesitás una web?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            En el mundo digital de hoy, no tener presencia online es como tener tu negocio cerrado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>

              <p className="text-lg opacity-90 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">El 97% de los consumidores buscan negocios online</h3>
            <p className="text-xl opacity-90 mb-6">Si no estás online, tus clientes van a encontrar a tu competencia</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <StatisticItem number={97} suffix="%" label="Buscan online" delay={0} />
              <StatisticItem number={75} suffix="%" label="Juzgan por el diseño" delay={0.2} />
              <StatisticItem number={3} suffix=" seg" label="Para decidir quedarse" delay={0.4} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Statistic item component with animated counter
function StatisticItem({ number, suffix, label, delay }: { 
  number: number; 
  suffix: string; 
  label: string; 
  delay: number; 
}) {
  const { ref, count } = useAnimatedCounter(number, 2 + delay)
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      ref={ref}
    >
      <div className="text-4xl font-bold mb-2">
        <motion.span>{count}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="opacity-90">{label}</div>
    </motion.div>
  )
}
