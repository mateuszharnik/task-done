import type { Ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';

const { t } = i18nextService;

const deleteWorkspaceFormSchema = (workspace: Ref<string>) => toTypedSchema(
  zod.object({
    deleteWorkspaceConfirmation: zod
      .string()
      .min(1, { message: t('forms.deleteWorkspaceConfirmationField.schemaValidationMessages.REQUIRED') })
      .refine((val) => val === workspace.value, {
        message: t('forms.deleteWorkspaceConfirmationField.schemaValidationMessages.NOT_MATCH'),
      }),
  }),
);

export default deleteWorkspaceFormSchema;
