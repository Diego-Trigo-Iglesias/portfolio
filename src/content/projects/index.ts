import type { Locale } from "../../i18n/types";

export const projectIds = [
  "motor-rpg",
  "coin-finder",
  "task-manager",
  "iot-sensor-simulator",
  "react-k8s-demo",
  "mi-chatbot",
  "star-wars-app",
  "fake-netflix",
  "cr-chapela-web",
  "vue-slot-machine",
];

type ProjectModule = { default: Record<string, string> };
type GlobResult = Record<string, ProjectModule>;

function simplifyModules(glob: GlobResult): Record<string, ProjectModule> {
  const result: Record<string, ProjectModule> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

const esModules = simplifyModules(import.meta.glob("./es/*.ts", { eager: true }) as GlobResult);
const enModules = simplifyModules(import.meta.glob("./en/*.ts", { eager: true }) as GlobResult);

export const projectModules = {
  es: esModules,
  en: enModules,
} as const satisfies Record<Locale, Record<string, ProjectModule>>;
