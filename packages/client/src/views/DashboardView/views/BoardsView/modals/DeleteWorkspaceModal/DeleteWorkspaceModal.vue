<script setup lang="ts">
import { useWorkspaceSettingsModalsContext } from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';
import DialogContent from '@components/DialogContent';
import DeleteWorkspaceForm from '@views/DashboardView/views/BoardsView/forms/DeleteWorkspaceForm';

const { deleteModal: { isModalOpen } } = useWorkspaceSettingsModalsContext();
</script>

<template>
  <v-dialog v-model="isModalOpen">
    <dialog-content>
      <delete-workspace-form />
    </dialog-content>
  </v-dialog>
</template>
