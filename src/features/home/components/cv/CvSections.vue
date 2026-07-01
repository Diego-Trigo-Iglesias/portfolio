<script setup lang="ts">
import { experiences } from "../../../../content/cv/experience";
import { educationList } from "../../../../content/cv/education";
import { certifications } from "../../../../content/cv/certifications";
import ExperienceTimeline from "./ExperienceTimeline.vue";
import EducationList from "./EducationList.vue";
import CertificationList from "./CertificationList.vue";
</script>

<template>
  <section class="cv-sections">
    <h2 class="cv-title">Experiencia</h2>
    <ExperienceTimeline :experiences="experiences" />

    <h2 class="cv-title cv-title-spaced">Formación</h2>
    <EducationList :items="educationList" />

    <h2 class="cv-title cv-title-spaced">Certificaciones</h2>
    <CertificationList :items="certifications" />
  </section>
</template>

<style scoped lang="scss">
.cv-sections {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.cv-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-100, #f8fafc);
  margin: 0 0 1.5rem;
  position: relative;
}

.cv-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: var(--color-primary-400, #0ea5e9);
  margin-top: 0.5rem;
  border-radius: 2px;
}

.cv-title-spaced {
  margin-top: 3rem;
}
</style>
