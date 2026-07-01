<script setup lang="ts">
import Clickable from "../Clickable.vue";
import Link from "../Link.vue";
import { t } from "../../i18n/utils/translate";
import { locale } from "../../i18n/store";
</script>

<template>
  <div class="footer-top-links-legal">
    <Clickable renderAs="div">
      <Link
        :href="locale === 'es' ? '/es/privacy' : '/privacy'"
        class="footer-link"
        :external="true"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
        >{{ t("privacy") }}</Link
      >
    </Clickable>
    <Clickable renderAs="div">
      <Link
        :href="locale === 'es' ? '/es/legal' : '/legal'"
        class="footer-link children-unclickable"
        :external="true"
        data-cursor="circle-white"
        data-sound="click"
        data-hoversound="hover"
        >{{ t("legal") }}</Link
      >
    </Clickable>
  </div>
</template>

<style scoped lang="scss">
.footer-top-links-legal {
  display: flex;
  flex-direction: row;
  gap: var(--space-md);
}

.footer-link {
  font-weight: 700;
}
</style>
