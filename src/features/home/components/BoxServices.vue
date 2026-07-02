<script setup lang="ts">
import { computed, ref } from "vue";
import gsap from "gsap";
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { locale } from "../../../i18n/store";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import { useBoxAnimation } from "../composables/useBoxAnimation";

const point = new Vector3(0.75, 2.75, 6.75);
const subRefs = ref<HTMLParagraphElement[]>([]);

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

const { wrapperRef, handleTimelineCreated } = useBoxAnimation(emit, {
  clipDirection: "right",
  clipDuration: 0.4,
  animateOn: "desktop",
  timelineDelayOffset: 0.25,
  additionalAnimations: (tl, { isMobile }) => {
    const items = subRefs.value.filter(Boolean);
    if (!items.length) return;
    if (!isMobile) tl.fromTo(items, { opacity: 0 }, { opacity: 1, duration: 0.2, stagger: 0.1 }, 0.3);
    else gsap.set(items, { opacity: 1 });
  },
});
void wrapperRef;

const SERVICES_EN = [
  { name: "React & Next.js" },
  { name: "Vue 3 & Angular" },
  { name: "Java Spring Boot" },
  { name: "Node.js & APIs REST" },
  { name: "Docker & Kubernetes" },
] as const satisfies { name: string }[];

const SERVICES_ES = [
  { name: "React & Next.js" },
  { name: "Vue 3 & Angular" },
  { name: "Java Spring Boot" },
  { name: "Node.js y APIs REST" },
  { name: "Docker y Kubernetes" },
] as const satisfies { name: string }[];

const services = computed(() => (locale.value === "es" ? SERVICES_ES : SERVICES_EN));
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-services">
      <div class="box-services-content">
        <div class="box-services-title">
          <AppearingText
            :text="t('services')"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        <div class="box-services-list">
          <div class="box-services-list-item" v-for="(service, index) in services" :key="service.name">
            <p class="box-services-list-item-name">
              <AppearingText
                :text="service.name"
                :steps="1"
                :duration="0.35"
                @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.15 + index * 0.1)"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-services {
  --line-length: min(48px, calc(var(--svw) * 5));
  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);
  @include mixins.landscape {
    width: 480px;
    max-width: calc(var(--svw) * 37);
    padding-left: var(--line-length);
    position: relative;
    left: 0;
    bottom: 0;
    padding-top: 3px;
    transform: translate(0, -50%);
  }
  @include mixins.landscape-large {
    width: 380px;
    max-width: calc(var(--svw) * 36);
  }
  &::after,
  &::before {
    display: none;
    @include mixins.landscape {
      display: block;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 11px;
    height: 11px;
    background-color: var(--color-cyan-400);
    border-radius: 50%;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);
    @include mixins.landscape {
      width: var(--line-length);
    }
  }
  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    max-width: 100%;
    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
    }
    @include mixins.mq("md") {
      padding: var(--space-sm) var(--space-md);
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    &-item {
      display: flex;
      flex-direction: column;
      padding-left: 18px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 6px;
        width: 4px;
        height: 4px;
        background-color: var(--color-text-cyan-400);
        border-radius: 50%;
      }
      &-name {
        font-size: var(--font-size-md);
        @include mixins.landscape {
          font-size: var(--font-size-sm);
        }
        @include mixins.landscape-large {
          font-size: var(--font-size-lg);
        }
      }
    }
  }
  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    @include mixins.landscape {
      font-size: var(--font-size-title-xxs);
    }
    @include mixins.landscape-large {
      font-size: var(--font-size-title-xs);
    }
  }
}
</style>
