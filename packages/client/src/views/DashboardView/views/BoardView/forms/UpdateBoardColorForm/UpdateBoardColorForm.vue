<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import { BoardColors } from '@constants/boardConstants';
import validationSchema from '@views/DashboardView/views/BoardsView/schemas/createBoardFormSchema';
import BoardColorPicker from '@views/DashboardView/components/BoardColorPicker';
import Paragraph from '@components/Paragraph';

const { xs } = useDisplay();
const { t } = useTranslation();

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { name: '', color: BoardColors.LIGHT, isPrivate: true },
});

const { value: color, errorMessage: colorErrors } = useField<string>('color');

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
        {{ t('board.updateBoardColorModal.DESCRIPTION') }}
      </paragraph>
      <v-sheet
        :min-width="xs ? '230px' : '280px'"
        :max-width="xs ? '260px' : '320px'"
        class="mx-auto mb-2"
      >
        <board-color-picker
          v-model="color"
          :error-message="colorErrors"
        />
      </v-sheet>
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
