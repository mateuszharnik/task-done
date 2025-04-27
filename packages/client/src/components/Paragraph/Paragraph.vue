<script setup lang="ts">
import type { HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{ class?: HTMLAttributes['class'] }>(), { class: 'text-subtitle-2' });
</script>

<template>
  <p :class="props.class">
    <slot />
  </p>
</template>
