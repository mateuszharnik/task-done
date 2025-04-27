<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import type { Board } from '@views/DashboardView/types/boardTypes';
import Paragraph from '@components/Paragraph';
import SidebarBoardsList from '@views/DashboardView/views/BoardsView/components/SidebarSection/components/SidebarBoardsList';
import { BoardColors } from '@constants/boardConstants';

const { t } = useTranslation();

const boards: Board[] = [{
  id: 1,
  name: 'React',
  description: 'Lorem ipsum dolor sit amet.',
  color: BoardColors.PINK,
  isPrivate: true,
}, {
  id: 2,
  name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem.',
  color: BoardColors.PINK,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem.',
  isPrivate: false,
}];
</script>

<template>
  <div class="sidebar-section">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title
          min-height="48px"
          max-height="48px"
          class="pa-2 mb-2 font-weight-bold"
        >
          <v-icon
            icon="mdi-clipboard-clock-outline"
            size="18px"
            class="mr-2"
          />
          {{ t('boards.recentlyUsedBoards.TITLE') }}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="sidebar-expansion-panel-text">
          <sidebar-boards-list
            v-if="boards.length"
            :boards="boards"
          />
          <paragraph
            v-else
            class="text-caption text-center px-2 text-grey-darken-2"
          >
            {{ t('boards.recentlyUsedBoards.EMPTY_STATE') }}
          </paragraph>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title
          min-height="48px"
          max-height="48px"
          class="pa-2 mb-2 font-weight-bold"
        >
          <v-icon
            icon="mdi-heart-outline"
            size="18px"
            class="mr-2"
          />
          {{ t('boards.favoriteBoards.TITLE') }}
        </v-expansion-panel-title>
        <v-expansion-panel-text class="sidebar-expansion-panel-text">
          <sidebar-boards-list
            v-if="boards.length"
            :boards="boards"
          />
          <paragraph
            v-else
            class="text-caption text-center px-2 text-grey-darken-2"
          >
            {{ t('boards.favoriteBoards.EMPTY_STATE') }}
          </paragraph>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-section {
  min-width: 220px;
  width: 220px;
  margin-top: 55px;
}
</style>

<style lang="scss">
.sidebar-expansion-panel-text {
  .v-expansion-panel-text__wrapper {
    padding: 0px;
  }
}
</style>
