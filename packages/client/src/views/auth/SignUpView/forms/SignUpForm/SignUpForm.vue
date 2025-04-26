<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/auth/SignUpView/schemas/signUpFormSchema';

const { xs } = useDisplay();
const { t } = useTranslation();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
});

const { value: username, errorMessage: usernameErrors } = useField<string>('username');
const { value: email, errorMessage: emailErrors } = useField<string>('email');
const { value: password, errorMessage: passwordErrors } = useField<string>('password');
const { value: confirmPassword, errorMessage: confirmPasswordErrors } = useField<string>('confirmPassword');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-container>
      <div class="mb-2">
        <v-text-field
          v-model="username"
          :error-messages="usernameErrors"
          :label="t('forms.usernameField.LABEL')"
          :placeholder="t('forms.usernameField.PLACEHOLDER')"
        />
      </div>
      <div class="mb-2">
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          :label="t('forms.emailField.LABEL')"
          :placeholder="t('forms.emailField.PLACEHOLDER')"
          type="email"
        />
      </div>
      <div class="mb-2">
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          :label="t('forms.passwordField.LABEL')"
          :placeholder="t('forms.passwordField.PLACEHOLDER')"
          type="password"
        />
      </div>
      <div class="mb-2">
        <v-text-field
          v-model="confirmPassword"
          :error-messages="confirmPasswordErrors"
          :label="t('forms.confirmPasswordField.LABEL')"
          :placeholder="t('forms.confirmPasswordField.PLACEHOLDER')"
          type="password"
        />
      </div>
      <div class="text-center">
        <v-btn
          type="submit"
          color="primary"
          :block="xs"
          :loading="isSubmitting"
          :disabled="isSubmitting"
        >
          {{ t('common.SIGN_UP') }}
        </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
