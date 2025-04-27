import { inject } from 'vue';

import type { UseModal } from '@composables/useModal';

const useCreateBoardModalContext = () => {
  const context = inject<UseModal>('CreateBoardModalContext');

  if (!context) throw new Error('CreateBoardModalContext not provided');

  return context;
};

export default useCreateBoardModalContext;
