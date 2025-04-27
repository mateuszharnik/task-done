<script setup lang="ts">
import { provide, useAttrs } from 'vue';

import useModal, { type UseModal } from '@composables/useModal';
import CreateWorkspaceModal from '@views/DashboardView/modals/CreateWorkspaceModal';

const attrs = useAttrs();
const modal = useModal();

provide<UseModal>('CreateWorkspaceModalContext', modal);
</script>

<template>
  <slot />
  <create-workspace-modal v-bind="attrs" />
</template>
