<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
import { useDisplay } from 'vuetify';

import Heading from '@components/Heading';
import SidebarSection from '@views/DashboardView/views/BoardsView/components/SidebarSection';
import WorkspacesSection from '@views/DashboardView/views/BoardsView/components/WorkspacesSection';
import RecentlyUsedBoardsSection from '@views/DashboardView/views/BoardsView/components/RecentlyUsedBoardsSection';
import FavoriteBoardsSection from '@views/DashboardView/views/BoardsView/components/FavoriteBoardsSection';
import BoardsEmptyState from '@views/DashboardView/views/BoardsView/components/BoardsEmptyState';

const { t } = useTranslation();
const { mdAndUp } = useDisplay();
</script>

<template>
  <v-container>
    <v-sheet
      class="my-0 mx-auto"
      max-width="1200px"
    >
      <div class="d-flex">
        <div
          v-if="mdAndUp"
          class="d-flex"
        >
          <sidebar-section />
          <v-divider
            class="vertical-divider-height mx-4"
            vertical
          />
        </div>
        <div class="w-100">
          <heading>
            {{ t('boards.TITLE') }}
          </heading>
          <div v-if="true">
            <div v-if="!mdAndUp">
              <recently-used-boards-section />
              <favorite-boards-section />
            </div>
            <workspaces-section />
          </div>
          <div
            v-else
            class="w-100"
          >
            <boards-empty-state />
          </div>
        </div>
      </div>
    </v-sheet>
  </v-container>
</template>

<style lang="scss" scoped>
.vertical-divider-height {
  min-height: calc(100vh - 96px);
}
</style>
