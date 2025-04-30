"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"
import { Experience } from "@/interfaces/project.interface"

interface ExperienceCardProps {
  experience: Experience
  isEven: boolean
}

export const ExperienceCard = ({ experience, isEven }: ExperienceCardProps) => {
  return (
    <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
      {/* Timeline dot */}
      <div className={`relative md:w-1/2 flex justify-center ${isEven ? "md:justify-end" : "md:justify-start"} items-center`}>
        <div
          className={`w-10 h-10 rounded-full bg-primary flex items-center justify-center 
                     ${isEven ? "md:mr-[-20px]" : "md:ml-[-20px]"}`}
        >
          <Building2 className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Card */}
      <div className="md:w-1/2">
        <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="w-full">
          <Card className="overflow-hidden border-l-4 border-l-primary">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <h3 className="text-xl font-bold">{experience.company}</h3>
                <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{experience.period}</span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-primary mb-2">{experience.position}</h4>

              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{experience.location}</span>
              </div>

              <ul className="space-y-3 mt-4">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-primary"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>

              {experience.stack && (
                <div className="mt-6">
                  <p className="text-sm font-medium mb-2">Stack tecnológico:</p>
                  <div className="flex flex-wrap gap-2">
                    {experience.stack.split(", ").map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
