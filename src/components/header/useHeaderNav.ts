import { computed, ref } from "vue";
import { useHeaderTheme } from "../../composables/useHeaderTheme";
import { lenis } from "../../composables/useScroll";
import { projectId } from "../../composables/useRouteObserver";
import { useRouter } from "../../composables/useRouter";
import { useFirstRoute } from "../../composables/useFirstRoute";

export const useHeaderNav = () => {
  const router = useRouter();
  const { isFirstRoute } = useFirstRoute();

  const scrolledPastHeroVisible = ref(false);
  const { isDarkTheme } = useHeaderTheme({
    onUpdate: (element, boundingClientRect, hasScrolledIntoView) => {
      if (!element || !boundingClientRect) {
        scrolledPastHeroVisible.value = false;
        return;
      }
      scrolledPastHeroVisible.value = hasScrolledIntoView;
    },
  });

  const handleBackClick = () => {
    if (isFirstRoute.value) {
      router.push("/");
    } else {
      router.back();
    }
  };

  const handleBackToTop = () => {
    if (!lenis.value) return;
    lenis.value.scrollTo(0);
  };

  const classNames = computed(() => ({
    header: true,
    "header-dark": isDarkTheme.value,
    "header-scrolled": scrolledPastHeroVisible.value,
    [`project-${projectId.value}`]: projectId.value !== null,
  }));

  const getInTouchClassNames = computed(() => ({
    "header-get-in-touch": true,
    "header-get-in-touch-isProjectPage": projectId.value !== null,
  }));

  const showHeader = computed(() => true);

  return {
    isDarkTheme,
    scrolledPastHeroVisible,
    handleBackToTop,
    showHeader,
    handleBackClick,
    classNames,
    getInTouchClassNames,
  };
};
