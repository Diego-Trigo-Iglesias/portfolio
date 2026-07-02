export type TagVariant =
  | "react"
  | "next"
  | "vue"
  | "angular"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "node"
  | "spring"
  | "java"
  | "csharp"
  | "dotnet"
  | "python"
  | "mongodb"
  | "postgresql"
  | "docker"
  | "kubernetes"
  | "nodered"
  | "testing";

export const tagLabels = {
  react: "React",
  next: "Next.js",
  vue: "Vue.js",
  angular: "Angular",
  typescript: "TypeScript",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  node: "Node.js",
  spring: "Spring Boot",
  java: "Java",
  csharp: "C#",
  dotnet: ".NET",
  python: "Python",
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  docker: "Docker",
  kubernetes: "Kubernetes",
  nodered: "Node-RED",
  testing: "Testing",
} as const satisfies Record<TagVariant, string>;
