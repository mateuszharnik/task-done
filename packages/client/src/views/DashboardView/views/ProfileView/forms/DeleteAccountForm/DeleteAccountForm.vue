<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/ProfileView/schemas/deleteAccountFormSchema';
import Paragraph from '@components/Paragraph';
import { useDeleteAccountConfirmModalContext } from '@views/DashboardView/views/ProfileView/contexts/DeleteAccountConfirmModalContext';

const { xs } = useDisplay();
const { t } = useTranslation();
const { closeModal } = useDeleteAccountConfirmModalContext();

const username = ref('username');

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: validationSchema(username),
  initialValues: { deleteAccountConfirmation: '' },
});

const { value: deleteAccountConfirmation, errorMessage: deleteAccountConfirmationErrors } = useField<string>('deleteAccountConfirmation');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-card-text class="pb-0">
      <paragraph class="mb-4 text-center text-h6 font-weight-bold">
        {{ t('profile.deleteAccount.confirmationModal.DESCRIPTION') }}
      </paragraph>
      <div class="mb-2">
        <v-text-field
          v-model="deleteAccountConfirmation"
          :error-messages="deleteAccountConfirmationErrors"
          :label="t('forms.deleteAccountConfirmationField.LABEL')"
          :placeholder="t('forms.deleteAccountConfirmationField.PLACEHOLDER', { username })"
        />
      </div>
    </v-card-text>
    <v-card-actions class="px-5 pb-5 d-flex flex-wrap">
      <v-btn
        color="grey-lighten-3"
        :text="t('common.CLOSE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
        @click="closeModal"
      />
      <v-spacer />
      <v-btn
        type="submit"
        color="error"
        :text="t('common.DELETE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </v-card-actions>
  </v-form>
</template>
