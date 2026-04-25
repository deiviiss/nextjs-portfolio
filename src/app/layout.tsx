import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/dark-mode/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Hilera | Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack enfocado en procesamiento de datos y automatización. Construyo sistemas que integran frontend, backend y pipelines de datos para mejorar la operación de negocios.",
  keywords: [
    "desarrollador full stack",
    "procesamiento de datos",
    "automatización",
    "Next.js",
    "Python",
    "Pandas",
    "ETL",
    "MariaDB",
    "React",
    "Campeche",
    "México"
  ],
  authors: [{ name: "David Hilera" }],
  creator: "David Hilera",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
