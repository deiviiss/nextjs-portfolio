export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl: string | null
  repoUrl: string | null
  rol: string | null
  destacado: string | null
}

export interface Experience {
  company: string
  position: string
  period: string
  location: string
  responsibilities: string[]
  stack?: string
}