<script setup lang="ts">
import { provide, useAttrs } from 'vue';

import useModal, { type UseModal } from '@composables/useModal';
import CreateBoardModal from '@views/DashboardView/views/BoardsView/modals/CreateBoardModal';

const attrs = useAttrs();
const modal = useModal();

provide<UseModal>('CreateBoardModalContext', modal);
</script>

<template>
  <slot />
  <create-board-modal v-bind="attrs" />
</template>
