export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "FishFarmFeeder",
    role: "Full-Stack Developer",
    period: "Jul 2025 — Presente",
    description: [
      "Desarrollo de aplicación web para gestión de alimentación en piscifactorías.",
      "Implementación de dashboard en tiempo real con métricas de producción.",
      "Integración con sistemas IoT y sensores de alimentación.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
  },
  {
    company: "Bahía Software",
    role: "Desarrollador Full-Stack",
    period: "Nov 2024 — Jun 2025",
    description: [
      "Desarrollo de aplicaciones web con Angular y Spring Boot.",
      "Implementación de APIs RESTful y microservicios.",
      "Gestión de bases de datos relacionales y despliegue en entornos cloud.",
    ],
    technologies: ["Angular", "Spring Boot", "Java", "PostgreSQL", "Docker"],
  },
  {
    company: "Corunet / Inditex",
    role: "Desarrollador Full-Stack",
    period: "Oct 2021 — Oct 2024",
    description: [
      "Desarrollo y mantenimiento de aplicaciones críticas para Inditex.",
      "Trabajo con Spring Boot, Angular y microservicios en entorno cloud.",
      "Optimización de rendimiento y escalabilidad de sistemas existentes.",
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Oracle", "Cloud"],
  },
  {
    company: "Viewnext",
    role: "Desarrollador Full-Stack",
    period: "Sep 2020 — Sep 2021",
    description: [
      "Desarrollo de aplicaciones web con Angular y Spring Boot para clientes del sector bancario.",
      "Implementación de pruebas automatizadas y CI/CD.",
      "Participación en migraciones tecnológicas.",
    ],
    technologies: ["Angular", "Spring Boot", "Java", "Jenkins", "Git"],
  },
  {
    company: "Coremain",
    role: "Desarrollador en prácticas",
    period: "Abr 2020 — Ago 2020",
    description: [
      "Formación y desarrollo de aplicaciones web con tecnologías Java.",
      "Colaboración en proyectos reales con metodologías ágiles.",
    ],
    technologies: ["Java", "Spring", "HTML/CSS", "JavaScript"],
  },
];
