<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

const { t } = useTranslation();
</script>

<template>
  <p>{{ t('TEST') }}</p>
</template>
