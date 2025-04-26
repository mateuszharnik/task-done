<script setup lang="ts">
import { useAttrs } from 'vue';

import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';
import Heading from '@components/Heading';

const attrs = useAttrs();

const emit = defineEmits<{ changeTab: [value: BoardSettingsTabs] }>();

const props = withDefaults(defineProps<{
  tabName: string;
  isTabTitleVisible?: boolean;
  tabTitle?: string;
  backButtonTabName?: BoardSettingsTabs;
}>(), {
  isTabTitleVisible: true,
  tabTitle: '',
  backButtonTabName: BoardSettingsTabs.MENU,
});

const handleChangeTab = () => emit('changeTab', props.backButtonTabName);
</script>

<template>
  <v-tabs-window-item
    :value="tabName"
    class="h-100"
  >
    <v-card
      elevation="0"
      class="d-flex flex-column pa-0 h-100"
    >
      <v-card-title
        v-if="isTabTitleVisible"
        class="d-flex align-center ga-3 pa-0 mb-4"
      >
        <v-btn
          icon="mdi-arrow-left"
          class="rounded-lg"
          variant="tonal"
          size="x-small"
          @click="handleChangeTab"
        />
        <heading class="text-h6 font-weight-bold">
          {{ tabTitle }}
        </heading>
      </v-card-title>
      <v-card-text
        v-bind="attrs"
        class="pa-0"
      >
        <slot />
      </v-card-text>
    </v-card>
  </v-tabs-window-item>
</template>
