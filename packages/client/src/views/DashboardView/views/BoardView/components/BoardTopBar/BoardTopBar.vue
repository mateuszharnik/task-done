<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

import { BoardTopBarColorClasses } from '@constants/boardConstants';
import type { Board } from '@views/DashboardView/types/boardTypes';
import Paragraph from '@components/Paragraph';
import BoardSettingsModalContext from '@views/DashboardView/views/BoardView/contexts/BoardSettingsModalContext';
import BoardSettingsButton from '@views/DashboardView/views/BoardView/components/BoardTopBar/components/BoardSettingsButton';
import BoardVisibilityButton from '@views/DashboardView/views/BoardView/components/BoardTopBar/components/BoardVisibilityButton';
import BackToWorkspaceButton from '@views/DashboardView/views/BoardView/components/BoardTopBar/components/BackToWorkspaceButton';
import SearchTasksButton from '@views/DashboardView/views/BoardView/components/BoardTopBar/components/SearchTasksButton';

defineProps<{ board: Board }>();

const { xs } = useDisplay();

const buttonSize = computed(() => (xs.value ? 'small' : 'x-small'));
</script>

<template>
  <board-settings-modal-context>
    <v-sheet
      class="width-100 py-2 px-2 d-flex align-center justify-space-between"
      :color="BoardTopBarColorClasses[board.color]"
    >
      <div class="d-flex align-center mr-2 text-truncate">
        <back-to-workspace-button :size="buttonSize" />
        <board-visibility-button
          v-if="!xs"
          :is-private="board.isPrivate"
        />
        <paragraph class="text-truncate font-weight-bold">
          {{ board.name }}
        </paragraph>
      </div>
      <search-tasks-button
        :size="buttonSize"
        :xs="xs"
      />
      <board-settings-button :size="buttonSize" />
    </v-sheet>
  </board-settings-modal-context>
</template>
