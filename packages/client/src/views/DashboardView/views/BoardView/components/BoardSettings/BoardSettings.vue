<script setup lang="ts">
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import type OverlayScrollbars from 'overlayscrollbars';

import DialogContent from '@components/DialogContent';
import BoardSettingsTabs from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsTabs';

const scrollbarOptions: OverlayScrollbars.Options = {
  autoUpdate: true,
  className: 'os-theme-dark',
  overflowBehavior: {
    x: 'hidden',
  },
};
</script>

<template>
  <dialog-content class="px-1 py-4">
    <overlay-scrollbars-component
      class="h-100"
      :options="scrollbarOptions"
    >
      <board-settings-tabs />
    </overlay-scrollbars-component>
  </dialog-content>
</template>
