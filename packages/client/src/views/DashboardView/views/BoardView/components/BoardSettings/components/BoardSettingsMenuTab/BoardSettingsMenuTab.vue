<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';

const tab = defineModel<BoardSettingsTabs>({ required: true });

const { t } = useTranslation();
</script>

<template>
  <v-tabs
    v-model="tab"
    hide-slider
    direction="vertical"
  >
    <v-tab
      :text="t('board.settingsMenu.tabNames.MENU')"
      :value="BoardSettingsTabs.MENU"
      class="d-none"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.ABOUT_BOARD')"
      :value="BoardSettingsTabs.ABOUT_BOARD"
      class="d-flex justify-center"
      prepend-icon="mdi-information-outline"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.BOARD_LAST_ACTIVITY')"
      :value="BoardSettingsTabs.BOARD_LAST_ACTIVITY"
      class="d-flex justify-center"
      prepend-icon="mdi-format-list-bulleted"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.BOARD_LABELS')"
      :value="BoardSettingsTabs.BOARD_LABELS"
      class="d-flex justify-center"
      prepend-icon="mdi-label-outline"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.BOARD_COLOR')"
      :value="BoardSettingsTabs.BOARD_COLOR"
      class="d-flex justify-center"
      prepend-icon="mdi-palette-outline"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.BOARD_MEMBERS')"
      :value="BoardSettingsTabs.BOARD_MEMBERS"
      class="d-flex justify-center"
      prepend-icon="mdi-account-multiple-outline"
    />
    <v-tab
      :text="t('board.settingsMenu.tabNames.DELETE_BOARD')"
      :value="BoardSettingsTabs.DELETE_BOARD"
      class="d-flex justify-center"
      prepend-icon="mdi-trash-can-outline"
    />
  </v-tabs>
</template>
