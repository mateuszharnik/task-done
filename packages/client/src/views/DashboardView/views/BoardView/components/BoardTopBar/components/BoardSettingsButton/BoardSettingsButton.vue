<script setup lang="ts">
import { useBoardSettingsModalContext } from '@views/DashboardView/views/BoardView/contexts/BoardSettingsModalContext';

defineProps<{ size: string }>();

const { openModal } = useBoardSettingsModalContext();
</script>

<template>
  <v-btn
    :size="size"
    variant="tonal"
    icon="mdi-cog-outline"
    class="rounded-lg"
    @click="openModal"
  />
</template>
