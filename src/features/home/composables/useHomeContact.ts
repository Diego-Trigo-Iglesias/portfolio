import { ref, watch, watchEffect } from "vue";
import { projectVisible } from "../../../composables/useRouteObserver";
import { isTransitioning } from "../../../composables/useProjectTransition";
import { preloaderVisible } from "../../../composables/usePreloader";

export function useHomeContact() {
  const contactRef = ref<HTMLElement | null>(null);
  const contactBottom = ref(0);

  const updateOffset = () => {
    if (!contactRef.value) return;
    const rect = contactRef.value.getBoundingClientRect();
    contactBottom.value = document.documentElement.scrollHeight - (rect.bottom + window.scrollY);
  };

  watch([projectVisible, isTransitioning], () => {
    if (!projectVisible.value) updateOffset();
  });

  watchEffect((onInvalidate) => {
    if (!contactRef.value || preloaderVisible.value) return;
    const ro = new ResizeObserver(updateOffset);
    ro.observe(contactRef.value);
    onInvalidate(() => ro.disconnect());
  });

  return { contactRef, contactBottom };
}
