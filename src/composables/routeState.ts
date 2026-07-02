import { ref } from "vue";

/**
 * Shared route transition state, extracted from useRouteObserver and
 * useProjectTransition to break the circular dependency between them.
 */
export const ROUTE_TRANSITION_DURATION = 500;
export const isTransitioning = ref(false);
