"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const technologies = [
	{
		name: "HTML",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-orange-500 to-red-500",
		description: "Estructura semántica",
	},
	{
		name: "CSS",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-blue-500 to-blue-600",
		description: "Estilos modernos",
	},
	{
		name: "JavaScript",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-yellow-400 to-yellow-500",
		description: "Interactividad dinámica",
	},
	{
		name: "TypeScript",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-blue-600 to-blue-700",
		description: "Código más seguro",
	},
	{
		name: "React",
		logo: "/placeholder.svg?height=60&width=60",
		color: "from-cyan-400 to-blue-500",
		description: "Interfaces modernas",
	},
	{
		name: "Next.js",
		logo: "/placeholder.svg?height=60&width=60",
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

				{/* Modern Technologies Grid */}
				<div className="relative mb-20">
					{/* Background decoration */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-violet-600/5 rounded-3xl blur-3xl"></div>
					
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
					>
						{technologies
							.filter(tech => ['React', 'Next.js', 'Tailwind CSS', 'Python', 'Django'].includes(tech.name))
							.map((tech, index) => (
								<motion.div
									key={tech.name}
									initial={{ opacity: 0, y: 20, scale: 0.9 }}
									whileInView={{ opacity: 1, y: 0, scale: 1 }}
									animate={{
										y: [0, -8, 0],
										rotateY: [0, 2, 0, -2, 0],
									}}
									transition={{ 
										duration: 0.6, 
										delay: index * 0.1,
										type: "spring",
										stiffness: 100,
										y: {
											duration: 3 + index * 0.5,
											repeat: Infinity,
											ease: "easeInOut",
										},
										rotateY: {
											duration: 4 + index * 0.3,
											repeat: Infinity,
											ease: "easeInOut",
										}
									}}
									whileHover={{ 
										scale: 1.1, 
										y: -12,
										rotateY: 8,
									}}
									viewport={{ once: true }}
									className="group relative"
								>
									{/* Glassmorphism card */}
									<div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-6 h-full border border-white/20 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden">
										{/* Animated background gradient */}
										<motion.div 
											className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10`}
											animate={{
												opacity: [0.02, 0.05, 0.02],
											}}
											transition={{
												duration: 2 + index * 0.5,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										></motion.div>
										
										{/* Floating orb decoration */}
										<motion.div 
											className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${tech.color} rounded-full blur-2xl opacity-30 group-hover:opacity-50`}
											animate={{
												scale: [1, 1.2, 1],
												opacity: [0.2, 0.4, 0.2],
											}}
											transition={{
												duration: 2.5 + index * 0.3,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										></motion.div>
										
										{/* Tech icon container */}
										<div className="relative flex flex-col items-center text-center">
											<motion.div 
												className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg relative overflow-hidden group-hover:shadow-xl`}
												animate={{
													scale: [1, 1.05, 1],
												}}
												transition={{ 
													scale: {
														duration: 2 + index * 0.5,
														repeat: Infinity,
														ease: "easeInOut",
													}
												}}
												whileHover={{ 
													scale: 1.15 
												}}
											>
												{/* Shimmer effect */}
												<motion.div 
													className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
													animate={{
														x: ['-100%', '100%'],
													}}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut",
														delay: index * 0.5,
													}}
												></motion.div>
												
												<Image
													src={tech.logo}
													alt={`${tech.name} logo`}
													width={28}
													height={28}
													className="filter brightness-0 invert relative z-10"
												/>
											</motion.div>

											{/* Tech name with modern typography */}
											<motion.h3 
												className="font-bold text-gray-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300"
												animate={{
													scale: [1, 1.02, 1],
												}}
												transition={{
													duration: 2.5 + index * 0.3,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											>
												{tech.name}
											</motion.h3>
											
											{/* Description with subtle animation */}
											<motion.p 
												className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
												animate={{
													opacity: [0.8, 1, 0.8],
												}}
												transition={{
													duration: 3 + index * 0.4,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											>
												{tech.description}
											</motion.p>

											{/* Animated bottom accent */}
											<motion.div 
												className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r ${tech.color} rounded-full group-hover:w-12`}
												animate={{
													width: ['0px', '24px', '0px'],
													opacity: [0.5, 1, 0.5],
												}}
												transition={{
													duration: 2.5 + index * 0.5,
													repeat: Infinity,
													ease: "easeInOut",
												}}
											></motion.div>
										</div>
									</div>

									{/* Outer glow effect */}
									<motion.div 
										className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 -z-10 scale-110`}
										animate={{
											opacity: [0.15, 0.25, 0.15],
											scale: [1.05, 1.15, 1.05],
										}}
										transition={{
											duration: 3 + index * 0.5,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									></motion.div>
								</motion.div>
							))}
					</motion.div>

					{/* Floating particles decoration */}
					<div className="absolute inset-0 pointer-events-none">
						{[...Array(8)].map((_, i) => (
							<motion.div
								key={i}
								className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
								style={{
									left: `${15 + i * 12}%`,
									top: `${20 + (i % 3) * 30}%`,
								}}
								animate={{
									y: [-15, 15, -15],
									x: [-5, 5, -5],
									opacity: [0.2, 0.8, 0.2],
									scale: [0.8, 1.5, 0.8],
								}}
								transition={{
									duration: 4 + i * 0.5,
									repeat: Infinity,
									ease: "easeInOut",
									delay: i * 0.3,
								}}
							/>
						))}
					</div>
				</div>

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
