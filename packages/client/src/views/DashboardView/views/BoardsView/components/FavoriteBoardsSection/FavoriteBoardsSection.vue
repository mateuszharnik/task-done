<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import type { Board } from '@views/DashboardView/types/boardTypes';
import Heading from '@components/Heading';
import BoardsList from '@views/DashboardView/views/BoardsView/components/BoardsList';
import { BoardColors } from '@constants/boardConstants';

const { t } = useTranslation();

const boards: Board[] = [{
  id: 1,
  name: 'React',
  description: '',
  color: BoardColors.PINK,
  isPrivate: true,
}];
</script>

<template>
  <div class="mb-5">
    <heading
      tag="h3"
      class="text-h5 font-weight-bold mb-4"
    >
      {{ t('boards.favoriteBoards.TITLE') }}
    </heading>
    <v-row>
      <boards-list :boards="boards" />
    </v-row>
  </div>
</template>
