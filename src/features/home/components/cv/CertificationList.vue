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
        <span class="cert-icon">✓</span>
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.cert-card {
  padding: 1.25rem;
  background: var(--color-background-200, #1e293b);
  border-radius: 8px;
  border: 1px solid var(--color-background-300, #334155);
  transition: border-color 0.2s;
}

.cert-card:hover {
  border-color: var(--color-primary-400, #0ea5e9);
}

.cert-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.cert-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-primary-600, #1e40af);
  border-radius: 50%;
  font-size: 0.75rem;
  color: white;
}

.cert-issuer {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary-400, #0ea5e9);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.cert-title {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text-100, #f8fafc);
  margin: 0.25rem 0;
  line-height: 1.4;
}

.cert-date {
  font-size: 0.8rem;
  color: var(--color-text-300, #94a3b8);
}
</style>
