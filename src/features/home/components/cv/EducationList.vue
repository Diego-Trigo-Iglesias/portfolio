<script setup lang="ts">
import type { Education } from "../../../../content/cv/education";

defineProps<{
  items: Education[];
}>();
</script>

<template>
  <div class="education-list">
    <article v-for="(item, index) in items" :key="index" class="education-card">
      <div class="education-icon">
        <span class="education-icon-inner">🎓</span>
      </div>
      <div class="education-body">
        <h3 class="education-degree">{{ item.degree }}</h3>
        <p class="education-institution">{{ item.institution }}</p>
        <span class="education-period">{{ item.period }}</span>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.education-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background-200, #1e293b);
  border-radius: 8px;
  border: 1px solid var(--color-background-300, #334155);
}

.education-icon {
  flex-shrink: 0;
}

.education-icon-inner {
  font-size: 1.5rem;
}

.education-body {
  flex: 1;
}

.education-degree {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-100, #f8fafc);
  margin: 0;
}

.education-institution {
  font-size: 0.9rem;
  color: var(--color-primary-400, #0ea5e9);
  margin: 0.25rem 0;
}

.education-period {
  font-size: 0.85rem;
  color: var(--color-text-300, #94a3b8);
}
</style>
