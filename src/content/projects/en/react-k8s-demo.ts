import type { ProjectContent } from "../../types";

export default {
  title: "React + K8s Demo",
  theme: "dark",
  tags: ["react", "docker", "kubernetes", "typescript"],
  description:
    "React application deployed on a local Kubernetes cluster using Minikube. Demonstrates containerization with Docker, orchestration with Kubernetes, and CI/CD pipeline configuration.<br/><br/>Includes Kubernetes manifests for deployments, services, and ingress configuration, showcasing DevOps best practices.",
  source: "https://github.com/Diego-Trigo-Iglesias/demo-react-docker-k8s",
  components: [],
} as const satisfies ProjectContent;
