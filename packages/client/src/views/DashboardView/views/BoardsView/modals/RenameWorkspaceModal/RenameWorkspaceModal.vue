<script setup lang="ts">
import { useWorkspaceSettingsModalsContext } from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';
import DialogContent from '@components/DialogContent';
import RenameWorkspaceForm from '@views/DashboardView/views/BoardsView/forms/RenameWorkspaceForm';

const { renameModal: { isModalOpen } } = useWorkspaceSettingsModalsContext();
</script>

<template>
  <v-dialog v-model="isModalOpen">
    <dialog-content>
      <rename-workspace-form />
    </dialog-content>
  </v-dialog>
</template>
