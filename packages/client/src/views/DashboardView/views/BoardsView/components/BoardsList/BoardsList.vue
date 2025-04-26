<script setup lang="ts">
import type { Board } from '@views/DashboardView/types/boardTypes';
import BoardsListItem from '@views/DashboardView/views/BoardsView/components/BoardsListItem';
import CreateBoardModalContext from '@views/DashboardView/views/BoardsView/contexts/CreateBoardModalContext';
import CreateBoardButton from '@views/DashboardView/views/BoardsView/components/WorkspacesSection/components/CreateBoardButton';

defineOptions({ inheritAttrs: false });

withDefaults(defineProps<{
  showCreateBoardButton?: boolean;
  boards?: Board[];
}>(), {
  showCreateBoardButton: false,
  boards: () => [],
});
</script>

<template>
  <boards-list-item
    v-for="board in boards"
    :key="board.id"
    :board="board"
  />
  <v-col
    v-if="showCreateBoardButton"
    class="board-list-item-column"
    cols="6"
    sm="4"
    md="4"
    lg="3"
  >
    <create-board-modal-context>
      <create-board-button />
    </create-board-modal-context>
  </v-col>
</template>

<style lang="scss" scoped>
.board-list-item-column {
  @media (max-width: 340px) {
    max-width: 100%;
    flex: 0 0 100%;
  }
}
</style>
