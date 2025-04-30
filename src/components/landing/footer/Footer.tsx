"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Youtube, Coffee } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 md:px-8 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg font-semibold mb-2">David Hilera</p>
            <p className="text-muted-foreground">Desarrollador Web Especializado en Next.js</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4 mt-6 md:mt-0"
          >
            <Link href="https://github.com/deiviiss" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://linkedin.com/in/davidhilera"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:david.hilera@hotmail.com" aria-label="Email">
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://buymeacoffee.com/deiviiss"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Buy Me a Coffee"
            >
              <Coffee className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground"
        >
          <p>© {currentYear} David Hilera. Todos los derechos reservados.</p>
          <p className="mt-2">
            Construido con <span className="text-primary">❤</span> usando Next.js, Tailwind CSS, Framer Motion y Shadcn
            UI
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
