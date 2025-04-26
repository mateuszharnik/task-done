<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { useWorkspaceSettingsModalsContext } from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';

defineProps<{ activatorId: string }>();

const { t } = useTranslation();
const { renameModal, deleteModal } = useWorkspaceSettingsModalsContext();

const { openModal: openRenameModal } = renameModal;
const { openModal: openDeleteModal } = deleteModal;
</script>

<template>
  <v-menu
    :activator="activatorId"
    offset="8"
    location="bottom end"
  >
    <v-list>
      <v-list-item
        link
        width="100%"
        class="text-left"
        tag="button"
        @click="openRenameModal"
      >
        <v-list-item-title>
          {{ t('boards.workspaceSettingsMenu.RENAME_WORKSPACE_LIST_ITEM') }}
        </v-list-item-title>
      </v-list-item>
      <v-list-item
        link
        width="100%"
        class="text-left"
        tag="button"
        @click="openDeleteModal"
      >
        <v-list-item-title>
          {{ t('boards.workspaceSettingsMenu.DELETE_WORKSPACE_LIST_ITEM') }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
