<script setup lang="ts">
import ErrorBoundary from '@components/ErrorBoundary';
</script>

<template>
  <error-boundary>
    <v-app>
      <router-view />
    </v-app>
  </error-boundary>
</template>
