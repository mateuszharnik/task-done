<script setup lang="ts">
import type { Workspace } from '@views/DashboardView/types/workspaceTypes';
import Heading from '@components/Heading';
import BoardsList from '@views/DashboardView/views/BoardsView/components/BoardsList';
import WorkspaceSettingsButton from '@views/DashboardView/views/BoardsView/components/WorkspacesSection/components/WorkspaceSettingsButton';

defineProps<{ workspace: Workspace }>();
</script>

<template>
  <div class="mb-5">
    <div class="d-flex justify-space-between align-center mb-3">
      <heading
        tag="h3"
        class="text-h5 font-weight-bold"
      >
        {{ workspace.name }}
      </heading>
      <workspace-settings-button :id="workspace.id" />
    </div>
    <v-row>
      <boards-list
        :boards="workspace.boards"
        show-create-board-button
      />
    </v-row>
  </div>
</template>
