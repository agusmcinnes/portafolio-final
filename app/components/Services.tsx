"use client"

import { motion } from "framer-motion"
import { Globe, ShoppingCart, FileText, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
	{
		icon: Globe,
		title: "Landing Pages",
		description:
			"Una landing page es una página web enfocada en un solo objetivo: convertir visitantes en clientes potenciales o ventas. Se utiliza especialmente para campañas publicitarias, lanzamientos de productos o servicios y promociones especiales.",
		benefits: ["Más conversiones", "Carga ultra rápida", "Mobile-first", "Diseño personalizado para tu negocio"],
	},
	{
		icon: ShoppingCart,
		title: "Tiendas Online",
		description:
			"Olvidate de las plantillas genéricas: desarrollo tu tienda online desde cero, totalmente personalizada, rápida y lista para crecer junto a tu marca. Una tienda online profesional no solo te permite vender las 24 horas, sino que refleja la identidad y necesidades de tu negocio, ofreciendo una experiencia de compra única y fácil para tus clientes.",
		benefits: ["Ventas automáticas", "Gestión fácil", "Pagos seguros", "Seguridad y velocidad", "Diseño a medida"],
	},
	{
		icon: FileText,
		title: "Mantenimiento Web",
		description:
			"Mantené tu web siempre actualizada, segura y funcionando al 100%. No te preocupes más por problemas técnicos, caídas o páginas desactualizadas. Yo me encargo de todo, con mi servicio de mantenimiento tu sitio estará siempre listo para vender y atraer clientes, sin dolores de cabeza ni sorpresas inesperadas.",
		benefits: ["Actualización de contenidos", "Backups periódicos", "Soporte técnico", "Bases de datos"],
	},
	{
		icon: Zap,
		title: "Optimización SEO",
		description:
			"Mejoro la velocidad y posicionamiento de tu sitio web para que aparezca primero en Google. No basta solo con tener una web bonita, tambien debe estar diseñada para que le aparezca a la gente, de esta manera podras obtener más clientes y por lo tanto, obtener los resultados esperados.",
		benefits: ["Más visibilidad", "Carga 3x más rápida", "Mejor ranking", "Buenas prácticas"],
	},
]

export default function Services() {
	const scrollToContact = () => {
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<section className="py-20 bg-gray-50" id="services">
			<div className="max-w-6xl mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Servicios que{" "}
						<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
							impulsan
						</span>{" "}
						tu negocio
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Soluciones web completas diseñadas para hacer crecer tu empresa y
						generar resultados reales
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
						>
							<div className="flex items-center mb-6">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-2xl flex items-center justify-center mr-4">
									<service.icon className="w-8 h-8 text-blue-600" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900">
									{service.title}
								</h3>
							</div>

							<p className="text-gray-600 mb-6 leading-relaxed">
								{service.description}
							</p>

							<div className="space-y-2 mb-6">
								{service.benefits.map((benefit, idx) => (
									<div
										key={idx}
										className="flex items-center text-sm text-gray-600"
									>
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										{benefit}
									</div>
								))}
							</div>

							<Button
								variant="outline"
								className="w-full bg-gradient-to-r from-blue-50 to-violet-50 border-2 border-blue-200 text-blue-700 hover:from-blue-600 hover:to-violet-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out font-semibold"
								onClick={scrollToContact}
							>
								Consultar precio
								<ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
							</Button>
						</motion.div>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center"
				>
					<motion.div
						whileHover={{
							scale: 1.05
						}}
						whileTap={{ scale: 0.95 }}
						transition={{ type: "spring", stiffness: 400, damping: 10 }}
					>
						<Button
							onClick={scrollToContact}
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300"
						>
							Ver todos los servicios
							<motion.div
								className="ml-2"
								animate={{ x: [0, 4, 0] }}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
									ease: "easeInOut",
								}}
							>
								<ArrowRight className="w-5 h-5" />
							</motion.div>
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
