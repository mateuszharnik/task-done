<script setup lang="ts">
import type { List } from '@views/DashboardView/types/listTypes';
import TaskListsListItem from '@views/DashboardView/views/BoardView/components/Board/components/TaskListsListItem';

withDefaults(defineProps<{ lists?: List[] }>(), { lists: () => [] });
</script>

<template>
  <task-lists-list-item
    v-for="list in lists"
    :key="list.id"
    :list="list"
  />
</template>
