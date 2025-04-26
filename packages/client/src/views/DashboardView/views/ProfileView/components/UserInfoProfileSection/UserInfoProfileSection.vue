<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import ProfileSection from '@views/DashboardView/views/ProfileView/components/ProfileSection';
import UserInfoForm from '@views/DashboardView/views/ProfileView/forms/UserInfoForm';

const { t } = useTranslation();
</script>

<template>
  <profile-section
    :title="t('profile.userInfoForm.FORM_TITLE')"
    :description="t('profile.userInfoForm.FORM_DESCRIPTION')"
  >
    <user-info-form class="mt-4" />
  </profile-section>
</template>
