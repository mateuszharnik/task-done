<script setup lang="ts">
import { ref, watch } from 'vue';
import { useTranslation } from 'i18next-vue';

import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';
import { useBoardSettingsModalContext } from '@views/DashboardView/views/BoardView/contexts/BoardSettingsModalContext';
import BoardSettingsTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsTab';
import BoardSettingsMenuTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsMenuTab';
import BoardSettingsActivityTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsActivityTab';
import BoardSettingsUpdateColorTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsUpdateColorTab';
import BoardSettingsCreateLabelsTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsCreateLabelsTab';
import BoardSettingsUpdateLabelsTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsUpdateLabelsTab';
import BoardSettingsDeleteBoardTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsDeleteBoardTab';
import BoardSettingsInfoTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsInfoTab';
import BoardSettingsLabelsTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsLabelsTab';
import BoardSettingsMembersTab from '@views/DashboardView/views/BoardView/components/BoardSettings/components/BoardSettingsMembersTab';

const { modalPayload } = useBoardSettingsModalContext();

const { t } = useTranslation();

const tab = ref(BoardSettingsTabs.MENU);

const handleChangeTab = (value: BoardSettingsTabs) => {
  tab.value = value;
};

watch(modalPayload, (payload) => {
  if (payload?.activeTab) tab.value = payload.activeTab;
}, { immediate: true });
</script>

<template>
  <v-tabs-window
    v-model="tab"
    class="board-settings-tabs px-3 min-h-100 d-flex"
  >
    <board-settings-tab
      :tab-name="BoardSettingsTabs.MENU"
      :is-tab-title-visible="false"
    >
      <board-settings-menu-tab v-model="tab" />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.ABOUT_BOARD"
      :tab-title="t('board.settingsMenu.tabNames.ABOUT_BOARD')"
      @change-tab="handleChangeTab"
    >
      <board-settings-info-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.BOARD_LAST_ACTIVITY"
      :tab-title="t('board.settingsMenu.tabNames.BOARD_LAST_ACTIVITY')"
      @change-tab="handleChangeTab"
    >
      <board-settings-activity-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.BOARD_COLOR"
      :tab-title="t('board.settingsMenu.tabNames.BOARD_COLOR')"
      @change-tab="handleChangeTab"
    >
      <board-settings-update-color-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.BOARD_LABELS"
      :tab-title="t('board.settingsMenu.tabNames.BOARD_LABELS')"
      @change-tab="handleChangeTab"
    >
      <board-settings-labels-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.BOARD_MEMBERS"
      :tab-title="t('board.settingsMenu.tabNames.BOARD_MEMBERS')"
      @change-tab="handleChangeTab"
    >
      <board-settings-members-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.DELETE_BOARD"
      :tab-title="t('board.settingsMenu.tabNames.DELETE_BOARD')"
      @change-tab="handleChangeTab"
    >
      <board-settings-delete-board-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.CREATE_LABELS"
      :tab-title="t('board.settingsMenu.tabNames.CREATE_LABELS')"
      @change-tab="handleChangeTab"
    >
      <board-settings-create-labels-tab />
    </board-settings-tab>
    <board-settings-tab
      :tab-name="BoardSettingsTabs.EDIT_LABELS"
      :tab-title="t('board.settingsMenu.tabNames.EDIT_LABELS')"
      @change-tab="handleChangeTab"
    >
      <board-settings-update-labels-tab />
    </board-settings-tab>
  </v-tabs-window>
</template>

<style lang="scss">
.board-settings-tabs {
  .v-window__container {
    width: 100%;
  }
}
</style>
