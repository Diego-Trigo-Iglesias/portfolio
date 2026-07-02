import type { ProjectContent } from "../../types";

export default {
  title: "Star Wars App",
  theme: "dark",
  tags: ["react", "javascript", "css"],
  description:
    "React application that consumes the Star Wars API (SWAPI) to display information about characters, planets, starships, and more. Features a clean card-based UI with search and filter capabilities.<br/><br/>Built as a learning project to demonstrate API integration, state management, and responsive design in React.",
  source: "https://github.com/Diego-Trigo-Iglesias/react-star-wars-app",
  components: [],
} as const satisfies ProjectContent;
