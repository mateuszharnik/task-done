<script setup lang="ts">
import { useBoardSettingsModalContext } from '@views/DashboardView/views/BoardView/contexts/BoardSettingsModalContext';
import BoardSettings from '@views/DashboardView/views/BoardView/components/BoardSettings';

const { isModalOpen } = useBoardSettingsModalContext();
</script>

<template>
  <v-dialog
    v-model="isModalOpen"
    height="360px"
  >
    <board-settings />
  </v-dialog>
</template>
