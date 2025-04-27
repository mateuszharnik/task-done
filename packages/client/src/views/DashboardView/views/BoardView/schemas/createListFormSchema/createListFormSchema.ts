import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const createListFormSchema = toTypedSchema(
  zod.object({
    name: zod
      .string()
      .min(1, { message: t('forms.listNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.listNameField.schemaValidationMessages.TOO_SHORT') })
      .max(500, { message: t('forms.listNameField.schemaValidationMessages.TOO_LONG') }),
  }),
);

export default createListFormSchema;
