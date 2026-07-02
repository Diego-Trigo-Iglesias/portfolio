import { ref, computed, onMounted, onUnmounted, type Ref } from "vue";

export function useHomeScroll(projectsLoaded: Ref<boolean>) {
  const introRef = ref<HTMLElement | null>(null);
  const scrolledPastIntro = ref(false);
  let observer: IntersectionObserver | null = null;

  const isStickyVisible = computed(() => scrolledPastIntro.value || !projectsLoaded.value);

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      scrolledPastIntro.value = entry?.isIntersecting ?? false;
    });
    if (introRef.value) observer.observe(introRef.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { introRef, isStickyVisible };
}
