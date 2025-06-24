"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
	Code2, 
	Rocket, 
	FileText, 
	Palette, 
	Zap, 
	Shield, 
	Smartphone,
	Target,
	TrendingUp,
	Settings,
	X,
	Sparkles
} from "lucide-react"

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


				{/* Custom Code Highlight Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-8 shadow-2xl max-w-5xl mx-auto mb-16 relative overflow-hidden"
				>
					{/* Background pattern */}
					<div className="absolute inset-0 bg-black/10 opacity-30"></div>
					<div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
					<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

					<div className="relative z-10">
						<div className="text-center mb-8">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								transition={{ duration: 0.6, delay: 0.3 }}
								className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
							>
								<Code2 className="w-10 h-10 text-white" />
							</motion.div>
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
								100% Código Personalizado
							</h3>
							<p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
								Desarrollo cada sitio web desde cero usando{" "}
								<strong>código puro</strong>. Sin WordPress, sin plantillas, sin
								limitaciones.
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
							>
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
									<Code2 className="w-6 h-6 text-white" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">React</h4>
								<p className="text-blue-100 text-sm">
									Interfaces dinámicas y componentes reutilizables
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.5 }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
							>
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
									<Rocket className="w-6 h-6 text-white" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">Next.js</h4>
								<p className="text-blue-100 text-sm">
									SEO optimizado y rendimiento superior
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
							>
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
									<FileText className="w-6 h-6 text-white" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">TypeScript</h4>
								<p className="text-blue-100 text-sm">
									Código más seguro y mantenible
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.7 }}
								className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
							>
								<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
									<Palette className="w-6 h-6 text-white" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">Custom</h4>
								<p className="text-blue-100 text-sm">
									Diseño único adaptado a tu marca
								</p>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.8 }}
							className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
						>
							<div className="flex items-center justify-center gap-4 mb-4">
								<div className="text-center">
									<h4 className="text-xl font-bold text-white">
										Sin Limitaciones
									</h4>
									<p className="text-blue-100">
										No uso WordPress ni plantillas predefinidas
									</p>
								</div>
							</div>
							<div className="grid md:grid-cols-3 gap-4 text-center">
								<div className="bg-white/5 rounded-xl p-4">
									<Target className="w-6 h-6 text-white mx-auto mb-2" />
									<p className="text-white font-semibold">
										Personalización Total
									</p>
									<p className="text-blue-100 text-sm mt-1">
										Cada línea de código pensada para tu negocio
									</p>
								</div>
								<div className="bg-white/5 rounded-xl p-4">
									<TrendingUp className="w-6 h-6 text-white mx-auto mb-2" />
									<p className="text-white font-semibold">Máximo Rendimiento</p>
									<p className="text-blue-100 text-sm mt-1">
										Optimizado para velocidad y SEO
									</p>
								</div>
								<div className="bg-white/5 rounded-xl p-4">
									<Settings className="w-6 h-6 text-white mx-auto mb-2" />
									<p className="text-white font-semibold">Escalabilidad</p>
									<p className="text-blue-100 text-sm mt-1">
										Crece junto con tu empresa
									</p>
								</div>
							</div>
						</motion.div>
					</div>
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
								<Zap className="w-8 h-8 text-white" />
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
								<Shield className="w-8 h-8 text-white" />
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
								<Smartphone className="w-8 h-8 text-white" />
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
