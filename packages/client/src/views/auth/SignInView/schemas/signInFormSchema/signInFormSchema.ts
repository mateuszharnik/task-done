import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const signInFormSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .min(1, { message: t('forms.emailField.schemaValidationMessages.REQUIRED') })
      .email({ message: t('forms.emailField.schemaValidationMessages.INVALID') }),
    password: zod
      .string()
      .min(1, { message: t('forms.passwordField.schemaValidationMessages.REQUIRED') }),
  }),
);

export default signInFormSchema;
