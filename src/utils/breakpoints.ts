import { BREAKPOINTS } from "./sizes";

export type MatchMediaConditions = {
  isMobile: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
};

/**
 * Shared GSAP MatchMedia conditions object.
 * Extracted from matchMedia.ts, useBoxAnimation.ts, AppearingText.vue
 * to eliminate the duplicated breakpoint strings pattern.
 */
export const getMatchMediaConditions = () => ({
  isMobile: `(max-width: ${BREAKPOINTS.md - 1}px)`,
  isDesktop: `(min-width: ${BREAKPOINTS.md}px)`,
  isLandscape: `(min-aspect-ratio: 1)`,
});
