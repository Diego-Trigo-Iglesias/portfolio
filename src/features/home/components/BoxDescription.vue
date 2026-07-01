<script setup lang="ts">
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import PinIcon from "../../../components/icons/Pin.vue";
import { useBoxAnimation } from "../composables/useBoxAnimation";

const point = new Vector3(-0.9, 2, 6.75);

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

const { wrapperRef, handleTimelineCreated } = useBoxAnimation(emit, {
  clipDirection: "left",
  clipDuration: 0.3,
  animateOn: "desktop",
  timelineDelayOffset: 0.15,
});
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-description">
      <div class="box-description-content">
        <div class="box-description-details">
          <p class="box-description-details-name">Diego</p>
          <div class="box-description-details-location">
            <PinIcon class="box-description-details-location-icon" />
            <p class="box-description-details-location-copy">{{ t("location") }}</p>
          </div>
        </div>
        <div class="box-description-line"></div>
        <div class="box-description-copy">
          <AppearingText
            :text="t('about-tagline')"
            :steps="3"
            :duration="0.7"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-description {
  --line-length: min(48px, calc(var(--svw) * 5));
  gap: var(--space-xxs);
  position: absolute;
  bottom: var(--count-height);
  width: calc(100% - var(--space-outer) * 2);
  left: var(--space-outer);
  @include mixins.landscape {
    position: relative; left: 0; bottom: 0;
    width: 480px; max-width: calc(var(--svw) * 38);
    transform: translate(-100%, -50%);
    padding-top: 3px; padding-right: var(--line-length);
  }
  @include mixins.landscape-large { width: 410px; max-width: calc(var(--svw) * 32); }
  &-line {
    width: 100%; height: 1px;
    background-color: var(--color-cyan-400);
    @include mixins.landscape { display: none; }
  }
  &-details {
    padding: var(--space-sm) var(--space-md);
    display: flex; align-items: center; justify-content: space-between;
    @include mixins.landscape { display: none; }
    &-name { font-size: var(--font-size-title-xs); font-weight: 700; }
    &-location {
      display: flex; align-items: center; gap: var(--space-xs);
      &-icon { width: var(--icon-size-xs); --icon-color: var(--color-white-400); transform: translateY(-1px); }
      &-copy { font-size: var(--font-size-md); }
    }
  }
  &::after, &::before { display: none; @include mixins.landscape { display: block; } }
  &::after {
    content: "";
    position: absolute; top: 50%; transform: translateY(-50%); right: 0;
    width: 11px; height: 11px;
    background-color: var(--color-cyan-400); border-radius: 50%;
  }
  &::before {
    content: "";
    position: absolute; top: 50%; transform: translateY(-50%); right: 0;
    width: var(--line-length); height: 0;
    border-top: var(--stroke-sm) solid var(--color-cyan-400);
  }
  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    @include mixins.landscape {
      padding: var(--space-xs) var(--space-sm);
      @include mixins.mq("md") { padding: var(--space-sm) var(--space-md); }
    }
  }
  &-copy {
    will-change: opacity;
    font-size: var(--font-size-md);
    padding: var(--space-sm) var(--space-md);
    @include mixins.landscape { padding: 0; font-size: var(--font-size-sm); }
    @include mixins.landscape-large { font-size: var(--font-size-lg); }
  }
}
</style>
