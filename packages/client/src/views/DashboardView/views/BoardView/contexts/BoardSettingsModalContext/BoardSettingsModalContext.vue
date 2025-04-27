<script setup lang="ts">
import { provide, useAttrs } from 'vue';

import useModal, { type UseModal } from '@composables/useModal';
import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';
import BoardSettingsModal from '@views/DashboardView/views/BoardView/modals/BoardSettingsModal';

const attrs = useAttrs();
const modal = useModal<{ activeTab: BoardSettingsTabs }>();

provide<UseModal<{ activeTab: BoardSettingsTabs }>>('BoardSettingsModalContext', modal);
</script>

<template>
  <slot />
  <board-settings-modal v-bind="attrs" />
</template>
