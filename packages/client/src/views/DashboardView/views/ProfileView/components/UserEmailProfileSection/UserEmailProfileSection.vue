<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import ProfileSection from '@views/DashboardView/views/ProfileView/components/ProfileSection';
import UserEmailForm from '@views/DashboardView/views/ProfileView/forms/UserEmailForm';

const { t } = useTranslation();
</script>

<template>
  <profile-section
    :title="t('profile.userEmailForm.FORM_TITLE')"
    :description="t('profile.userEmailForm.FORM_DESCRIPTION')"
  >
    <user-email-form class="mt-4" />
  </profile-section>
</template>
