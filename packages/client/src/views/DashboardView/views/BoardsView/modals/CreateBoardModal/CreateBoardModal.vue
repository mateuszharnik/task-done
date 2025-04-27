<script setup lang="ts">
import { useCreateBoardModalContext } from '@views/DashboardView/views/BoardsView/contexts/CreateBoardModalContext';
import DialogContent from '@components/DialogContent';
import CreateBoardForm from '@views/DashboardView/views/BoardsView/forms/CreateBoardForm';

const { isModalOpen } = useCreateBoardModalContext();
</script>

<template>
  <v-dialog v-model="isModalOpen">
    <dialog-content>
      <create-board-form />
    </dialog-content>
  </v-dialog>
</template>
