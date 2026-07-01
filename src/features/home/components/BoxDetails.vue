<script setup lang="ts">
import { Vector3 } from "three";
import ProjectedElement from "../../../components/ProjectedElement.vue";
import { t } from "../../../i18n/utils/translate";
import AppearingText from "../../../components/AppearingText.vue";
import PinIcon from "../../../components/icons/Pin.vue";
import { useBoxAnimation } from "../composables/useBoxAnimation";

const point = new Vector3(-0.76, 3.6, 6.75);

const emit = defineEmits<{
  "timeline:created": [timeline: gsap.core.Timeline];
}>();

const { wrapperRef, handleTimelineCreated } = useBoxAnimation(emit, {
  clipDirection: "left",
  clipDuration: 0.3,
  animateOn: "landscape",
  timelineDelayOffset: 0.25,
  alwaysAddTimelines: false,
});
void wrapperRef;
</script>

<template>
  <ProjectedElement :point="point">
    <div ref="wrapperRef" class="box-details">
      <div class="box-details-content">
        <div class="box-details-title">
          <AppearingText
            text="Diego"
            :steps="1"
            :duration="0.35"
            @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0)"
          />
        </div>
        <div class="box-details-items">
          <div class="box-details-item">
            <PinIcon class="box-details-icon" />
            <AppearingText
              v-if="t('location')"
              class="box-details-content-copy"
              :text="t('location')"
              :steps="3"
              :duration="0.35"
              @timeline:created="(tl: gsap.core.Timeline) => handleTimelineCreated(tl, 0.1)"
            />
          </div>
        </div>
      </div>
    </div>
  </ProjectedElement>
</template>

<style scoped lang="scss">
.box-details {
  --line-length: min(48px, calc(var(--svw) * 5));
  display: none;
  @include mixins.landscape {
    display: block;
    position: absolute;
    padding-bottom: 3px; padding-right: var(--line-length);
    width: 240px; max-width: calc(var(--svw) * 30);
    transform: translate(-100%, -50%);
  }
  @include mixins.landscape-large { width: 240px; }
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
    border-bottom: var(--stroke-sm) solid var(--color-cyan-400);
  }
  &-content {
    border: var(--stroke-sm) solid var(--color-cyan-400);
    border-radius: var(--radius-md);
    background: linear-gradient(to bottom, var(--color-hologram-top) 0%, var(--color-hologram-bottom) 100%);
    gap: var(--space-xxs);
    display: flex; flex-direction: row; justify-content: space-between;
    padding: var(--space-sm) var(--space-md);
    @include mixins.landscape {
      flex-direction: column; justify-content: flex-start;
      padding: var(--space-xs) var(--space-sm);
    }
    @include mixins.mq("md") { padding: var(--space-sm) var(--space-md); }
  }
  &-item {
    display: flex; align-items: center; gap: var(--space-xs);
    flex-direction: row; white-space: nowrap;
    height: var(--icon-size-sm);
  }
  &-icon {
    width: var(--icon-size-xxs); transform: translateY(-1px);
    --icon-color: var(--color-white-400);
    @include mixins.mq("md") { width: var(--icon-size-xs); }
  }
  &-title {
    font-size: var(--font-size-title-xxs); font-weight: 700;
    @include mixins.mq("md") { font-size: var(--font-size-title-sm); }
  }
  &-items {
    display: flex; font-size: var(--font-size-sm);
    flex-direction: column;
    @include mixins.mq("md") { font-size: var(--font-size-md); }
    &-copy { flex: 0.5; }
  }
}
</style>
