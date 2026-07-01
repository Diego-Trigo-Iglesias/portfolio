<script setup lang="ts">
import { ref, watchEffect } from "vue";
import gsap from "gsap";
import Notch from "../../../components/Notch.vue";

const el = ref<HTMLDivElement | null>(null);
const media = ref<HTMLVideoElement | HTMLImageElement | null>(null);
const content = ref<HTMLDivElement | null>(null);

export interface Props {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
  index: number;
}

const props = defineProps<Props>();

watchEffect((onInvalidate) => {
  if (!el.value) return;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el.value,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "play none none reset",
    },
  });
  tl.fromTo(content.value, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  tl.fromTo(media.value, { scale: 1.2 }, { scale: 1, duration: 0.4, ease: "power1.out" }, 0);
  onInvalidate(() => {
    tl.kill();
    gsap.set(content.value, { scale: 1 });
    gsap.set(media.value, { scale: 1 });
  });
});
</script>

<template>
  <div class="project-media" ref="el">
    <div class="project-media-content" ref="content">
      <img v-if="props.type === 'image'" :src="props.src" :alt="props.alt" loading="lazy" fetchpriority="high" class="project-media-image" ref="media" />
      <video v-else :src="props.src" autoplay muted loop playsinline preload="metadata" class="project-media-video" ref="media">
        <source :src="props.src" type="video/mp4" />
      </video>
    </div>
    <div class="project-media-caption" v-if="props.caption">
      <Notch class="project-media-caption-notch project-media-caption-notch-left" />
      <Notch class="project-media-caption-notch project-media-caption-notch-top" />
      <p class="project-media-caption-copy">{{ props.caption }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-media {
  width: 100%;
  height: 100%;
  grid-column: 1 / 13;
  max-width: 900px;
  justify-self: center;
  position: relative;
  aspect-ratio: 16 / 9;
  @include mixins.mq("md") { grid-column: 2 / 12; }
  @include mixins.mq("lg") { grid-column: 3 / 11; }

  &-content {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background-color: var(--color-background-300);
    width: 100%;
    height: 100%;
  }

  &-image, &-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-caption {
    position: absolute;
    bottom: -1px;
    right: -1px;
    background-color: var(--color-background-400);
    padding: var(--space-xxs) var(--space-sm);
    border-radius: var(--radius-md) 0 0 0;
    @include mixins.mq("md") { padding: var(--space-xxs) var(--space-sm); }
    @include mixins.mq("lg") { padding: var(--space-xs) var(--space-md); border-radius: var(--radius-lg) 0 0 0; }

    &-notch {
      position: absolute;
      color: var(--color-background-400);
      --icon-color: var(--color-background-400);
      width: var(--radius-md);
      @include mixins.mq("md") { width: var(--radius-lg); }

      &-left {
        left: 0;
        bottom: 0;
        transform: translate(-100%, 0) scale(-1) rotate(90deg);
      }

      &-top {
        top: 0;
        right: 0;
        transform: translate(0, -100%) scale(-1) rotate(90deg);
      }
    }

    &-copy {
      font-size: var(--font-size-sm);
      font-weight: 700;
      @include mixins.mq("md") { font-size: var(--font-size-md); }
    }
  }
}
</style>
