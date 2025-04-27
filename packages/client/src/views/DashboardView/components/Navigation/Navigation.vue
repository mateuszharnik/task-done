<script setup lang="ts">
import { ref } from 'vue';
import { useTranslation } from 'i18next-vue';

import { ROUTES } from '@constants/routesConstants';
import logo from '@assets/images/logo.svg';
import CreateWorkspaceButton from '@views/DashboardView/components/CreateWorkspaceButton';

const { t } = useTranslation();

const drawer = ref(false);
</script>

<template>
  <v-app-bar color="secondary-darken-1">
    <div class="d-flex w-100 ms-5 justify-content align-center">
      <router-link :to="ROUTES.DASHBOARD.BOARDS.PATH">
        <img
          :src="logo"
          :alt="t('common.LOGO')"
        >
      </router-link>
    </div>
    <create-workspace-button class="mr-2" />
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    />
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="end"
    color="secondary"
    temporary
    width="220"
  >
    <template #prepend>
      <v-list-item
        lines="two"
        append-avatar="https://randomuser.me/api/portraits/women/3.jpg"
        title="Jane Smith"
        :subtitle="t('navigation.navigationDrawer.items.USERNAME_ITEM_SUBTITLE')"
        class="text-right"
      />
    </template>
    <v-divider />
    <v-list-item
      link
      :to="ROUTES.DASHBOARD.PROFILE.PATH"
      :title="t('navigation.navigationDrawer.items.PROFILE_ITEM_TITLE')"
      class="text-right"
      append-icon="mdi-account-outline"
    />
    <v-list-item
      link
      :to="ROUTES.DASHBOARD.BOARDS.PATH"
      :title="t('navigation.navigationDrawer.items.BOARDS_ITEM_TITLE')"
      class="text-right"
      append-icon="mdi-view-dashboard"
    />
    <v-list-item
      link
      :to="ROUTES.DASHBOARD.SUBSCRIPTION.PATH"
      :title="t('navigation.navigationDrawer.items.SUBSCRIPTION_ITEM_TITLE')"
      class="text-right"
      append-icon="mdi-credit-card"
    />
    <template #append>
      <v-divider />
      <div class="pa-2">
        <v-btn
          color="grey-lighten-3"
          block
          prepend-icon="mdi-logout"
        >
          {{ t("navigation.navigationDrawer.items.LOG_OUT_BUTTON_TEXT") }}
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
