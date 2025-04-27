<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import { useWorkspaceSettingsModalsContext } from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';
import validationSchema from '@views/DashboardView/views/BoardsView/schemas/deleteWorkspaceFormSchema';
import Paragraph from '@components/Paragraph';

const { xs } = useDisplay();
const { t } = useTranslation();
const { deleteModal: { closeModal } } = useWorkspaceSettingsModalsContext();

const workspace = ref('workspace');

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: validationSchema(workspace),
  initialValues: { deleteWorkspaceConfirmation: '' },
});

const { value: deleteWorkspaceConfirmation, errorMessage: deleteWorkspaceConfirmationErrors } = useField<string>('deleteWorkspaceConfirmation');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-card-text class="pb-0">
      <paragraph class="mb-4 text-center text-h6 font-weight-bold">
        {{ t('boards.deleteWorkspaceModal.DESCRIPTION') }}
      </paragraph>
      <div class="mb-2">
        <v-text-field
          v-model="deleteWorkspaceConfirmation"
          :error-messages="deleteWorkspaceConfirmationErrors"
          :label="t('forms.deleteWorkspaceConfirmationField.LABEL')"
          :placeholder="t('forms.deleteWorkspaceConfirmationField.PLACEHOLDER', { workspace })"
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
