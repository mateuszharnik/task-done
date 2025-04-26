<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { useCreateWorkspaceModalContext } from '@views/DashboardView/contexts/CreateWorkspaceModalContext';

const { t } = useTranslation();

const { openModal } = useCreateWorkspaceModalContext();
</script>

<template>
  <v-btn
    type="text"
    size="small"
    color="primary"
    @click="openModal"
  >
    {{ t('common.CREATE') }}
  </v-btn>
</template>
