<script setup lang="ts">
import Layout from "../../../components/Layout.vue";
import Hero from "./Hero.vue";
import About from "./About.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";
import Footer from "../../../components/Footer.vue";
import CvSections from "./cv/CvSections.vue";
import HeaderHome from "../../../components/HeaderHome.vue";
import ScrollIcon from "../../../components/ScrollIcon.vue";
import { ref, onMounted, onUnmounted, watch, watchEffect } from "vue";
import { animations } from "../../../animations";
import { preloaderVisible } from "../../../composables/usePreloader";
import { projectId, projectVisible } from "../../../composables/useRouteObserver";
import { isTransitioning } from "../../../composables/useProjectTransition";
import { renderer } from "../../../three/core/renderer";
import { useHomeScene } from "../composables/useHomeScene";
import { useHomeScroll } from "../composables/useHomeScroll";
import { useHomeContact } from "../composables/useHomeContact";

const projectsLoaded = ref(false);
const aboutSpacerRef = ref<HTMLElement | null>(null);
const { threeCanvasRef, threeInitialized, initScene, destroyScene } = useHomeScene();
void threeCanvasRef;
const { introRef, isStickyVisible } = useHomeScroll(projectsLoaded);
void introRef;
const { contactRef, contactBottom } = useHomeContact();
void contactRef;

const handleProjectsLoaded = () => { projectsLoaded.value = true; };
onMounted(() => initScene());
onUnmounted(() => destroyScene());

watchEffect((onInvalidate) => {
  if (projectsLoaded && threeInitialized && !preloaderVisible.value) {
    animations.init();
    onInvalidate(() => animations.destroy());
  }
});
watch(projectVisible, (v) => renderer.setIsActive(!v), { immediate: true });
</script>

<template>
  <div :class="['home-wrapper', typeof projectId === 'string' && isTransitioning ? 'home-wrapper-out' : '', typeof projectId !== 'string' && isTransitioning ? 'home-wrapper-in' : '']">
    <ScrollIcon />
    <Layout>
      <div ref="introRef" class="intro-wrapper">
        <div class="intro-sticky" :class="{'intro-sticky-visible':isStickyVisible}" :style="{'--contact-bottom':`${contactBottom}px`}">
          <canvas ref="threeCanvasRef" :class="['three-canvas',{'three-canvas-contact':!isStickyVisible}]" />
          <div :class="{'intro-about-hidden':!isStickyVisible}"><About :spacer-ref="aboutSpacerRef" /></div>
        </div>
        <Hero class="intro-hero" id="hero" />
        <div class="intro-wrapper-spacer"></div>
        <div ref="aboutSpacerRef" class="about-spacer" id="about"></div>
      </div>
      <CvSections />
      <Projects id="projects" @loaded="handleProjectsLoaded" />
      <div ref="contactRef" class="home-contact"><Contact id="contact" v-if="projectsLoaded" /></div>
      <Footer :withSocial="false" />
    </Layout>
  </div>
  <HeaderHome v-if="projectsLoaded" />
</template>

<style scoped lang="scss">
.three-canvas { width: calc(var(--svw) * 100); height: calc(var(--lvh) * 100); max-height: calc(var(--lvh) * 100); position: relative; overflow: hidden; }
.three-canvas-contact { position: absolute; bottom: var(--contact-bottom); left: 0; width: 100%; height: calc(var(--lvh) * 100); max-height: calc(var(--lvh) * 100); }
.home-wrapper { transform-origin: center center; }
.home-wrapper-out { animation: home-wrapper-out var(--transition-route-duration) var(--transition-route-ease); }
.home-wrapper-in { animation: home-wrapper-in var(--transition-route-duration) var(--transition-route-ease); }
.home-contact { width: 100%; min-height: calc(var(--lvh) * 100); max-height: calc(var(--lvh) * 100); }
.about-spacer { max-height: calc(var(--lvh) * 250); min-height: calc(var(--lvh) * 250); }
.intro-wrapper { width: 100%; display: flex; flex-direction: column; }
.intro-wrapper-spacer { display: none; @include mixins.mq("md") { display: block; height: 200px; } }
.intro-hero { position: absolute; top: 0; left: 0; width: 100%; max-height: calc(var(--lvh) * 100); min-height: calc(var(--lvh) * 100); overflow: hidden; }
.intro-about-hidden { visibility: hidden; }
.intro-sticky { top: 0; left: 0; width: 100%; max-height: calc(var(--lvh) * 100); min-height: calc(var(--lvh) * 100); overflow: hidden; z-index: -1; display: flex; align-items: flex-end; }
.intro-sticky-visible { position: sticky; }
@keyframes home-wrapper-out { 0% { transform: scale(1); } 100% { transform: scale(0.95); } }
@keyframes home-wrapper-in { 0% { transform: scale(0.95); } 100% { transform: scale(1); } }
</style>
