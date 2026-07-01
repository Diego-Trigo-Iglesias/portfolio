<script setup lang="ts">
import type { Experience } from "../../../../content/cv/experience";

defineProps<{
  experiences: Experience[];
}>();
</script>

<template>
  <div class="timeline">
    <article v-for="(exp, index) in experiences" :key="index" class="timeline-item">
      <div class="timeline-marker">
        <span class="timeline-dot"></span>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-role">{{ exp.role }}</h3>
        <h4 class="timeline-company">{{ exp.company }}</h4>
        <span class="timeline-period">{{ exp.period }}</span>
        <ul class="timeline-description">
          <li v-for="(desc, dIdx) in exp.description" :key="dIdx">{{ desc }}</li>
        </ul>
        <div class="timeline-tech">
          <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary-300, #3b82f6);
}

.timeline-item {
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
}

.timeline-marker {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.timeline-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-primary-400, #0ea5e9);
  border: 2px solid var(--color-background-200, #1e293b);
  margin-left: -1.75rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.timeline-content {
  flex: 1;
}

.timeline-role {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-100, #f8fafc);
  margin: 0;
}

.timeline-company {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-primary-400, #0ea5e9);
  margin: 0.25rem 0;
}

.timeline-period {
  font-size: 0.85rem;
  color: var(--color-text-300, #94a3b8);
}

.timeline-description {
  margin: 0.5rem 0;
  padding-left: 1.25rem;
  list-style: disc;
  font-size: 0.9rem;
  color: var(--color-text-200, #cbd5e1);
  line-height: 1.5;
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.tech-tag {
  padding: 0.2rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 4px;
  background: var(--color-background-300, #1e3a8a);
  color: var(--color-primary-300, #93c5fd);
}
</style>
