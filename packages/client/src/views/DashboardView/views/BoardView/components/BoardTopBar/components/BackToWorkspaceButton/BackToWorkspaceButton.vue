<script setup lang="ts">
import { ROUTES } from '@constants/routesConstants';

defineProps<{ size: string }>();
</script>

<template>
  <v-btn
    :to="ROUTES.DASHBOARD.BOARDS.PATH"
    :size="size"
    class="rounded-lg mr-2"
    variant="tonal"
    icon="mdi-arrow-left"
  />
</template>
