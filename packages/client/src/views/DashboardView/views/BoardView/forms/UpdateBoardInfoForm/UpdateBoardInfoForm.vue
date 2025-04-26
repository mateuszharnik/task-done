<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/BoardView/schemas/updateBoardInfoFormSchema';
import Paragraph from '@components/Paragraph';
import BoardPrivacySwitch from '@views/DashboardView/components/BoardPrivacySwitch';

const { xs } = useDisplay();
const { t } = useTranslation();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { name: '', description: '', isPrivate: true },
});

const { value: name, errorMessage: nameErrors } = useField<string>('name');
const { value: description, errorMessage: descriptionErrors } = useField<string>('description');
const { value: isPrivate } = useField<boolean>('isPrivate');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <paragraph class="text-center mb-4">
      {{ t('board.updateBoardInfoModal.DESCRIPTION') }}
    </paragraph>
    <div class="mb-2">
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :label="t('forms.boardNameField.LABEL')"
        :placeholder="t('forms.boardNameField.PLACEHOLDER')"
      />
    </div>
    <v-textarea
      v-model="description"
      :error-messages="descriptionErrors"
      :label="t('forms.boardDescriptionField.LABEL')"
      :placeholder="t('forms.boardDescriptionField.PLACEHOLDER')"
    />
    <div class="mb-2">
      <board-privacy-switch v-model="isPrivate" />
    </div>
    <div class="text-right">
      <v-btn
        type="submit"
        color="primary"
        :text="t('common.UPDATE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </div>
  </v-form>
</template>
