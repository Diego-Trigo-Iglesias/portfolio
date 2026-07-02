import { ref, watch, onMounted } from "vue";
import { resources } from "../utils/resources";
import gsap from "gsap";

export const preloaderVisible = ref(true);

export const usePreloader = () => {
  const progress = ref(0);
  const resourcesProgress = ref(0);

  /** Cached DOM references to avoid querying every frame. */
  let preloaderRect: HTMLElement | null = null;
  let preloaderEl: HTMLElement | null = null;

  onMounted(() => {
    preloaderRect = document.querySelector(".preloader-rect") as HTMLElement;
    preloaderEl = document.querySelector(".preloader") as HTMLElement;

    resources.on("progress", (newProgress) => {
      resourcesProgress.value = newProgress;
    });

    // If resources already loaded (empty sources), skip straight to 100%
    if (resources.isReady) {
      resourcesProgress.value = 1;
    }
  });

  watch(
    resourcesProgress,
    (newProgress) => {
      progress.value = 0.25 + newProgress * 0.75;
    },
    { immediate: true },
  );

  watch(
    progress,
    (newProgress) => {
      if (newProgress === 1) {
        gsap.delayedCall(0.2, () => {
          if (!preloaderEl) return;
          document.body.classList.remove("is-loading");
          preloaderEl.classList.add("preloader-hidden");
          preloaderVisible.value = false;
        });
      }

      if (preloaderRect) preloaderRect.style.transform = `scaleY(${newProgress})`;
    },
    { immediate: true },
  );
};
