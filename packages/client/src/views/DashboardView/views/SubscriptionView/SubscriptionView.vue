<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import SubscriptionSection from '@views/DashboardView/views/SubscriptionView/components/SubscriptionSection';
import AccountSettingsLayout from '@views/DashboardView/layouts/AccountSettingsLayout';

const { t } = useTranslation();
</script>

<template>
  <account-settings-layout
    :back-link-text="t('subscription.BACK_TO_BOARDS_LINK')"
    :title="t('subscription.TITLE')"
    :description="t('subscription.DESCRIPTION')"
  >
    <subscription-section />
  </account-settings-layout>
</template>
