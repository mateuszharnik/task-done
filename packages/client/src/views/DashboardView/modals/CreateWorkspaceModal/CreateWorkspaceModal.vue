<script setup lang="ts">
import { useCreateWorkspaceModalContext } from '@views/DashboardView/contexts/CreateWorkspaceModalContext';
import CreateWorkspaceForm from '@views/DashboardView/forms/CreateWorkspaceForm';
import DialogContent from '@components/DialogContent';

const { isModalOpen } = useCreateWorkspaceModalContext();
</script>

<template>
  <v-dialog v-model="isModalOpen">
    <dialog-content>
      <create-workspace-form />
    </dialog-content>
  </v-dialog>
</template>
