"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Rocio del valle",
    business: "RDV Uniformes",
    image: "/images/rodelvalle.webp",
    rating: 5,
    text: "Agustín transformó completamente mi negocio de uniformes. Desde que tengo mi tienda online, las ventas aumentaron un 300%. Su trabajo es impecable y siempre está disponible para ayudar.",
    result: "+300% en ventas",
  },
  {
    name: "Nicolás Renzella",
    business: "Unicks boosting",
    image: "/images/nick.webp",
    rating: 5,
    text: "Necesitaba una web profesional para mi servicio de boosting y Agustín superó todas mis expectativas. Ahora recibo consultas todos los días a través del sitio. Excelente profesional.",
    result: "+150% consultas",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              mis clientes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reales de negocios que confiaron en mi trabajo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-200" />

              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.business}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-lg">"{testimonial.text}"</p>

              <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{testimonial.result}</div>
                  <div className="text-sm text-gray-600">Resultado obtenido</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Querés ser el próximo caso de éxito?</h3>
            <p className="text-gray-600 mb-6">
              Únete a los negocios que ya están creciendo con una presencia digital profesional
            </p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                100% Satisfacción
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Resultados garantizados
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
