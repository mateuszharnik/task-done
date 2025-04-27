<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { ROUTES } from '@constants/routesConstants';
import logo from '@assets/images/logo.svg';
import notFound from '@assets/images/not-found.svg';
import Heading from '@components/Heading';

const { t } = useTranslation();
</script>

<template>
  <div class="w-screen h-screen d-flex flex-column justify-center align-center ga-8">
    <v-img
      :src="notFound"
      :alt="t('notFound.IMAGE_ALT_TEXT')"
      class="w-100 flex-0-0"
      max-width="400px"
    />
    <div class="text-center">
      <heading class="mb-4">
        {{ t('notFound.TITLE') }}
      </heading>
      <router-link
        :to="ROUTES.DASHBOARD.BOARDS.PATH"
        class="text-primary text-decoration-none"
      >
        {{ t('notFound.BACK_TO_BOARDS') }}
      </router-link>
      <img
        :src="logo"
        :alt="t('common.LOGO')"
        class="d-flex mt-8 mx-auto"
      >
    </div>
  </div>
</template>
