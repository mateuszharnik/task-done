<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import ProfileSection from '@views/DashboardView/views/ProfileView/components/ProfileSection';
import DeleteAccountConfirmModalContext from '@views/DashboardView/views/ProfileView/contexts/DeleteAccountConfirmModalContext';
import DeleteAccountButton from '@views/DashboardView/views/ProfileView/components/DeleteAccountProfileSection/components/DeleteAccountButton';

const { t } = useTranslation();
</script>

<template>
  <profile-section
    :title="t('profile.deleteAccount.FORM_TITLE')"
    :description="t('profile.deleteAccount.FORM_DESCRIPTION')"
    class="d-sm-flex align-center justify-space-between"
  >
    <delete-account-confirm-modal-context>
      <delete-account-button />
    </delete-account-confirm-modal-context>
  </profile-section>
</template>
