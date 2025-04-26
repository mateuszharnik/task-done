<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import emptyState from '@assets/images/undraw_meditation.svg';
import CreateWorkspaceButton from '@views/DashboardView/components/CreateWorkspaceButton';

const { t } = useTranslation();
</script>

<template>
  <v-empty-state :image="emptyState">
    <template #title>
      <div class="text-subtitle-2 font-weight-bold mt-8">
        {{ t('boards.emptyState.TITLE') }}
      </div>
    </template>
    <template #text>
      <div class="text-caption">
        {{ t('boards.emptyState.DESCRIPTION') }}
      </div>
    </template>
    <template #actions>
      <create-workspace-button />
    </template>
  </v-empty-state>
</template>
