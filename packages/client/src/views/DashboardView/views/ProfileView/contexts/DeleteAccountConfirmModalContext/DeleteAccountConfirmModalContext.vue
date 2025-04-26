<script setup lang="ts">
import { provide, useAttrs } from 'vue';

import useModal, { type UseModal } from '@composables/useModal';
import DeleteAccountConfirmModal from '@views/DashboardView/views/ProfileView/modals/DeleteAccountConfirmModal';

const attrs = useAttrs();
const modal = useModal();

provide<UseModal>('DeleteAccountConfirmModalContext', modal);
</script>

<template>
  <slot />
  <delete-account-confirm-modal v-bind="attrs" />
</template>
