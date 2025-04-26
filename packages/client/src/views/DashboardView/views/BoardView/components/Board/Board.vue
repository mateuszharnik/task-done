<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDisplay } from 'vuetify';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import type OverlayScrollbars from 'overlayscrollbars';

import type { Board } from '@views/DashboardView/types/boardTypes';
import type { List } from '@views/DashboardView/types/listTypes';
import { BoardColorsClasses, BoardColors } from '@constants/boardConstants';
import MaxViewHeight from '@components/MaxViewHeight';
import CreateListButton from '@views/DashboardView/views/BoardView/components/Board/components/CreateListButton';
import TaskListsList from '@views/DashboardView/views/BoardView/components/Board/components/TaskListsList';
import TaskListContainer from '@views/DashboardView/views/BoardView/components/Board/components/TaskListContainer';

const props = defineProps<{ board: Board }>();

const { xs } = useDisplay();

const defaultScrollbarOptions = { autoUpdate: true, overflowBehavior: { y: 'hidden' } };

const getScrollbarColor = (color: BoardColors) => (
  color === BoardColors.YELLOW || color === BoardColors.LIGHT ? 'os-theme-dark' : 'os-theme-light'
);

const scrollbarOptions = ref<OverlayScrollbars.Options>({
  ...defaultScrollbarOptions, className: getScrollbarColor(props.board.color),
} as OverlayScrollbars.Options);

watch(() => props.board.color, (color) => {
  scrollbarOptions.value = {
    ...defaultScrollbarOptions, className: getScrollbarColor(color),
  } as OverlayScrollbars.Options;
});

const lists: List[] = [
  {
    id: 1,
    name: 'Do zrobienia',
  },
  {
    id: 2,
    name: 'W trakcie',
  },
  {
    id: 3,
    name: 'Zrobione',
  },
];
</script>

<template>
  <max-view-height :offset-height="xs ? 120 : 112">
    <v-sheet
      :color="BoardColorsClasses[board.color]"
      class="pa-4 h-100"
    >
      <overlay-scrollbars-component
        :options="scrollbarOptions"
        class="h-100"
      >
        <v-sheet
          :color="BoardColorsClasses[board.color]"
          width="fit-content"
          class="d-flex ga-5 px-1 pb-5 pt-2 h-100"
        >
          <task-lists-list :lists="lists" />
          <task-list-container>
            <create-list-button />
          </task-list-container>
        </v-sheet>
      </overlay-scrollbars-component>
    </v-sheet>
  </max-view-height>
</template>
