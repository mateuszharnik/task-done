import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const updateBoardInfoFormSchema = toTypedSchema(
  zod.object({
    name: zod
      .string()
      .min(1, { message: t('forms.boardNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.boardNameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.boardNameField.schemaValidationMessages.TOO_LONG') }),
    description: zod
      .string()
      .max(2000, { message: t('forms.boardDescriptionField.schemaValidationMessages.TOO_LONG') }),
    isPrivate: zod.boolean(),
  }),
);

export default updateBoardInfoFormSchema;
