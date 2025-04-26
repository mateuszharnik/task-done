import type { Ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const deleteBoardFormSchema = (boardName: Ref<string>) => toTypedSchema(
  zod.object({
    deleteBoardConfirmation: zod
      .string()
      .min(1, { message: t('forms.deleteBoardConfirmationField.schemaValidationMessages.REQUIRED') })
      .refine((val) => val === boardName.value, {
        message: t('forms.deleteBoardConfirmationField.schemaValidationMessages.NOT_MATCH'),
      }),
  }),
);

export default deleteBoardFormSchema;
