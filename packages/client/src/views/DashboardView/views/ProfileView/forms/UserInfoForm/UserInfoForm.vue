<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useTranslation } from 'i18next-vue';
import { useField, useForm } from 'vee-validate';

import { GENDER } from '@constants/userConstants';
import validationSchema from '@views/DashboardView/views/ProfileView/schemas/userInfoFormSchema';

const { xs } = useDisplay();
const { t } = useTranslation();

const genderItems = [
  { title: t('common.genders.FEMALE'), value: GENDER.FEMALE },
  { title: t('common.genders.MALE'), value: GENDER.MALE },
];

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues: { firstName: '', lastName: '', gender: null },
});

const { value: firstName, errorMessage: firstNameErrors } = useField<string>('firstName');
const { value: lastName, errorMessage: lastNameErrors } = useField<string>('lastName');
const { value: gender, errorMessage: genderErrors } = useField<GENDER.FEMALE | GENDER.MALE | null>('gender');

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <v-form @submit.prevent="onSubmit">
    <div class="mb-2">
      <v-text-field
        v-model="firstName"
        :error-messages="firstNameErrors"
        :label="t('forms.firstNameField.LABEL')"
        :placeholder="t('forms.firstNameField.PLACEHOLDER')"
      />
    </div>
    <div class="mb-2">
      <v-text-field
        v-model="lastName"
        :error-messages="lastNameErrors"
        :label="t('forms.lastNameField.LABEL')"
        :placeholder="t('forms.lastNameField.PLACEHOLDER')"
      />
    </div>
    <div class="mb-2">
      <v-select
        v-model="gender"
        :error-messages="genderErrors"
        :label="t('forms.genderField.LABEL')"
        :placeholder="t('forms.genderField.PLACEHOLDER')"
        :items="genderItems"
        item-title="title"
        item-value="value"
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
