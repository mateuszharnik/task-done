<script setup lang="ts">
import { computed } from 'vue';
import { useTranslation } from 'i18next-vue';

import { BoardTypesIcons } from '@constants/boardConstants';
import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';
import { useBoardSettingsModalContext } from '@views/DashboardView/views/BoardView/contexts/BoardSettingsModalContext';
import useBoardType from '@views/DashboardView/composables/useBoardType';

const props = defineProps<{ isPrivate: boolean }>();

const { openModal } = useBoardSettingsModalContext();

const { t } = useTranslation();

const handleOpenModal = () => openModal({ activeTab: BoardSettingsTabs.ABOUT_BOARD });

const { boardType } = useBoardType(props.isPrivate);

const tooltipTranslation = computed(() => (
  props.isPrivate ? 'common.boardVisibility.PRIVATE' : 'common.boardVisibility.PUBLIC'
));
</script>

<template>
  <v-btn
    v-tooltip:bottom="t(tooltipTranslation)"
    :icon="BoardTypesIcons[boardType]"
    class="rounded-lg mr-2"
    variant="tonal"
    size="x-small"
    @click="handleOpenModal"
  />
</template>
