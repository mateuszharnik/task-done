<script setup lang="ts">
import { resolvePath } from '@utils/routerUtils';
import { ROUTES } from '@constants/routesConstants';
import { BoardColorsClasses, BoardTypesIcons } from '@constants/boardConstants';
import type { Board } from '@views/DashboardView/types/boardTypes';
import useBoardType from '@views/DashboardView/composables/useBoardType';

const props = defineProps<{ board: Board }>();

const { boardType } = useBoardType(props.board.isPrivate);
</script>

<template>
  <v-col
    class="board-list-item-column"
    cols="6"
    sm="4"
    md="4"
    lg="3"
  >
    <v-card
      :to="resolvePath(ROUTES.BOARD.PATH, { id: board.id })"
      :color="BoardColorsClasses[board.color]"
      class="w-100 py-3 px-4"
      height="100px"
    >
      <div class="h-100 position-relative">
        <v-card-item class="pa-0">
          <v-card-title class="font-weight-bold text-subtitle-1">
            {{ board.name }}
          </v-card-title>
          <v-icon
            :icon="BoardTypesIcons[boardType]"
            size="16px"
            class="position-absolute bottom-0"
          />
        </v-card-item>
      </div>
    </v-card>
  </v-col>
</template>
