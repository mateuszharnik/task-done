<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

defineProps<{ xs: boolean, size: string }>();

const { t } = useTranslation();
</script>

<template>
  <v-btn
    class="rounded-lg d-flex"
    variant="tonal"
    :height="xs ? '40px' : '32px'"
    :min-width="xs ? '40px' : '280px'"
    :class="xs ? 'justify-center pa-0 ml-auto mr-2' : 'justify-start px-4'"
    :width="xs ? '40px' : '280px'"
    :size="size"
  >
    <v-icon
      icon="mdi-magnify"
      :size="xs ? '18px' : '15px'"
    />
    <span
      v-if="!xs"
      class="ml-1 text-body-2"
    >
      {{ t('board.searchTasks') }}
    </span>
  </v-btn>
</template>
