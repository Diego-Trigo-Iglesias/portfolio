<script setup lang="ts">
import { t } from "../../../../i18n/utils/translate";

import type { ProjectPreview } from "../../../../content/types";

defineProps<{
  preview?: ProjectPreview;
}>();
</script>

<template>
  <div class="preview-card-content">
    <template v-if="preview">
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ preview.title }}</h3>
        <p class="preview-card-description">{{ preview.description }}</p>
      </div>
    </template>
    <template v-else>
      <div class="preview-card-copys">
        <h3 class="preview-card-title">{{ t("start-a-new-project") }}</h3>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.preview-card {
  &-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
    padding-top: var(--space-xs);
  }

  &-copys {
    display: flex;
    flex-direction: column;
  }

  &-title {
    font-size: var(--font-size-title-xs);
    font-weight: 700;
    color: var(--color-text-400);
  }

  &-description {
    font-size: var(--font-size-md);
    color: var(--color-text-300);
    font-weight: 500;
  }
}
</style>
