import type { Ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const deleteAccountFormSchema = (username: Ref<string>) => toTypedSchema(
  zod.object({
    deleteAccountConfirmation: zod
      .string()
      .min(1, { message: t('forms.deleteAccountConfirmationField.schemaValidationMessages.REQUIRED') })
      .refine((val) => val === username.value, {
        message: t('forms.deleteAccountConfirmationField.schemaValidationMessages.NOT_MATCH'),
      }),
  }),
);

export default deleteAccountFormSchema;
