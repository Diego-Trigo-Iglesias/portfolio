import { ref, watchEffect, onBeforeUnmount } from "vue";
import gsap from "gsap";
import { getMatchMediaConditions } from "../../../utils/breakpoints";

interface TimelineItem {
  timeline: gsap.core.Timeline;
  delay: number;
}

interface BoxAnimationConditions {
  isMobile: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
}

interface UseBoxAnimationOptions {
  clipDirection?: "left" | "right";
  clipDuration?: number;
  animateOn?: "desktop" | "landscape";
  timelineDelayOffset?: number;
  alwaysAddTimelines?: boolean;
  additionalAnimations?: (tl: gsap.core.Timeline, conditions: BoxAnimationConditions) => void;
}

export function useBoxAnimation(
  emit: (event: "timeline:created", timeline: gsap.core.Timeline) => void,
  options: UseBoxAnimationOptions = {},
) {
  const {
    clipDirection,
    clipDuration = 0.3,
    animateOn = "desktop",
    timelineDelayOffset = 0.15,
    alwaysAddTimelines = true,
    additionalAnimations,
  } = options;

  const wrapperRef = ref<HTMLDivElement | null>(null);
  const timelines = ref<TimelineItem[]>([]);
  let matchMedia: gsap.MatchMedia | null = null;

  watchEffect((onInvalidate) => {
    const wrapperEl = wrapperRef.value;
    if (!wrapperEl) return;

    if (matchMedia) {
      matchMedia.revert();
      matchMedia = null;
    }

    matchMedia = gsap.matchMedia();

    matchMedia.add(
      getMatchMediaConditions(),
      (context) => {
        const { conditions } = context;
        const { isMobile, isDesktop, isLandscape } = conditions as unknown as BoxAnimationConditions;

        const tl = gsap.timeline({ paused: true });

        const shouldAnimateClip = animateOn === "desktop" ? !isMobile : isLandscape;

        if (clipDirection && shouldAnimateClip) {
          const fromClip = clipDirection === "left" ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)";
          tl.fromTo(wrapperEl, { clipPath: fromClip }, { clipPath: "inset(0% 0% 0% 0%)", duration: clipDuration, ease: "none" }, 0);
        } else if (clipDirection) {
          gsap.set(wrapperEl, { clipPath: "inset(0% 0% 0% 0%)" });
        }

        additionalAnimations?.(tl, { isMobile, isDesktop, isLandscape });

        if (alwaysAddTimelines || shouldAnimateClip) {
          for (let i = 0; i < timelines.value.length; i++) {
            const item = timelines.value[i];
            if (!item) continue;
            tl.add(() => { item.timeline.restart(true); }, item.delay + timelineDelayOffset);
          }
        }

        emit("timeline:created", tl);

        return () => { tl.kill(); };
      },
    );

    onInvalidate(() => {
      if (matchMedia) {
        matchMedia.revert();
        matchMedia = null;
      }
    });
  });

  onBeforeUnmount(() => {
    if (matchMedia) {
      matchMedia.revert();
    }
  });

  const handleTimelineCreated = (timeline: gsap.core.Timeline, delay: number) => {
    timelines.value = [...timelines.value, { timeline, delay }];
  };

  return { wrapperRef, handleTimelineCreated };
}
