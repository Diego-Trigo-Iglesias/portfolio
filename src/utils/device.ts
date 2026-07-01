/**
 * Centralized device detection.
 * Extracted from observer.ts, useAgent.ts, raycast.ts, ScrollIcon.vue
 * to avoid duplication.
 */

export const isTouchDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
  );
};
