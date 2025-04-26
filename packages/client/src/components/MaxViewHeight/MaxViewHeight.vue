<script setup lang="ts">
import {
  ref, computed, onMounted, onUnmounted,
} from 'vue';
import { getWindowInnerHeight } from '@utils/sizesUtils';

const props = withDefaults(defineProps<{ offsetHeight?: number }>(), { offsetHeight: 0 });

const height = ref(getWindowInnerHeight(props.offsetHeight));

const divStyles = computed(() => ({
  height: `${height.value}px`,
  ...(props.offsetHeight && { maxHeight: `calc(100vh - ${props.offsetHeight}px` }),
}));

const setHeightOnResize = () => {
  const innerHeight = getWindowInnerHeight(props.offsetHeight);

  if (innerHeight !== height.value) {
    height.value = innerHeight;
  }
};

onMounted(() => {
  window.addEventListener('resize', setHeightOnResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', setHeightOnResize);
});
</script>

<template>
  <div :style="divStyles">
    <slot />
  </div>
</template>
