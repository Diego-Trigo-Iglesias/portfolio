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
    role: "Full-Stack Developer + IoT",
    period: "Jul 2025 — Presente",
    description: [
      "App web full-stack con React, TypeScript y Node.js para gestion inteligente de alimentacion en piscifactorias.",
      "Dashboard con visualizacion de datos en tiempo real y metricas de rendimiento productivo.",
      "Integracion de sensores IoT y sistemas de alimentacion automatizada via API REST.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "IoT"],
  },
  {
    company: "Bahia Software",
    role: "Full-Stack Developer",
    period: "Nov 2024 — Jun 2025",
    description: [
      "Desarrollo de aplicaciones web con TypeScript, React y Angular para el sector sanitario.",
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
      "Desarrollo full-stack de aplicaciones criticas para Inditex con Vue.js, TypeScript y Java Spring Boot.",
      "Arquitectura de microservicios, APIs REST en entornos cloud de alta disponibilidad.",
      "Optimizacion de rendimiento, testing automatizado, CI/CD y despliegue continuo.",
    ],
    technologies: ["Vue.js", "TypeScript", "Java", "Spring Boot", "Oracle", "Cloud"],
  },
  {
    company: "Viewnext",
    role: "Full-Stack Developer",
    period: "Sep 2020 — Sep 2021",
    description: [
      "Aplicaciones web para el sector bancario con Vue.js, TypeScript y Java Spring Boot.",
      "Implementacion de pruebas automatizadas, pipelines CI/CD y despliegue continuo.",
      "Migraciones tecnologicas y refactoring de sistemas legacy.",
    ],
    technologies: ["Vue.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Jenkins"],
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
    role: "Full-Stack Developer + IoT",
    period: "Jul 2025 — Present",
    description: [
      "Full-stack web app with React, TypeScript and Node.js for smart aquaculture feeding management.",
      "Real-time data visualization dashboard with productive performance metrics.",
      "IoT sensor integration and automated feeding systems via REST API.",
    ],
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Docker", "IoT"],
  },
  {
    company: "Bahia Software",
    role: "Full-Stack Developer",
    period: "Nov 2024 — Jun 2025",
    description: [
      "Web applications with TypeScript, React and Angular for the healthcare sector.",
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
      "Critical full-stack applications for Inditex with Vue.js, TypeScript and Java Spring Boot.",
      "Microservices architecture and REST APIs in high-availability cloud environments.",
      "Performance optimization, automated testing, CI/CD and continuous deployment.",
    ],
    technologies: ["Vue.js", "TypeScript", "Java", "Spring Boot", "Oracle", "Cloud"],
  },
  {
    company: "Viewnext",
    role: "Full-Stack Developer",
    period: "Sep 2020 — Sep 2021",
    description: [
      "Web applications for the banking sector with Vue.js, TypeScript and Java Spring Boot.",
      "Automated testing, CI/CD pipelines and continuous deployment.",
      "Technology migrations and legacy system refactoring.",
    ],
    technologies: ["Vue.js", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Jenkins"],
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
