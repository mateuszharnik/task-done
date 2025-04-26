<script setup lang="ts">
import type { Board } from '@views/DashboardView/types/boardTypes';
import SidebarBoardsListItem from '@views/DashboardView/views/BoardsView/components/SidebarSection/components/SidebarBoardsListItem';

withDefaults(defineProps<{ boards?: Board[] }>(), { boards: () => [] });
</script>

<template>
  <sidebar-boards-list-item
    v-for="board in boards"
    :key="board.id"
    :board="board"
  />
</template>
