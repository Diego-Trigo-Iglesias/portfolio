export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    title: "Vercel AI SDK Certification",
    issuer: "Vercel",
    date: "2025",
  },
  {
    title: "Anthropic Claude Prompt Engineering",
    issuer: "Anthropic",
    date: "2025",
  },
  {
    title: "IBM SkillsBuild — Python for Data Science",
    issuer: "IBM",
    date: "2024",
  },
  {
    title: "Método Formación — Desarrollo Web Avanzado",
    issuer: "Método Formación",
    date: "2023",
  },
];
