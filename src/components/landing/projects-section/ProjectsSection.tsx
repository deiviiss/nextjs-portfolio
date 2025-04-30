"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/constants"
import { HeadingSection } from "@/components/landing/heading-section/HeadingSection"
import { ProjectCard } from "./ProjectCard"

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <HeadingSection
          title="Proyectos Destacados"
          subtitle="Una selección de mis trabajos más recientes y relevantes"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
