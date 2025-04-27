<script setup lang="ts">
import type { Workspace } from '@views/DashboardView/types/workspaceTypes';
import WorkspacesListItem from '@views/DashboardView/views/BoardsView/components/WorkspacesSection/components/WorkspacesListItem';

withDefaults(defineProps<{ workspaces?: Workspace[] }>(), { workspaces: () => [] });
</script>

<template>
  <workspaces-list-item
    v-for="workspace in workspaces"
    :key="workspace.id"
    :workspace="workspace"
  />
</template>
