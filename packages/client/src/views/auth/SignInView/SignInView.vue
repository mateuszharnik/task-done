<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { ROUTES } from '@constants/routesConstants';
import Paragraph from '@components/Paragraph';
import AuthLayout from '@views/auth/layouts/AuthLayout';
import SignInForm from '@views/auth/SignInView/forms/SignInForm';

const { t } = useTranslation();
</script>

<template>
  <auth-layout
    :title="t('auth.signInView.HEADER')"
    :description=" t('auth.signInView.DESCRIPTION')"
  >
    <sign-in-form />
    <paragraph class="text-center">
      <i18next :translation="t('auth.signInView.DO_NOT_YOU_HAVE_ACCOUNT')">
        <template #sign-up>
          <router-link
            :to="ROUTES.SIGN_UP.PATH"
            class="text-primary text-decoration-none"
          >
            {{ t("auth.signInView.CREATE_ACCOUNT") }}
          </router-link>
        </template>
      </i18next>
    </paragraph>
  </auth-layout>
</template>
