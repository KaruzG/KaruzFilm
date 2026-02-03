import "./globals.css"
import type { Metadata } from "next"
import { anonymousPro } from "../fonts/fonts"

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
      <body className={anonymousPro.className + " bg-background text-text-primary"}>
        {children}
      </body>
    </html>
  )
}