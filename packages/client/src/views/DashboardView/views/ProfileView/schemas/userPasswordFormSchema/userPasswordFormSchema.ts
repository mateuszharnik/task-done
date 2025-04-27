import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const userPasswordFormSchema = toTypedSchema(
  zod.object({
    password: zod
      .string()
      .min(1, { message: t('forms.passwordField.schemaValidationMessages.REQUIRED') })
      .min(8, { message: t('forms.passwordField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.passwordField.schemaValidationMessages.TOO_LONG') }),
  }),
);

export default userPasswordFormSchema;
