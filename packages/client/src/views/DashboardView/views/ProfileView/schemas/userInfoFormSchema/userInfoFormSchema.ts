import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import { GENDER } from '@constants/userConstants';
import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const userInfoFormSchema = toTypedSchema(
  zod.object({
    firstName: zod
      .string()
      .min(1, { message: t('forms.firstNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.firstNameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.firstNameField.schemaValidationMessages.TOO_LONG') }),
    lastName: zod
      .string()
      .min(1, { message: t('forms.lastNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.lastNameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.lastNameField.schemaValidationMessages.TOO_LONG') }),
    gender: zod
      .enum([GENDER.FEMALE, GENDER.MALE], { message: t('forms.genderField.schemaValidationMessages.NOT_ALLOWED') })
      .nullable(),
  }),
);

export default userInfoFormSchema;
