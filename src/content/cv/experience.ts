export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiencesES: Experience[] = [
  {
    company: "FishFarmFeeder",
    role: "Full-Stack Developer",
    period: "Jul 2025 — Presente",
    description: [
      "Desarrollo de aplicacion web full-stack con React, TypeScript y Node.js para gestion de alimentacion en piscifactorias.",
      "Dashboard en tiempo real con metricas de produccion y visualizacion de datos.",
      "Integracion con sistemas IoT y sensores mediante APIs REST.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
  },
  {
    company: "Bahia Software",
    role: "Full-Stack Developer",
    period: "Nov 2024 — Jun 2025",
    description: [
      "Desarrollo de aplicaciones web con TypeScript, React y Angular.",
      "APIs RESTful y microservicios con Node.js y Spring Boot.",
      "Bases de datos SQL y NoSQL, despliegue en entornos cloud.",
    ],
    technologies: ["Angular", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Corunet / Inditex",
    role: "Full-Stack Developer",
    period: "Oct 2021 — Oct 2024",
    description: [
      "Desarrollo full-stack de aplicaciones criticas para Inditex con JavaScript, TypeScript y Java.",
      "Arquitectura de microservicios, APIs REST y GraphQL en cloud.",
      "Optimizacion de rendimiento, testing automatizado y CI/CD.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Java", "Spring Boot", "Cloud"],
  },
  {
    company: "Viewnext",
    role: "Full-Stack Developer",
    period: "Sep 2020 — Sep 2021",
    description: [
      "Aplicaciones web con TypeScript, Angular y Spring Boot para sector bancario.",
      "Pruebas automatizadas, pipelines CI/CD y despliegue continuo.",
      "Migraciones tecnologicas y refactoring de sistemas legacy.",
    ],
    technologies: ["Angular", "TypeScript", "Node.js", "Java", "Jenkins", "Git"],
  },
  {
    company: "Coremain",
    role: "Desarrollador en practicas",
    period: "Abr 2020 — Ago 2020",
    description: [
      "Formacion en desarrollo web full-stack con JavaScript, HTML/CSS y Java.",
      "Colaboracion en proyectos reales con metodologias agiles.",
    ],
    technologies: ["JavaScript", "Java", "HTML/CSS", "Git"],
  },
];

export const experiencesEN: Experience[] = [
  {
    company: "FishFarmFeeder",
    role: "Full-Stack Developer",
    period: "Jul 2025 — Present",
    description: [
      "Full-stack web application with React, TypeScript and Node.js for aquaculture feeding management.",
      "Real-time production dashboard with data visualization and metrics.",
      "IoT systems and sensor integration via REST APIs.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker"],
  },
  {
    company: "Bahia Software",
    role: "Full-Stack Developer",
    period: "Nov 2024 — Jun 2025",
    description: [
      "Web applications with TypeScript, React and Angular.",
      "RESTful APIs and microservices with Node.js and Spring Boot.",
      "SQL and NoSQL databases, cloud deployments.",
    ],
    technologies: ["Angular", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Corunet / Inditex",
    role: "Full-Stack Developer",
    period: "Oct 2021 — Oct 2024",
    description: [
      "Critical full-stack applications for Inditex with JavaScript, TypeScript and Java.",
      "Microservices architecture, REST and GraphQL APIs in cloud environments.",
      "Performance optimization, automated testing and CI/CD.",
    ],
    technologies: ["TypeScript", "React", "Node.js", "Java", "Spring Boot", "Cloud"],
  },
  {
    company: "Viewnext",
    role: "Full-Stack Developer",
    period: "Sep 2020 — Sep 2021",
    description: [
      "Web applications with TypeScript, Angular and Spring Boot for banking clients.",
      "Automated testing, CI/CD pipelines and continuous deployment.",
      "Technology migrations and legacy system refactoring.",
    ],
    technologies: ["Angular", "TypeScript", "Node.js", "Java", "Jenkins", "Git"],
  },
  {
    company: "Coremain",
    role: "Intern Developer",
    period: "Apr 2020 — Aug 2020",
    description: [
      "Full-stack web development training with JavaScript, HTML/CSS and Java.",
      "Collaboration on real projects using agile methodologies.",
    ],
    technologies: ["JavaScript", "Java", "HTML/CSS", "Git"],
  },
];
