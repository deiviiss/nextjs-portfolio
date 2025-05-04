
"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Coffee } from "lucide-react"
import Link from "next/link"
import { ToogleDarkMode } from "@/components/dark-mode/toogle-dark-mode/ToogleDarkMode"
import { useTheme } from "next-themes";
import Image from "next/image"
import { FiDownload } from "react-icons/fi"
import { useEffect, useState } from "react"

export const HeroSection = () => {
  const { theme } = useTheme();
  const [showName, setShowName] = useState(false)

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowName(true)
      } else {
        setShowName(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed flex gap-2 z-10 w-full bg-[#0a0118] dark:bg-[#020817] p-4 ${showName ? 'justify-between' : 'justify-end'}`}>
        {showName &&
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-white text-2xl font-bold"
          >David Hilera
          </motion.h1>
        }

        <div className="flex gap-2 items-center">
          <Link
            href="/CV-David-Hilera.pdf"
            download={true}
            target='_blank'
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              aria-label="Descargar CV"
            >
              <FiDownload className="w-5 h-5" />
              <span className="hidden sm:flex">Descargar</span> CV
            </Button>
          </Link>

          <ToogleDarkMode />
        </div>
      </nav>
      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-4 mt-12 overflow-hidden bg-[#0a0118] dark:bg-[#020817]">

        <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row-reverse items-center gap-4 md:gap-8 md:gap-x-28">
          {/* Laptop illustration */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:w-1/2 overflow-hidden shadow-lg"
          >

            <Image
              src="/hero.png"
              alt="Laptop with code"
              width={800}
              height={800}
              className="object-cover w-full h-full rounded-full"

            />


          </motion.div>

          <div className="flex flex-col items-center lg:items-start mx-auto text-white">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 text-center w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              David Hilera
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-3xl mx-auto mb-12"
            >
              {/* <h2 className="text-2xl md:text-3xl font-medium mb-4">David Hilera</h2> */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Soy desarrollador Web Full Stack especializado en NextJs.
                Creo soluciones digitales que automatizan procesos reales, desde e-commerce hasta chatbots en WhatsApp, usando tecnologías modernas para que los negocios operen mejor.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="#contact">
                <Button size="lg" variant={'outline'} className="gap-2 bg-white text-[#0a0118] hover:bg-gray-200 dark:bg-[#0a0118] dark:text-white dark:hover:hover:bg-white/10 dark:border-white">
                  <Mail size={18} />
                  <span className="hidden sm:flex">Contáctame</span>
                </Button>
              </Link>

              <Link href="https://github.com/deiviiss" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-white text-[#0a0118] hover:bg-gray-200 dark:bg-[#0a0118] dark:text-white dark:hover:hover:bg-white/10 dark:border-white">
                  <Github size={18} />
                  <span className="hidden sm:flex">GitHub</span>
                </Button>
              </Link>

              <Link href="https://linkedin.com/in/davidhilera" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-white text-[#0a0118] hover:bg-gray-200 dark:bg-[#0a0118] dark:text-white dark:hover:hover:bg-white/10 dark:border-white">
                  <Linkedin size={18} />
                  <span className="hidden sm:flex">LinkedIn</span>
                </Button>
              </Link>

              <Link href="https://buymeacoffee.com/deiviiss" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 border-white text-[#0a0118] hover:bg-gray-200 dark:bg-[#0a0118] dark:text-white dark:hover:hover:bg-white/10 dark:border-white">
                  <Coffee size={18} />
                  <span className="hidden sm:flex">Invítame un café</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          // animate={{ y: [0, 10, 0] }} 
          // transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            href="#projects"
            className="flex flex-col items-center text-muted-foreground hover:text-foreground text-white animate-bounce animate-duration-1000 "
          >
            <span className="text-sm mb-2">Ver Proyectos</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </Link>
        </motion.div>

        {/* Curved border at bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill={theme === "dark" ? "#0a0118" : "white"}
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>

      </section >
    </>
  )
}
