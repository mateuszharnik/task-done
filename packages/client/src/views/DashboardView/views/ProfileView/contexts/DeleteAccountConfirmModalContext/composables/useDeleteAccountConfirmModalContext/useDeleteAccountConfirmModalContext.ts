import { inject } from 'vue';

import type { UseModal } from '@composables/useModal';

const useDeleteAccountConfirmModalContext = () => {
  const context = inject<UseModal>('DeleteAccountConfirmModalContext');

  if (!context) throw new Error('DeleteAccountConfirmModalContext not provided');

  return context;
};

export default useDeleteAccountConfirmModalContext;
