"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { skills } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { HeadingSection } from "@/components/landing/heading-section/HeadingSection"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="container mx-auto">
        <HeadingSection title="Sobre Mí" subtitle="Conoce más sobre mi experiencia y enfoque profesional" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Mi Experiencia</h3>
            <div className="space-y-6">
              <p className="text-lg">
                Soy un desarrollador web especializado en Next.js, con un enfoque en crear soluciones digitales que
                mejoran la operación de negocios reales.
              </p>
              <p className="text-lg">
                Más allá del stack que manejo, aporto compromiso, disposición para aprender y un enfoque práctico para resolver problemas reales. Me entusiasma formar parte de un equipo de desarrollo donde pueda crecer junto a otros profesionales, compartir conocimientos y sumar con mi energía, curiosidad y experiencia.
              </p>
              <p className="text-lg">
                Me gusta construir soluciones útiles y funcionales, y llevar una mentalidad de mejora continua a cada proyecto. Ya sea trabajando en una plataforma compleja o en una landing sencilla, siempre doy lo mejor de mí.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Habilidades Técnicas</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Badge className="px-3 py-1 text-sm">{skill}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mt-8 mb-4">Educación y Certificaciones</h3>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h4 className="font-semibold">Full Stack Developer con JavaScript</h4>
                  <p className="text-sm text-muted-foreground">Platzi | 2019 - 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold">Ingeniero en Sistemas</h4>
                  <p className="text-sm text-muted-foreground">Universidad Autónoma de Campeche | 2009</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
