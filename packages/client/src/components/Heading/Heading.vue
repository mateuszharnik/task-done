<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  class?: HTMLAttributes['class'];
}>(), {
  tag: 'h2',
  class: 'text-center text-h4 font-weight-bold mb-4',
});
</script>

<template>
  <component
    :is="tag"
    :class="props.class"
  >
    <slot />
  </component>
</template>
