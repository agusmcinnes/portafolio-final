import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agustín Mc Innes - Programador de Software | Mar del Plata",
  description:
    "Programador web freelance especializado en crear sitios modernos, rápidos y optimizados que generan resultados para tu negocio. Landing pages, tiendas online y más.",
  keywords: "programador web, freelance, Mar del Plata, desarrollo web, landing pages, tiendas online, SEO",
  authors: [{ name: "Agustín Mc Innes" }],
  openGraph: {
    title: "Agustín Mc Innes - Programador Web Freelance",
    description: "Creo páginas web que generan resultados para tu negocio",
    type: "website",
    locale: "es_AR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
