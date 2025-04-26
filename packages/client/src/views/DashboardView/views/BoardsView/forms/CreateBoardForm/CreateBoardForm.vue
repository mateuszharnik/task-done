<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import { BoardColors } from '@constants/boardConstants';
import { useCreateBoardModalContext } from '@views/DashboardView/views/BoardsView/contexts/CreateBoardModalContext';
import validationSchema from '@views/DashboardView/views/BoardsView/schemas/createBoardFormSchema';
import Paragraph from '@components/Paragraph';
import BoardColorPicker from '@views/DashboardView/components/BoardColorPicker';
import BoardPrivacySwitch from '@views/DashboardView/components/BoardPrivacySwitch';

const { xs } = useDisplay();
const { t } = useTranslation();
const { closeModal } = useCreateBoardModalContext();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { name: '', color: BoardColors.LIGHT, isPrivate: true },
});

const { value: name, errorMessage: nameErrors } = useField<string>('name');
const { value: color, errorMessage: colorErrors } = useField<string>('color');
const { value: isPrivate } = useField<boolean>('isPrivate');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});

</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <v-card-text class="pb-0">
      <paragraph class="mb-4 text-center text-h6 font-weight-bold">
        {{ t('boards.createBoardModal.DESCRIPTION') }}
      </paragraph>
      <div class="mb-2">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :label="t('forms.boardNameField.LABEL')"
          :placeholder="t('forms.boardNameField.PLACEHOLDER')"
        />
      </div>
      <v-sheet
        :min-width="xs ? '240px' : '280px'"
        :max-width="xs ? '260px' : '320px'"
        class="mx-auto mb-2"
      >
        <board-color-picker
          v-model="color"
          :error-message="colorErrors"
        />
      </v-sheet>
      <div class="mb-2">
        <board-privacy-switch v-model="isPrivate" />
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
        :text="t('common.CREATE')"
        :block="xs"
        :loading="isSubmitting"
        :disabled="isSubmitting"
      />
    </v-card-actions>
  </v-form>
</template>
