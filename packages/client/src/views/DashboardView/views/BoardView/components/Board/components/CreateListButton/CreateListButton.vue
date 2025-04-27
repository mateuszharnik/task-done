<script setup lang="ts">
import { ref } from 'vue';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import validationSchema from '@views/DashboardView/views/BoardView/schemas/createListFormSchema';

const isListCreationEnabled = ref(false);

const handleListCreationEnabled = () => {
  isListCreationEnabled.value = true;
};

const handleListCreationDisabled = () => {
  isListCreationEnabled.value = false;
};

const { t } = useTranslation();

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
  <v-card
    v-if="isListCreationEnabled"
    v-click-outside="handleListCreationDisabled"
  >
    <v-form @submit.prevent="onSubmit">
      <v-card-text class="pb-2">
        <v-textarea
          v-model="name"
          :error-messages="nameErrors"
          :label="t('forms.listNameField.LABEL')"
          :placeholder="t('forms.listNameField.PLACEHOLDER')"
          rows="1"
          density="compact"
          auto-grow
        />
      </v-card-text>
      <v-card-actions class="px-4 pb-4 pt-0">
        <v-btn
          variant="tonal"
          :disabled="isSubmitting"
          class="pa-0"
          min-width="36px"
          @click="handleListCreationDisabled"
        >
          <v-icon icon="mdi-close" />
        </v-btn>
        <v-btn
          type="submit"
          variant="tonal"
          :loading="isSubmitting"
          :disabled="isSubmitting"
          :text="t('common.CREATE')"
        />
      </v-card-actions>
    </v-form>
  </v-card>
  <v-btn
    v-else
    type="submit"
    variant="tonal"
    prepend-icon="mdi-plus"
    width="280px"
    :text="t('board.createListButton.ADD_LIST_BUTTON_TEXT')"
    @click="handleListCreationEnabled"
  />
</template>
