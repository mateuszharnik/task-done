import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const createWorkspaceFormSchema = toTypedSchema(
  zod.object({
    name: zod
      .string()
      .min(1, { message: t('forms.workspaceNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.workspaceNameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.workspaceNameField.schemaValidationMessages.TOO_LONG') }),
  }),
);

export default createWorkspaceFormSchema;
