export const social = [
  { url: "mailto:diegotrigoiglesias@gmail.com", name: "mail" },
  { url: "https://github.com/Diego-Trigo-Iglesias", name: "github" },
  { url: "https://www.linkedin.com/in/diego-trigo-iglesias-92572b22b", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
