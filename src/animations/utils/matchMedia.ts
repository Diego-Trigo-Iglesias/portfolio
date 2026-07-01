import gsap from "gsap";
import { getMatchMediaConditions } from "../../utils/breakpoints";

import type { MatchMediaConditions } from "../../utils/breakpoints";

export const createMatchMedia = (
  setup: (context: gsap.Context, conditions: MatchMediaConditions) => void | (() => void),
): gsap.MatchMedia => {
  const mm = gsap.matchMedia();

  mm.add(getMatchMediaConditions(), (context) => {
    const { conditions } = context;
    const cleanup = setup(context, conditions as MatchMediaConditions);
    return cleanup;
  });

  return mm;
};
