<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import logo from '@assets/images/logo.svg';
import Heading from '@components/Heading';
import Paragraph from '@components/Paragraph';

defineProps<{
  title: string
  description: string
}>();

const { t } = useTranslation();
</script>

<template>
  <main class="auth-layout w-screen min-h-100 d-flex justify-center align-center">
    <v-container
      max-width="600px"
      class="auth-layout-container rounded-lg pa-7 ma-2 bg-white"
    >
      <img
        :src="logo"
        :alt="t('common.LOGO')"
        class="d-flex mb-4 ma-auto"
      >
      <heading>
        {{ title }}
      </heading>
      <paragraph class="text-subtitle-1 text-center">
        {{ description }}
      </paragraph>
      <slot />
    </v-container>
  </main>
</template>

<style lang="scss" scoped>
.auth-layout {
  background: linear-gradient(45deg, #ffa726, #ffcc80, #ffa726);
}

.auth-layout-container {
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
}
</style>
