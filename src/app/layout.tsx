import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/dark-mode/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Hilera | Desarrollador Web",
  description:
    "Desarrollador web especializado en Next.js, con enfoque en soluciones digitales que mejoran la operación de negocios reales.",
  keywords: ["desarrollador web", "Next.js", "React", "Tailwind CSS", "Framer Motion", "Campeche", "México"],
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
