<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/ProfileView/schemas/userEmailFormSchema';

const { xs } = useDisplay();
const { t } = useTranslation();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { email: '' },
});

const { value: email, errorMessage: emailErrors } = useField<string>('email');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <div class="mb-2">
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        :label="t('forms.emailField.LABEL')"
        :placeholder="t('forms.emailField.PLACEHOLDER')"
        type="email"
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
