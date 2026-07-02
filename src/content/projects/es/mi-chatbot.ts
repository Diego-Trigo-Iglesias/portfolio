import type { ProjectContent } from "../../types";

export default {
  title: "Mi Chatbot",
  theme: "dark",
  tags: ["java", "spring", "vue", "typescript"],
  description:
    "Chatbot con IA construido con Java Spring Boot en el backend y Vue + Vite en el frontend. Se integra con la API de OpenAI para proporcionar respuestas conversacionales inteligentes.<br/><br/>Incluye una interfaz de chat limpia, historial de conversaciones y parámetros de respuesta configurables.",
  source: "https://github.com/Diego-Trigo-Iglesias/mi-chatbot",
  components: [],
} as const satisfies ProjectContent;
