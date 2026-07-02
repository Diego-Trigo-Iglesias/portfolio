<script setup lang="ts">
import Header from "./components/Header.vue";
import { useTranslations } from "./i18n/composables/useTranslations";
import { usePreloader } from "./composables/usePreloader";
import { projectVisible, useRouteObserver } from "./composables/useRouteObserver";
import { isTransitioning, useProjectTransition } from "./composables/useProjectTransition";
import Home from "./features/home/components/Home.vue";
import Project from "./features/projects/components/Project.vue";
import { useScroll } from "./composables/useScroll";
import ProjectBackground from "./features/projects/components/ProjectBackground.vue";

useTranslations();
usePreloader();
useScroll();
useRouteObserver();
useProjectTransition();
</script>

<template>
  <Header />

  <!-- main page -->
  <div :class="{ 'home-wrapper-projectIsReady': projectVisible }">
    <Home />
  </div>

  <!-- overlay page -->
  <ProjectBackground />
  <div
    class="project-wrapper"
    :class="{
      'project-wrapper-visible': projectVisible,
      'project-wrapper-transitioning': isTransitioning,
    }"
  >
    <div class="project-content">
      <Project />
    </div>
  </div>
</template>

<style lang="scss">
.home-wrapper-projectIsReady {
  visibility: hidden;
  position: fixed;
  inset: 0;
}

.project-wrapper {
  position: fixed; /* <-- key */
  inset: 0;
  overflow: hidden; /* new page must NOT scroll during transition */
  z-index: var(--z-index-layout-project);
  visibility: hidden;
  pointer-events: none; /* avoid interaction before fully opened */

  &-visible {
    visibility: visible;
    pointer-events: auto;
    position: static;
  }
}

.project-content {
  width: 100%;
  height: 100%;
  overflow: hidden; /* ensure no scroll container */
}
</style>
