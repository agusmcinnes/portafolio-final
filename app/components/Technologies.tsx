"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
	{
		name: "React",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-cyan-400 to-blue-500",
		description: "Interfaces modernas",
	},
	{
		name: "Next.js",
		logo: "/images/nextjs_icon_dark.svg",
		color: "from-gray-800 to-black",
		description: "Framework completo",
	},
	{
		name: "Tailwind CSS",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-teal-400 to-cyan-500",
		description: "Diseño rápido",
	},
	{
		name: "Python",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-blue-500 to-yellow-400",
		description: "Backend potente",
	},
	{
		name: "Django",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-green-600 to-green-700",
		description: "Web framework",
	},
]

export default function Technologies() {
	return (
		<section
			className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
			id="technologies"
		>
			<div className="max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Utilizo las mejores{" "}
						<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
							tecnologías
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Manejo las mejores herramientas y tecnologías modernas para crear sitios
						web rápidos, seguros y escalables
					</p>
				</motion.div>

		
				{/* Additional Info Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto"
				>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
								whileHover={{ scale: 1.1, rotate: 360 }}
								transition={{ duration: 0.6 }}
							>
								<span className="text-2xl">⚡</span>
							</motion.div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Rendimiento
							</h3>
							<p className="text-gray-600">
								Sitios web ultra rápidos optimizados para Google
							</p>
						</div>

						<div>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
								whileHover={{ scale: 1.1, rotate: 360 }}
								transition={{ duration: 0.6 }}
							>
								<span className="text-2xl">🔒</span>
							</motion.div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Seguridad
							</h3>
							<p className="text-gray-600">
								Código limpio y seguro siguiendo las mejores prácticas
							</p>
						</div>

						<div>
							<motion.div
								className="w-16 h-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
								whileHover={{ scale: 1.1, rotate: 360 }}
								transition={{ duration: 0.6 }}
							>
								<span className="text-2xl">📱</span>
							</motion.div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								Responsive
							</h3>
							<p className="text-gray-600">
								Perfecto en todos los dispositivos y pantallas
							</p>
						</div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<p className="text-lg text-gray-600 mb-6">
						¿Necesitás un sitio web con estas tecnologías?
					</p>
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={() =>
							document.getElementById("contact")?.scrollIntoView({
								behavior: "smooth",
							})
						}
						className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
					>
						Hablemos de tu proyecto
					</motion.button>
				</motion.div>
			</div>
		</section>
	)
}
