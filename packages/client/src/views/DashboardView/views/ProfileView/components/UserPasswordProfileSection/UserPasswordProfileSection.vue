<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import ProfileSection from '@views/DashboardView/views/ProfileView/components/ProfileSection';
import UserPasswordForm from '@views/DashboardView/views/ProfileView/forms/UserPasswordForm';

const { t } = useTranslation();
</script>

<template>
  <profile-section
    :title="t('profile.userPasswordForm.FORM_TITLE')"
    :description="t('profile.userPasswordForm.FORM_DESCRIPTION')"
  >
    <user-password-form class="mt-4" />
  </profile-section>
</template>
