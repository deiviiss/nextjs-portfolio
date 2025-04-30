"use client"

import { motion } from "framer-motion"
import { HeadingSection } from "@/components/landing/heading-section/HeadingSection"
import { experiences } from "@/lib/constants"
import { ExperienceCard } from "./ExperienceCard"

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <HeadingSection
          title="Experiencia Laboral"
          subtitle="Mi trayectoria profesional y los roles que he desempeñado"
        />

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 bottom-0 w-[2px] bg-primary/20 dark:bg-primary/10"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ExperienceCard experience={experience} isEven={index % 2 === 0} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
