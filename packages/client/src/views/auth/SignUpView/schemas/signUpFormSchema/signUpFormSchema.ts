import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const signUpFormSchema = toTypedSchema(
  zod.object({
    username: zod
      .string()
      .min(1, { message: t('forms.usernameField.schemaValidationMessages.REQUIRED') })
      .min(3, { message: t('forms.usernameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.usernameField.schemaValidationMessages.TOO_LONG') }),
    email: zod
      .string()
      .min(1, { message: t('forms.emailField.schemaValidationMessages.REQUIRED') })
      .email({ message: t('forms.emailField.schemaValidationMessages.INVALID') }),
    password: zod
      .string()
      .min(1, { message: t('forms.passwordField.schemaValidationMessages.REQUIRED') })
      .min(8, { message: t('forms.passwordField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.passwordField.schemaValidationMessages.TOO_LONG') }),
    confirmPassword: zod
      .string()
      .min(1, { message: t('forms.confirmPasswordField.schemaValidationMessages.REQUIRED') }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: t('forms.confirmPasswordField.schemaValidationMessages.NOT_MATCH'),
    path: ['confirmPassword'],
  }),
);

export default signUpFormSchema;
