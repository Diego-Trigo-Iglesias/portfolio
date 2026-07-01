<script setup lang="ts">
import Clickable from "../Clickable.vue";
import Link from "../Link.vue";
import { t } from "../../i18n/utils/translate";

const showAttribution = import.meta.env.VITE_SHOW_ATTRIBUTION !== "false";
</script>

<template>
  <div class="footer-credits">
    <div v-if="showAttribution" class="footer-credits-built">
      <p>{{ t("original-concept-by") }}</p>
      <Clickable renderAs="div">
        <Link
          href="https://david-hckh.com"
          class="footer-link children-unclickable"
          external
          data-cursor="circle-white"
        >
          David Heckhoff
        </Link>
      </Clickable>
    </div>
    <p>&copy; {{ new Date().getFullYear() }} Diego Trigo Iglesias</p>
  </div>
</template>

<style scoped lang="scss">
.footer-credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  font-size: var(--font-size-sm);
  text-align: center;

  &-built {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-xxs);
  }
}

.footer-link {
  font-weight: 700;
}
</style>
