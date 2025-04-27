import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

import i18nextService from '@services/i18nextService';
import { BoardColors } from '@constants/boardConstants';

const { t } = i18nextService;

const createBoardFormSchema = toTypedSchema(
  zod.object({
    name: zod
      .string()
      .min(1, { message: t('forms.boardNameField.schemaValidationMessages.REQUIRED') })
      .min(2, { message: t('forms.boardNameField.schemaValidationMessages.TOO_SHORT') })
      .max(32, { message: t('forms.boardNameField.schemaValidationMessages.TOO_LONG') }),
    color: zod
      .enum(
        [
          BoardColors.BLUE,
          BoardColors.RED,
          BoardColors.GREEN,
          BoardColors.YELLOW,
          BoardColors.ORANGE,
          BoardColors.PINK,
          BoardColors.PURPLE,
          BoardColors.TEAL,
          BoardColors.DARK,
          BoardColors.LIGHT,
        ],
        { message: t('forms.boardColorField.schemaValidationMessages.NOT_ALLOWED') },
      ),
    isPrivate: zod.boolean(),
  }),
);

export default createBoardFormSchema;
