<script setup lang="ts">
import type { Education } from "../../../../content/cv/education";

defineProps<{
  items: Education[];
}>();
</script>

<template>
  <div class="education-list">
    <article v-for="(item, index) in items" :key="index" class="education-card">
      <div class="education-icon" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/>
        </svg>
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
  padding: 1.25rem 1.5rem;
  background: var(--color-background-200);
  border-radius: 12px;
  border: 1px solid var(--color-grayscale-400);
  transition: border-color 0.2s, transform 0.2s;
}

.education-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-1px);
}

.education-icon {
  flex-shrink: 0;
  color: var(--color-accent);
  margin-top: 2px;
}

.education-body {
  flex: 1;
}

.education-degree {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-100);
  margin: 0;
  line-height: 1.4;
}

.education-institution {
  font-size: 0.9rem;
  color: var(--color-accent);
  margin: 0.25rem 0;
  font-weight: 500;
}

.education-period {
  font-size: 0.85rem;
  color: var(--color-text-300);
}
</style>
