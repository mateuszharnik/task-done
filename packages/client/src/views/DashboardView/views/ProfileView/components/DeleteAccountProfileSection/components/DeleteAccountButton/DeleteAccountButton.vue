<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';

import { useDeleteAccountConfirmModalContext } from '@views/DashboardView/views/ProfileView/contexts/DeleteAccountConfirmModalContext';

const { xs } = useDisplay();
const { t } = useTranslation();
const { openModal } = useDeleteAccountConfirmModalContext();
</script>

<template>
  <v-btn
    color="error"
    class="mt-4 mt-sm-0"
    :block="xs"
    @click="openModal"
  >
    {{ t("common.DELETE") }}
  </v-btn>
</template>
