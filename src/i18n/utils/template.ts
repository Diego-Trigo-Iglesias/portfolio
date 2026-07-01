type TemplateVars = Record<string, string | number | boolean | null>;

export const compileTemplate = (template = ""): ((variables: TemplateVars) => string) => {
  if (typeof template !== "string") return () => template;
  const parts = template.split(/({.*?})/);

  return (variables) => {
    return parts
      .map((part) => (part.startsWith("{") && part.endsWith("}") ? (String(variables[part.slice(1, -1)] ?? part) ?? part) : part))
      .join("");
  };
};
