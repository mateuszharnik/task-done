<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import UserInfoProfileSection from '@views/DashboardView/views/ProfileView/components/UserInfoProfileSection';
import UserPasswordProfileSection from '@views/DashboardView/views/ProfileView/components/UserPasswordProfileSection';
import UserEmailProfileSection from '@views/DashboardView/views/ProfileView/components/UserEmailProfileSection';
import DeleteAccountProfileSection from '@views/DashboardView/views/ProfileView/components/DeleteAccountProfileSection';
import AccountSettingsLayout from '@views/DashboardView/layouts/AccountSettingsLayout';

const { t } = useTranslation();
</script>

<template>
  <account-settings-layout
    :back-link-text=" t('profile.BACK_TO_BOARDS_LINK')"
    :title="t('profile.TITLE')"
    :description="t('profile.DESCRIPTION')"
  >
    <user-info-profile-section />
    <v-divider class="my-8" />
    <user-email-profile-section />
    <v-divider class="my-8" />
    <user-password-profile-section />
    <v-divider class="my-8" />
    <delete-account-profile-section />
  </account-settings-layout>
</template>
