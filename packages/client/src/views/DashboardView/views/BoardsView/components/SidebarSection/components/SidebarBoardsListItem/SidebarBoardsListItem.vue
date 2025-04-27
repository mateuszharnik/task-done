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
  <v-card
    :to="resolvePath(ROUTES.BOARD.PATH, { id: board.id })"
    :color="BoardColorsClasses[board.color]"
    class="w-100 pa-2 mb-2 d-flex align-center"
    height="40px"
  >
    <v-card-item class="pa-0 flex-1-1">
      <div class="d-flex align-center">
        <v-icon
          :icon="BoardTypesIcons[boardType]"
          size="12px"
        />
        <v-card-title class="font-weight-bold text-body-2 ml-2 flex-1-1">
          {{ board.name }}
        </v-card-title>
      </div>
    </v-card-item>
  </v-card>
</template>
