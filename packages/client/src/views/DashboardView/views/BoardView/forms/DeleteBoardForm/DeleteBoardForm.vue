<script setup lang="ts">
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/BoardView/schemas/deleteBoardFormSchema';
import Paragraph from '@components/Paragraph';

const { xs } = useDisplay();
const { t } = useTranslation();

const boardName = ref('board');

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: validationSchema(boardName),
  initialValues: { deleteBoardConfirmation: '' },
});

const { value: deleteBoardConfirmation, errorMessage: deleteBoardConfirmationErrors } = useField<string>('deleteBoardConfirmation');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form
    class="h-100 d-flex flex-column justify-space-between"
    @submit.prevent="onSubmit"
  >
    <div>
      <paragraph class="text-center mb-4">
        {{ t('board.deleteBoardModal.DESCRIPTION') }}
      </paragraph>
      <div class="mb-2">
        <v-text-field
          v-model="deleteBoardConfirmation"
          :error-messages="deleteBoardConfirmationErrors"
          :label="t('forms.deleteBoardConfirmationField.LABEL')"
          :placeholder="t('forms.deleteBoardConfirmationField.PLACEHOLDER', { boardName })"
        />
      </div>
    </div>
    <div class="text-right">
      <v-btn
        type="submit"
        color="error"
        :text="t('common.DELETE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </div>
  </v-form>
</template>
