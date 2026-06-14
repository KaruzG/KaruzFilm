import "./globals.css"
import type { Metadata } from "next"
import { anonymousPro } from "../fonts/fonts"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Photography portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <Nav></Nav>
      <body className={anonymousPro.className + " bg-background text-text-primary"}>
        {children}
      <Footer></Footer>
      </body>
    </html>
  )
}