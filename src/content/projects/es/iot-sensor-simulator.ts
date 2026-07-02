import type { ProjectContent } from "../../types";

export default {
  title: "IoT Sensor Simulator",
  theme: "dark",
  tags: ["nodered", "node"],
  description:
    "Flujo de Node-RED que simula sensores de acuicultura, los agrupa en piscinas y expone una pequeña API REST consultable desde cualquier dispositivo en tu LAN.<br/><br/>Diseñado para entornos industriales de acuicultura, este proyecto demuestra simulación de sensores en tiempo real, agregación de datos y diseño de APIs RESTful.",
  source: "https://github.com/Diego-Trigo-Iglesias/node-red",
  components: [],
} as const satisfies ProjectContent;
