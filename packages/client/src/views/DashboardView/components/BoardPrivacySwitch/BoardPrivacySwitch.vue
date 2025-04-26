<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

withDefaults(defineProps<{ isCentered?: boolean }>(), { isCentered: true });

const isPrivate = defineModel<boolean>({ required: true });

const { t } = useTranslation();
</script>

<template>
  <div :class="['d-flex align-center', isCentered ? 'justify-center' : undefined]">
    <span class="mr-4">
      {{ t('common.boardVisibility.PUBLIC') }}
    </span>
    <v-switch
      v-model="isPrivate"
      :label="t('forms.boardVisibilityField.LABEL')"
      density="compact"
      class="is-private-board-switch ma-0"
      color="primary"
      hide-details
    />
    <span class="ml-4">
      {{ t('common.boardVisibility.PRIVATE') }}
    </span>
  </div>
</template>

<style lang="scss">
.is-private-board-switch {
  .v-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
    padding: 0;
    margin: -1px;
  }
}
</style>
