<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

import WorkspaceSettingsModalsContext from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';
import WorkspaceSettingsMenu from '@views/DashboardView/views/BoardsView/components/WorkspacesSection/components/WorkspaceSettingsMenu';

defineOptions({ inheritAttrs: false });

const props = defineProps<{ id: number }>();

const { xs } = useDisplay();

const activatorId = computed(() => `workspace-menu-activator-${props.id}`);

const buttonSize = computed(() => (xs.value ? 'small' : 'x-small'));
</script>

<template>
  <v-btn
    :id="activatorId"
    :size="buttonSize"
    color="black"
    variant="tonal"
    icon="mdi-cog-outline"
    class="rounded-lg"
  />
  <workspace-settings-modals-context>
    <workspace-settings-menu :activator-id="`#${activatorId}`" />
  </workspace-settings-modals-context>
</template>
