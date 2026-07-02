import type { ProjectContent } from "../../types";

export default {
  title: "React + K8s Demo",
  theme: "dark",
  tags: ["react", "docker", "kubernetes", "typescript"],
  description:
    "Aplicación React desplegada en un cluster Kubernetes local usando Minikube. Demuestra contenedorización con Docker, orquestación con Kubernetes y configuración de pipelines CI/CD.<br/><br/>Incluye manifiestos de Kubernetes para despliegues, servicios y configuración de ingress, mostrando mejores prácticas de DevOps.",
  source: "https://github.com/Diego-Trigo-Iglesias/demo-react-docker-k8s",
  components: [],
} as const satisfies ProjectContent;
