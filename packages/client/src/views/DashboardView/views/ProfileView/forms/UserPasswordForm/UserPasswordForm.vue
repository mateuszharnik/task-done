<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/ProfileView/schemas/userPasswordFormSchema';

const { xs } = useDisplay();
const { t } = useTranslation();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { password: '' },
});

const { value: password, errorMessage: passwordErrors } = useField<string>('password');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <div class="mb-2">
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :label="t('forms.passwordField.LABEL')"
        :placeholder="t('forms.passwordField.PLACEHOLDER')"
        type="password"
      />
    </div>
    <div class="text-right">
      <v-btn
        type="submit"
        color="primary"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      >
        {{ t('common.SAVE') }}
      </v-btn>
    </div>
  </v-form>
</template>
