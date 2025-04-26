<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

const error = ref<Error | null>(null);

onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

<template>
  <div>
    <div v-if="error">
      <pre>{{ error.message }}</pre>
    </div>
    <slot v-else />
  </div>
</template>
