<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { ROUTES } from '@constants/routesConstants';
import Paragraph from '@components/Paragraph';
import AuthLayout from '@views/auth/layouts/AuthLayout';
import SignUpForm from '@views/auth/SignUpView/forms/SignUpForm';

const { t } = useTranslation();
</script>

<template>
  <auth-layout
    :title="t('auth.signUpView.HEADER')"
    :description="t('auth.signUpView.DESCRIPTION')"
  >
    <sign-up-form />
    <paragraph class="text-center">
      <i18next :translation="t('auth.signUpView.DO_YOU_HAVE_ACCOUNT_ALREADY')">
        <template #sign-in>
          <router-link
            :to="ROUTES.SIGN_IN.PATH"
            class="text-primary text-decoration-none"
          >
            {{ t("auth.signUpView.SIGN_IN") }}
          </router-link>
        </template>
      </i18next>
    </paragraph>
  </auth-layout>
</template>
