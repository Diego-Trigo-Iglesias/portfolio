<script setup lang="ts">
import { computed } from "vue";
import { locale } from "../../../../i18n/store";
import { t } from "../../../../i18n/utils/translate";
import { experiencesES, experiencesEN } from "../../../../content/cv/experience";
import { educationListES, educationListEN } from "../../../../content/cv/education";
import { certificationsES, certificationsEN } from "../../../../content/cv/certifications";
import ExperienceTimeline from "./ExperienceTimeline.vue";
import EducationList from "./EducationList.vue";
import CertificationList from "./CertificationList.vue";

const isES = computed(() => locale.value === "es");

const experiences = computed(() => (isES.value ? experiencesES : experiencesEN));
const educationList = computed(() => (isES.value ? educationListES : educationListEN));
const certifications = computed(() => (isES.value ? certificationsES : certificationsEN));
</script>

<template>
  <section class="cv-sections">
    <h2 class="cv-title">{{ t("experience") }}</h2>
    <ExperienceTimeline :experiences="experiences" />

    <h2 class="cv-title cv-title-spaced">{{ t("education") }}</h2>
    <EducationList :items="educationList" />

    <h2 class="cv-title cv-title-spaced">{{ t("certifications") }}</h2>
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
