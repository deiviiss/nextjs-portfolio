"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Project } from "@/interfaces/project.interface"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="h-full flex flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardHeader className="gap-2">
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          {project.demoUrl && (
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" className="w-full gap-2">
                <ExternalLink size={16} />
                Demo
              </Button>
            </Link>
          )}
          {project.repoUrl && (
            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <Github size={16} />
                Código
              </Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
