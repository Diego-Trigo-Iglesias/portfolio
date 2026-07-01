<script setup lang="ts">
import ImageText from "./ImageText.vue";
import Text from "./Text.vue";
import List from "./List.vue";
import Media from "./Media.vue";

import type { Component } from "vue";
import type { ProjectComponents, ProjectComponentProps } from "../types";

type Props = ProjectComponentProps & {
  index: number;
};

const { type, props, index } = defineProps<Props>();

const components: Record<keyof ProjectComponents, Component> = {
  imageText: ImageText,
  text: Text,
  list: List,
  media: Media,
};

const Component = components[type];
</script>

<template>
  <Component v-bind="props" :index="index" />
</template>
