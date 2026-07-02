<script setup lang="ts">
import Banner from "../../../components/Banner.vue";
import { preloaderVisible } from "../../../composables/usePreloader";
import { t } from "../../../i18n/utils/translate";
</script>

<template>
  <div class="hero">
    <div class="hero-content grid">
      <div class="hero-content-inner" id="hero-content-inner">
        <div class="hero-content-copys">
          <h1 class="hero-title">Diego<br />Trigo Iglesias</h1>
          <Banner class="hero-banner" :copy="t('job-title')" v-if="!preloaderVisible" animated />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero {
  max-height: calc(var(--lvh) * 100);
  height: calc(var(--lvh) * 100);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  &-content {
    align-items: center;
    justify-content: center;
    height: 46%;
    min-height: fit-content;

    @media (max-width: 839px) and (orientation: portrait) {
      height: auto;
      min-height: 50%;
      padding-top: var(--space-xxl);
      padding-bottom: var(--space-lg);
    }

    @include mixins.landscape {
      height: 100%;

      @include mixins.mq("md") {
        padding-bottom: 30%;
      }

      @include mixins.mq("lg") {
        padding-bottom: 5%;
      }
    }

    &-inner {
      transform-origin: center center;
      grid-column: 1 / 13;
      gap: var(--space-xxl);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      max-width: calc(100% - var(--space-outer) * 2);
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      @include mixins.landscape {
        left: 0;
        transform: translateX(0);
        grid-column: 2 / 13;
        width: fit-content;
      }
    }

    &-copys {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
      position: relative;

      @include mixins.mq("md") {
        gap: var(--space-md);
      }
    }

    &-button {
      width: fit-content;
    }
  }

  &-title {
    font-weight: 900;
    letter-spacing: 0.02em;
    font-size: var(--font-size-title-lg);
    overflow-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    max-width: 100%;

    @media (max-width: 399px) {
      font-size: 28px;
      letter-spacing: 0.01em;
    }

    @media (min-width: 400px) and (max-width: 479px) {
      font-size: 32px;
    }

    @include mixins.landscape {
      font-size: var(--font-size-title-lg);
    }

    @include mixins.landscape-large {
      @include mixins.mq("sm") {
        font-size: var(--font-size-title-xl);
      }

      @include mixins.mq("xl") {
        font-size: var(--font-size-title-xxl);
      }
    }
  }

  &-banner {
    position: absolute;
    bottom: -16px;
    right: -8px;
    z-index: 10;
    transform: rotate(-5deg);

    @include mixins.mq("sm") {
      right: -12px;
      bottom: -20px;
    }

    @include mixins.mq("md") {
      right: -18px;
      bottom: -24px;
    }

    @include mixins.mq("lg") {
      right: -24px;
      bottom: -28px;
    }

    @include mixins.landscape {
      bottom: 0;
      right: -16px;
      transform: rotate(-5deg) translate(0, 65%);

      @include mixins.mq("sm") {
        right: -24px;
        transform: rotate(-5deg) translate(0, 70%);
      }

      @include mixins.mq("lg") {
        right: -32px;
        transform: rotate(-5deg) translate(0, 80%);
      }
    }
  }
}
</style>
