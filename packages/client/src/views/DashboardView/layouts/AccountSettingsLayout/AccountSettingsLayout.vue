<script setup lang="ts">
import { ROUTES } from '@constants/routesConstants';
import Heading from '@components/Heading';
import Paragraph from '@components/Paragraph';

withDefaults(defineProps<{
  title: string;
  description: string;
  backLinkText: string;
  backLinkHref?: string;
}>(), {
  backLinkHref: ROUTES.DASHBOARD.BOARDS.PATH,
});
</script>

<template>
  <v-container>
    <div class="account-settings-layout">
      <router-link
        :to="backLinkHref"
        class="d-inline-flex align-center text-left mb-6 text-decoration-none text-primary ga-1"
      >
        <v-icon icon="mdi-arrow-left" />
        {{ backLinkText }}
      </router-link>
      <heading>
        {{ title }}
      </heading>
      <paragraph class="text-center text-subtitle-2 text-grey-darken-3">
        {{ description }}
      </paragraph>
      <v-divider class="my-8" />
      <slot />
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.account-settings-layout {
  max-width: 480px;
  margin: 20px auto 40px;

  @media (min-width: 960px) {
    max-width: 700px;
  }
}
</style>
