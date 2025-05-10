import { Experience, Project } from "@/interfaces/project.interface"

export const projects: Project[] = [
  {
    "id": 1,
    "title": "Bazar Campechano",
    "description": "Plataforma de e-commerce para negocios locales, con registro de usuarios, gestión de productos y pagos vía PayPal.",
    "image": "https://repository-images.githubusercontent.com/835229345/4e49305a-e818-47d5-8bbf-e592f7c19565",
    "technologies": ["NextJs", "TypeScript", "Server Actions", "Prisma", "PostgreSQL", "Docker", "Tailwind CSS", "Cloudinary", "PayPal API", "Git"],
    "demoUrl": "https://bazarcampechano.com",
    "repoUrl": "https://github.com/deiviiss/bazar-campechano",
    "rol": "Full Stack Developer",
    "destacado": "Modelado complejo de base de datos y pasarela de pagos integrada."
  },
  {
    "id": 3,
    "title": "Newsletter – Fundación GK",
    "description": "Sistema educativo para la gestión de newsletters, menú escolar y fechas clave para padres de familia.",
    "image": "https://res.cloudinary.com/cloudinary-api-images/image/upload/v1736264526/seeds/Porfolio/Educational_Newsletter_oiy21e.png",
    "technologies": ["NextJs", "Server Actions", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "Shadcn", "Cloudinary", "Git"],
    "demoUrl": "https://educationalnewsletter.vercel.app",
    "repoUrl": "https://github.com/deiviiss/newsletter-k2",
    "rol": "Full Stack Developer",
    "destacado": "Gestión de contenido educativo con panel administrativo."
  },
  {
    "id": 9,
    "title": "Miss Kelly ESL Academy",
    "description": "Plataforma con registro de usuarios personalizados para estudiantes de inglés. Presenta contenido y recursos por niveles.",
    "image": "https://res.cloudinary.com/cloudinary-api-images/image/upload/v1741975673/mi-tienda-en-linea-shop/esl-academic_npjptl.png",
    "technologies": ["NextJs", "Server Actions", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "Shadcn", "Cloudinary", "Git"],
    "demoUrl": "https://esl-academic.vercel.app/",
    "repoUrl": "https://github.com/deiviiss/esl-academic.git",
    "rol": "Full Stack Developer",
    "destacado": "Sistema educativo con flujo de registro, autenticación y contenido personalizado."
  },
  {
    "id": 2,
    "title": "Piscina en Casa",
    "description": "Landing para promocionar la renta de piscinas portátiles con contrato descargable, contacto directo y detalles técnicos. Incluye página de privacidad y términos y condiciones.",
    "image": "https://res.cloudinary.com/cloudinary-api-images/image/upload/v1745153652/mi-tienda-en-linea-shop/piscinaencasa_nipsve.png",
    "technologies": ["NextJs", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "Git"],
    "demoUrl": "https://piscinaencasa.vercel.app/",
    "repoUrl": "https://github.com/deiviiss/pool-at-home.git",
    "rol": "Frontend Developer",
    "destacado": "Presentación clara del servicio con recursos legales y contacto directo."
  },
  {
    "id": 8,
    "title": "MiTiendaEnLinea.shop",
    "description": "Landing de promoción de una plataforma SaaS que ofrece e-commerce, servicios de marketing digital y chatbots para emprendedores.",
    "image": "https://repository-images.githubusercontent.com/861436093/976a74ec-7045-4a30-9f5c-e4336148ecf8",
    "technologies": ["NextJs", "Server Actions", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "Shadcn", "Cloudinary", "Git"],
    "demoUrl": "https://mitiendaenlinea.shop",
    "repoUrl": "https://github.com/deiviiss/mi-tienda-en-linea",
    "rol": "Creador y Frontend Developer",
    "destacado": "Plataforma SaaS propia que combina e-commerce con servicios adicionales."
  },
  {
    "id": 7,
    "title": "Casa Quetzal",
    "description": "Landing de marca con enfoque en trazabilidad e innovación genética para semillas. Diseño responsivo y claro. Incluye información de contacto y redes sociales.",
    "image": "https://res.cloudinary.com/cloudinary-api-images/image/upload/v1741975672/mi-tienda-en-linea-shop/quetzal-seed_kvisnr.png",
    "technologies": ["NextJs", "TypeScript", "Tailwind CSS", "Shadcn", "Framer Motion", "Git"],
    "demoUrl": "https://quetzalseeds420.vercel.app/",
    "repoUrl": "https://github.com/deiviiss/casa-quetzal.git",
    "rol": "Frontend Developer",
    "destacado": "Landing branding con contenido enfocado en valores de marca."
  },
  {
    "id": 4,
    "title": "Picteller",
    "description": "App de marketing visual que permite generar imágenes promocionales con IA, fondos temáticos y descripciones automáticas. Generación de contenido visual automatizada.",
    "image": "https://repository-images.githubusercontent.com/875719265/877864e9-d6bd-4e78-8478-db1d9a203d78",
    "technologies": ["NextJs", "TypeScript", "Cloudinary", "Tailwind CSS", "AI", "Git"],
    "demoUrl": "https://picteller.vercel.app",
    "repoUrl": "https://github.com/deiviiss/hackaton-cloudinary.git",
    "rol": "Full Stack Developer",
    "destacado": "Generación de contenido visual con automatización e IA."
  },
  {
    "id": 5,
    "title": "TallerXpert",
    "description": "Sistema de gestión de talleres con flujo completo de órdenes, clientes, pagos y estadísticas. Proyecto colaborativo desarrollado en equipo durante una simulación.",
    "image": "https://raw.githubusercontent.com/deiviiss/deploy-taller-xpert/main/frontend/src/assets/banner.png",
    "technologies": ["NextJs", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Git"],
    "demoUrl": "https://s14-36-t-node-react.vercel.app",
    "repoUrl": "https://github.com/deiviiss/deploy-taller-xpert",
    "rol": "Frontend Developer (colaborativo)",
    "destacado": "Interfaz amigable y flujos internos para talleres mecánicos."
  },
  {
    "id": 6,
    "title": "Santa Ana Club",
    "description": "Web app colaborativa con sistema de autenticación, roles de usuario y pagos seguros para club privado. Desarrollado junto a equipo multidisciplinario.",
    "image": "https://repository-images.githubusercontent.com/811480284/e7dd8ed2-746c-4078-8892-50bc04d2ca19",
    "technologies": ["NextJs", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Git"],
    "demoUrl": "https://santa-ana-club.vercel.app",
    "repoUrl": "https://github.com/deiviiss/deploy-santa-lucia-club.git",
    "rol": "Frontend Developer (colaborativo)",
    "destacado": "Gestión de usuarios con autenticación y control de acceso."
  }
]


export const skills: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "Shadcn",
  "Node.js",
  "Express",
  "REST API",
  "Prisma",
  "Postgres",
  "Responsive Design",
  "UI/UX",
  "Git",
  "GitHub",
  "Vercel",
  "WhatsApp API",
  "Paypal API",
  "React Native",
]

export const experiences: Experience[] = [
  {
    company: "Freelancer",
    position: "Desarrollador Web Full Stack",
    period: "Sep 2024 – Presente",
    location: "Remoto / Campeche, México",
    responsibilities: [
      "Diseñé y desarrollé landing pages, sistemas administrativos y chatbots personalizados para emprendedores y negocios locales, optimizando su flujo de trabajo sin depender de soluciones genéricas.",
      "Colaboré con clientes en sectores como educación, comercio y servicios, adaptando soluciones tecnológicas reales a sus procesos diarios.",
      "Desarrollé sistemas con lógica personalizada (validaciones, permisos, dashboards), utilizando Zustand, Tailwind y Cloudinary para una experiencia sólida y visualmente clara.",
      "Asesoré técnicamente a negocios locales sobre infraestructura web, automatizaciones y uso estratégico de herramientas digitales.",
    ],
    stack: "Next.js 15, Prisma ORM, Tailwind CSS, Zustand, Node.js, Docker, Cloudinary, Nodemailer, Zod, Bayleis",
  },
  {
    company: "Gestoría Peninsular",
    position: "Desarrollador Full Stack & Coordinador Técnico de Sucursales",
    period: "Mar 2020 – Ago 2024",
    location: "Campeche, México",
    responsibilities: [
      "Diseñé y desarrollé una aplicación interna completa para la gestión de clientes, migrando procesos manuales desde Excel a una base de datos relacional (SQL) con una interfaz web desarrollada en Next.js.",
      "Implementé automatizaciones backend para tareas administrativas como la liquidación de clientes y asignación de estados, usando lógica de negocio personalizada.",
      "Construí paneles administrativos reutilizables con Tailwind, Zustand y Prisma, lo que permitió escalar operaciones a nuevas sucursales sin depender de herramientas externas.",
      "Integré validaciones, filtros, búsqueda inteligente y roles de usuario, permitiendo que personal no técnico pudiera usar la plataforma sin complicaciones.",
      "Como coordinador técnico, capacité al equipo operativo, diseñé flujos eficientes y gestioné infraestructura tecnológica (cámaras, redes, soporte de hardware).",
    ],
    stack: "Next.js, Prisma ORM, MySQL, Tailwind CSS, Zustand, Node.js, Docker",
  },
  {
    company: "Grupo GES",
    position: "Formador de personal & Coordinador de tienda",
    period: "Nov 2018 – Ene 2020",
    location: "Campeche, México",
    responsibilities: [
      "Diseñé y ejecuté procesos de capacitación técnica y operativa para empleados nuevos en diferentes sucursales.",
      "Gestioné incidencias administrativas y colaboré en la organización de eventos y visitas corporativas.",
      "Coordiné soluciones administrativas internas con visión tecnológica.",
    ],
    stack: "Capacitación, manejo de personal, gestión de procesos, digitalización básica",
  },
  {
    company: "Somaco S.A de C.V.",
    position: "Soporte Técnico de Campo",
    period: "Sep 2012 – Oct 2018",
    location: "Campeche, México",
    responsibilities: [
      "Proporcioné mantenimiento preventivo y correctivo a cajeros automáticos, impresoras y equipos de cómputo.",
      "Diagnosticaba y resolvía fallos técnicos directamente en sitio, asegurando la continuidad de los servicios.",
    ],
    stack: "Resolución de problemas, soporte hardware/software, adaptabilidad en campo",
  },
]
