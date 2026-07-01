<script setup lang="ts">
import Link from "../../../components/Link.vue";
import PreviewImage from "./preview/PreviewImage.vue";
import PreviewInfo from "./preview/PreviewInfo.vue";
import { t } from "../../../i18n/utils/translate";
import { social } from "../../../content/social";

import type { ProjectPreview } from "../../../content/types";

defineProps<{
  preview?: ProjectPreview;
}>();
</script>

<template>
  <Link
    class="preview-card children-unclickable"
    :to="`/project/${props.preview.slug}`"
    :aria-label="t('switch-to-project', { project: props.preview.title })"
    data-cursor="arrow"
    data-sound="click"
    data-hoversound="hover"
    v-if="props.preview"
  >
    <PreviewImage :preview="props.preview" />
    <PreviewInfo :preview="props.preview" />
  </Link>

  <Link
    v-else
    class="preview-card children-unclickable"
    data-cursor="arrow-external"
    data-hoversound="hover"
    external
    :href="social[0].url"
  >
    <PreviewImage />
    <PreviewInfo />
  </Link>
</template>

<style scoped lang="scss">
.preview-card {
  --hover: 0;
  position: relative;
  border-radius: var(--radius-xl);
  z-index: var(--z-index-layout);

  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    background-color: var(--color-grayscale-400);
    border-radius: var(--radius-xl);
    z-index: -1;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;
  }

  @include mixins.hover {
    &:hover {
      --hover: 1;

      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
