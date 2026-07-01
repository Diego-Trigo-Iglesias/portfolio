<script setup lang="ts">
/**
 * Safe text renderer that parses <br/> and <br/><br/> into paragraphs
 * and line breaks without using v-html.
 */
import { computed } from "vue";

const props = defineProps<{
  text: string;
}>();

const paragraphs = computed(() => {
  return props.text
    .split(/<br\s*\/?>\s*<br\s*\/?>/)
    .map((p) => p.replace(/<br\s*\/?>/g, "\n"));
});
</script>

<template>
  <span class="formatted-text">
    <span
      v-for="(para, pIdx) in paragraphs"
      :key="pIdx"
      class="formatted-text-para"
    >{{ para }}</span>
  </span>
</template>

<style scoped>
.formatted-text {
  display: inline;
}

.formatted-text-para {
  display: block;
  white-space: pre-wrap;
}

.formatted-text-para + .formatted-text-para {
  margin-top: 1em;
}
</style>
