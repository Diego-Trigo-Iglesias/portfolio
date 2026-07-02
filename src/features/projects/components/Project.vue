<script setup lang="ts">
import { projectId, projectVisible, recentProjectId } from "../../../composables/useRouteObserver";
import { isTransitioning } from "../../../composables/useProjectTransition";
import { ref, watch } from "vue";
import { projectModules } from "../../../content/projects";
import ProjectContentComponent from "./ProjectContent.vue";
import Footer from "../../../components/Footer.vue";
import { locale } from "../../../i18n/store";
import { lenis } from "../../../composables/useScroll";

import type { Locale } from "../../../i18n/types";
import type { ProjectContent } from "../../../content/types";

const loading = ref(true);
const content = ref<ProjectContent | null>(null);
const error = ref<Error | null>(null);

const fetchProject = async (slug: string | undefined) => {
  if (!slug) return;
  loading.value = true;
  error.value = null;
  try {
    const projectData = await projectModules[locale.value as Locale][slug]?.default;
    if (projectData) {
      content.value = projectData as unknown as ProjectContent;
    } else {
      error.value = new Error(`Project ${slug} not found`);
    }
  } catch (err) {
    error.value = new Error(`Failed to fetch project ${slug}`);
  } finally {
    loading.value = false;
  }
};

watch(
  [recentProjectId, locale],
  () => {
    if (recentProjectId.value) {
      fetchProject(recentProjectId.value);
    }
  },
  { immediate: true },
);

watch(
  [projectId, isTransitioning, locale],
  () => {
    if (!projectId.value || isTransitioning.value) return;
    lenis.value?.scrollTo(0, { immediate: true });
  },
  { immediate: true },
);
</script>

<template>
  <div
    ref="projectRef"
    :class="[
      'project',
      recentProjectId !== null && `project-${recentProjectId}`,
      isTransitioning && `project-transitioning`,
      projectVisible && `project-visible`,
    ]"
  >
    <div :class="['project-content-wrapper', projectVisible && `project-content-wrapper-visible`]">
      <div v-if="error" class="project-error">
        <p>{{ error.message }}</p>
        <button @click="fetchProject(recentProjectId ?? undefined)">Reintentar</button>
      </div>
      <ProjectContentComponent
        v-else-if="content && recentProjectId && projectVisible"
        :content="content"
        :projectId="recentProjectId"
      />
      <Footer :class="['project-footer', `project-${recentProjectId}`]"></Footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project {
  min-height: calc(var(--lvh) * 100);
  background-color: var(--color-background-300);
  max-width: calc(var(--lvw) * 100);
  overflow: hidden;

  &-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-out;

    &-visible {
      opacity: 1;
    }
  }

  &-footer {
    position: relative;
    margin-top: auto;
    color: var(--color-text-400);
  }

  ::selection {
    background: var(--color-accent-400);
    color: var(--color-accent-text-400);
    text-shadow: none;
  }

  ::-moz-selection {
    background: var(--color-accent-400);
    color: var(--color-accent-text-400);
    text-shadow: none;
  }

  &-error {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
    color: var(--color-text-400);
    text-align: center;

    button {
      margin-top: 1rem;
      padding: 0.75rem 2rem;
      background: var(--color-accent-400);
      color: var(--color-accent-text-400);
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1rem;
    }
  }
}
</style>
