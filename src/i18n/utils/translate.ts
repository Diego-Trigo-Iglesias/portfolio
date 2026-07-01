import { compileTemplate } from "./template";
import { translations } from "../store";

type TranslateProps = Record<string, string | number | boolean | null>;

export const t = (key: string, props: TranslateProps = {}) => {
  const translation = translations.value[key];
  if (!translation) return "";

  const render = compileTemplate(translation);
  return render(props);
};
