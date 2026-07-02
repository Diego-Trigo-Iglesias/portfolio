<script setup lang="ts">
import type { Certification } from "../../../../content/cv/certifications";

defineProps<{
  items: Certification[];
}>();
</script>

<template>
  <div class="cert-grid">
    <article v-for="(cert, index) in items" :key="index" class="cert-card">
      <div class="cert-header">
        <svg class="cert-badge" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.5 21.8l-1.2-3.8h-4.6l-1.2 3.8"/>
          <path d="M6.5 16l4.2-1.5"/>
        </svg>
        <span class="cert-issuer">{{ cert.issuer }}</span>
      </div>
      <h3 class="cert-title">{{ cert.title }}</h3>
      <span class="cert-date">{{ cert.date }}</span>
    </article>
  </div>
</template>

<style scoped lang="scss">
.cert-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @include mixins.mq("sm") {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }
}

.cert-card {
  padding: 1.25rem 1.5rem;
  background: var(--color-background-200);
  border-radius: 12px;
  border: 1px solid var(--color-grayscale-400);
  transition: border-color 0.2s, transform 0.2s;
}

.cert-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-1px);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.cert-badge {
  color: var(--color-accent);
  flex-shrink: 0;
}

.cert-issuer {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cert-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-100);
  margin: 0.25rem 0;
  line-height: 1.4;
}

.cert-date {
  font-size: 0.8rem;
  color: var(--color-text-300);
}
</style>
