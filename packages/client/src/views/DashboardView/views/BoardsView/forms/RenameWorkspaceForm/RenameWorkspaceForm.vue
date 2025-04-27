<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import { useWorkspaceSettingsModalsContext } from '@views/DashboardView/views/BoardsView/contexts/WorkspaceSettingsModalsContext';
import validationSchema from '@views/DashboardView/views/BoardsView/schemas/renameWorkspaceFormSchema';
import Paragraph from '@components/Paragraph';

const { xs } = useDisplay();
const { t } = useTranslation();
const { renameModal: { closeModal } } = useWorkspaceSettingsModalsContext();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { name: '' },
});

const { value: name, errorMessage: nameErrors } = useField<string>('name');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-card-text class="pb-0">
      <paragraph class="mb-4 text-center text-h6 font-weight-bold">
        {{ t('boards.renameWorkspaceModal.DESCRIPTION') }}
      </paragraph>
      <div class="mb-2">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :label="t('forms.workspaceNameField.LABEL')"
          :placeholder="t('forms.workspaceNameField.PLACEHOLDER')"
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
        color="primary"
        :text="t('common.CHANGE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </v-card-actions>
  </v-form>
</template>
