<script setup lang="ts">
import { provide } from 'vue';

import useModal, { type UseModal } from '@composables/useModal';
import RenameWorkspaceModal from '@views/DashboardView/views/BoardsView/modals/RenameWorkspaceModal';
import DeleteWorkspaceModal from '@views/DashboardView/views/BoardsView/modals/DeleteWorkspaceModal';

defineOptions({ inheritAttrs: false });

const renameModal = useModal();
const deleteModal = useModal();

provide<{ renameModal: UseModal, deleteModal: UseModal }>('WorkspaceSettingsModalsContext', {
  renameModal,
  deleteModal,
});
</script>

<template>
  <slot />
  <rename-workspace-modal />
  <delete-workspace-modal />
</template>
