<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { lerp } from "../utils/math";
import gsap from "gsap";
import ArrowRightLong from "./icons/ArrowRightLong.vue";
import { path } from "../composables/useRouteObserver";
import { raycast } from "../three/utils/raycast";
import { projectId } from "../composables/useRouteObserver";

type Cursor = "circle-black" | "arrow" | "arrow-external" | "circle-white";
const TYPES: Cursor[] = ["circle-black", "arrow", "arrow-external", "circle-white"];

const wrapper = ref<HTMLElement | null>(null);
const scaleEl = ref<HTMLElement | null>(null);
const mx = ref(0), my = ref(0), cx = ref(0), cy = ref(0);
const visible = ref(false);
const type = ref<Cursor | null>(null);
const detected = ref<Cursor | null>(null);

const tick = () => {
  cx.value = lerp(cx.value, mx.value, 0.1);
  cy.value = lerp(cy.value, my.value, 0.1);
  const hoveringBox = raycast.getHoveringBox();
  if (hoveringBox) {
    if (!visible.value) { visible.value = true; cx.value = mx.value; cy.value = my.value; }
    type.value = "circle-black";
  } else if (detected.value) {
    if (!visible.value) { visible.value = true; cx.value = mx.value; cy.value = my.value; }
    type.value = detected.value;
  } else {
    visible.value = false;
    type.value = null;
  }
  if (wrapper.value) wrapper.value.style.transform = `translate(${cx.value}px, ${cy.value}px)`;
  if (scaleEl.value) scaleEl.value.style.transform = `scale(${visible.value ? 1 : 0})`;
};

const findCursor = (el: Element | null): Cursor | null => {
  if (!el) return null;
  if (el instanceof HTMLElement && TYPES.includes(el.dataset.cursor as Cursor)) return el.dataset.cursor as Cursor;
  return findCursor(el.parentElement);
};

const onMove = (e: MouseEvent) => {
  mx.value = e.clientX;
  my.value = e.clientY;
  detected.value = findCursor(e.target as Element);
};

onMounted(() => {
  mx.value = window.innerWidth / 2;
  my.value = window.innerHeight / 2;
  cx.value = mx.value;
  cy.value = my.value;
  window.addEventListener("mousemove", onMove);
  gsap.ticker.add(tick);
});

watch(() => path.value, () => { visible.value = false; type.value = null; });

onUnmounted(() => {
  window.removeEventListener("mousemove", onMove);
  gsap.ticker.remove(tick);
});
</script>

<template>
  <div ref="wrapper" class="cursor-wrapper" :class="{ [`project-${projectId}`]: projectId !== null }">
    <div ref="scaleEl" class="cursor-scale">
      <div class="cursor cursor-circle-black" :class="{ 'cursor-active': type === 'circle-black' }" />
      <div class="cursor cursor-circle-white" :class="{ 'cursor-active': type === 'circle-white' }" />
      <div class="cursor cursor-arrow" :class="{ 'cursor-active': type === 'arrow' }">
        <ArrowRightLong class="cursor-arrow-icon" />
      </div>
      <div class="cursor cursor-arrow-external" :class="{ 'cursor-active': type === 'arrow-external' }">
        <ArrowRightLong class="cursor-arrow-external-icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cursor-wrapper {
  position: fixed;
  top: 0; left: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  display: none;
  @include mixins.hover { display: block; }
}

.cursor-scale {
  position: relative;
  transform-origin: center;
  will-change: transform;
  transition: transform 0.1s ease-in-out;
}

.cursor {
  position: absolute;
  top: 0; left: 0;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  &-active { opacity: 1; }
  &-circle-black, &-circle-white {
    width: 26px; height: 26px; border-radius: 50%;
  }
  &-circle-black { border: 4px solid var(--color-text-400); }
  &-circle-white { border: 4px solid var(--color-white-400); }
  &-arrow, &-arrow-external {
    width: 54px; height: 54px;
    background-color: var(--color-accent-400, var(--color-orange-400));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.1s ease-in-out, opacity 0.1s ease-in-out;
  }
  &-arrow-icon, &-arrow-external-icon {
    color: var(--color-accent-text-400, var(--color-white-400));
    --icon-color: var(--color-accent-text-400, var(--color-white-400));
    width: 24px;
  }
  &-arrow-external-icon { transform: rotate(-45deg); }
}
</style>
