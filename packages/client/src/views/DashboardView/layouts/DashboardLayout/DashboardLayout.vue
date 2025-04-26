<script setup lang="ts">
import Navigation from '@views/DashboardView/components/Navigation';
import CreateWorkspaceModalContext from '@views/DashboardView/contexts/CreateWorkspaceModalContext';
</script>

<template>
  <create-workspace-modal-context>
    <navigation />
    <v-main class="transition-none">
      <slot />
    </v-main>
  </create-workspace-modal-context>
</template>
