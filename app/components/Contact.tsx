"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hablemos de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              tu proyecto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy listo para ayudarte a llevar tu negocio al siguiente nivel. Conversemos sin compromiso.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contactame directamente</h3>
              <p className="text-lg text-gray-600 mb-8">
                Prefiero hablar directamente contigo para entender mejor tu proyecto y darte la mejor solución.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center p-2 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">WhatsApp</p>
                  <a 
                    href="https://wa.me/5492235974152" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 hover:underline transition-colors duration-300"
                  >
                    +54 9 223 597 4152
                  </a>
                </div>
              </div>

              <div className="flex items-center p-2 rounded-xl">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <Link 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=agustinmcinnes@gmail.com&su=&body=" 
                    target="_blank"
                    className="text-gray-600 hover:text-blue-300 hover:underline transition-colors duration-300"
                  >
                    agustinmcinnes@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center p-2 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Mar del Plata, Argentina</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Seguime en redes</h4>
              <p className="text-gray-600 mb-4 text-sm">Hacé clic para ver mi trabajo y conectar</p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/agustinmcinnes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:shadow-pink-300"
                >
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/agustinmcinnes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300 hover:shadow-blue-300"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-violet-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">¿Preferís hablar por WhatsApp?</h4>
              <p className="text-gray-600 mb-4">Es la forma más rápida de resolver tus dudas y comenzar tu proyecto.</p>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open("https://wa.me/5492235974152", "_blank")}
              >
                Abrir WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
