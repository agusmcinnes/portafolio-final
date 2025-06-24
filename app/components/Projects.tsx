"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"

const projects = [
	{
		title: "Limbip",
		description:
			"Limbip es una plataforma digital diseñada para facilitar la gestión educativa, conectando a docentes, alumnos y familias en un solo lugar. En este proyecto me encargué del desarrollo frontend, implementando una interfaz moderna, intuitiva y responsiva que garantiza una experiencia de usuario ágil y accesible desde cualquier dispositivo. Limbip permite optimizar la comunicación escolar, organizar tareas y centralizar información clave, ayudando a las instituciones educativas a digitalizar y simplificar su día a día.",
		images: [
			"/images/limbip.webp",
			"/images/limbip2.webp",
      "/images/limbip3.webp"
		],
		tags: ["Institucional", "React", "UI/UX"],
		demoUrl: "https://limbip.com/",
		codeUrl: "#",
	},
	{
		title: "Unicks Boosting",
		description:
			"Desarrollé la landing page oficial de Unicks, un servicio especializado en boosting para EA FC 25. Me encargué de todo el proceso: desde el diseño visual en Figma, la programación con Next.js, React y Tailwind CSS, hasta el despliegue en Vercel. El objetivo fue crear un sitio rápido, moderno y seguro, orientado a convertir visitantes en clientes. Implementé animaciones para destacar los servicios, optimización de imágenes y buenas prácticas de SEO. El resultado es una web intuitiva, responsive y lista para escalar, donde los usuarios pueden informarse y contactar fácilmente para adquirir el servicio de boosting.",
		images: [
			"/images/unicks.webp",
		],
		tags: ["Landing Page", "SEO", "Diseño web"],
		demoUrl: "https://www.unicksboosting.com/es",
		codeUrl: "https://github.com/agusmcinnes/landing-unicks",
	},
	{
		title: "Chatbot para influencer",
		description:
			"Desarrollé un chatbot personalizado para Jenny Samboni, influencer con más de 1,8 millones de seguidores en Instagram. El objetivo fue brindar atención instantánea, automatizar respuestas frecuentes y mejorar la experiencia de sus seguidoras, permitiendo a Jenny gestionar consultas y pedidos de manera mucho más eficiente. El proyecto incluyó integración con WhatsApp e Instagram, flujos conversacionales a medida y una interfaz fácil de escalar según las necesidades del equipo de Jenny. Este desarrollo permitió optimizar tiempos, aumentar la interacción con la comunidad y potenciar la presencia digital de una de las creadoras de contenido más influyentes de Latinoamérica.",
		images: ["/images/jennysamboni.webp"],
		tags: ["Blog", "CMS", "Optimización"],
		demoUrl: "https://www.instagram.com/jennysamboniz/?hl=es",
		codeUrl: "#",
	},
]

function ProjectCarousel({
	images,
	title,
}: {
	images: string[]
	title: string
}) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const nextImage = () => {
		setCurrentIndex((prev) => (prev + 1) % images.length)
	}

	const prevImage = () => {
		setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
	}

	const goToImage = (index: number) => {
		setCurrentIndex(index)
	}

	if (images.length === 1) {
		return (
			<motion.div
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.3 }}
				className="relative group w-full"
			>
				<div className="relative w-full aspect-[18/9] overflow-hidden rounded-2xl shadow-2xl shadow-blue-500 hover:shadow-xl hover:shadow-blue-900/70 transition-all duration-300">
					<Image
						src={images[0]}
						alt={title}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
				</div>
			</motion.div>
		)
	}

	return (
		<div className="relative group w-full">
			<div className="relative w-full aspect-[18/10] overflow-hidden rounded-2xl shadow-2xl shadow-blue-500 hover:shadow-xl hover:shadow-blue-900/70 transition-all duration-300">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ x: 300, opacity: 0, rotateY: 45 }}
						animate={{ x: 0, opacity: 1, rotateY: 0 }}
						exit={{ x: -300, opacity: 0, rotateY: -45 }}
						transition={{
							duration: 0.6,
							ease: [0.25, 0.8, 0.25, 1],
						}}
						className="relative w-full h-full"
					>
						<Image
							src={images[currentIndex]}
							alt={`${title} - Imagen ${currentIndex + 1}`}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
					</motion.div>
				</AnimatePresence>

				{/* Navigation Arrows */}
				<button
					onClick={prevImage}
					className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
				>
					<ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
				</button>

				<button
					onClick={nextImage}
					className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-1.5 md:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
				>
					<ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
				</button>
			</div>

			{/* Dots Indicator */}
			<div className="flex justify-center mt-3 md:mt-4 space-x-2">
				{images.map((_, index) => (
					<button
						key={index}
						onClick={() => goToImage(index)}
						className={`w-2 h-2 rounded-full transition-all duration-300 ${
							index === currentIndex
								? "bg-blue-600 w-6 md:w-8"
								: "bg-gray-300 hover:bg-gray-400"
						}`}
					/>
				))}
			</div>
		</div>
	)
}

export default function Projects() {
	return (
		<section className="py-20 bg-white" id="projects">
			<div className="max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Proyectos que{" "}
						<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
							generan resultados
						</span>
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Cada proyecto está diseñado para cumplir objetivos específicos y
						generar un impacto real en el negocio
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-1 gap-20">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className={`grid lg:grid-cols-2 gap-12 items-center ${
								index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
						>
							<div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
								<div className="space-y-6">
									<div>
										<h3 className="text-3xl font-bold text-gray-900 mb-4">
											{project.title}
										</h3>
										<p className="text-lg text-gray-600 leading-relaxed">
											{project.description}
										</p>
									</div>

									<div className="flex flex-wrap gap-4">
										{project.tags.map((tag, tagIndex) => (
											<span
												key={tagIndex}
												className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex gap-4">
										<Button
											variant="default"
											className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
											onClick={() => window.open(project.demoUrl, '_blank')}
										>
											<ExternalLink className="mr-2 w-4 h-4" />
											Ver
										</Button>
										{project.codeUrl.length > 2 ? (
											<Button
												variant="outline"
												className="border-gray-300"
												onClick={() => window.open(project.codeUrl, '_blank')}
											>
												<Github className="mr-2 w-4 h-4" />
												Ver código
											</Button>
										) : ""}
									</div>
								</div>
							</div>

							<div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
								<ProjectCarousel
									images={project.images}
									title={project.title}
								/>
							</div>
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
					<Button
						variant="outline"
						size="lg"
						className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
						onClick={() => window.open('https://github.com/agusmcinnes/', '_blank')}
					>
						Ver más proyectos
						<ExternalLink className="ml-2 w-5 h-5" />
					</Button>
				</motion.div>
			</div>
		</section>
	)
}
