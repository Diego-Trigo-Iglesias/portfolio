import type { ProjectContent } from "../../types";

export default {
  title: "IoT Sensor Simulator",
  theme: "dark",
  tags: ["nodered", "node"],
  description:
    "Node-RED flow that simulates aquaculture sensors, groups them into pools, and exposes a small REST API for querying from any device on your LAN.<br/><br/>Designed for industrial aquaculture environments, this project demonstrates real-time sensor simulation, data aggregation, and RESTful API design for IoT applications.",
  source: "https://github.com/Diego-Trigo-Iglesias/node-red",
  components: [],
} as const satisfies ProjectContent;
