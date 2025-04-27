<script setup lang="ts">
import { useDeleteAccountConfirmModalContext } from '@views/DashboardView/views/ProfileView/contexts/DeleteAccountConfirmModalContext';
import DialogContent from '@components/DialogContent';
import DeleteAccountForm from '@views/DashboardView/views/ProfileView/forms/DeleteAccountForm';

const { isModalOpen } = useDeleteAccountConfirmModalContext();
</script>

<template>
  <v-dialog v-model="isModalOpen">
    <dialog-content>
      <delete-account-form />
    </dialog-content>
  </v-dialog>
</template>
