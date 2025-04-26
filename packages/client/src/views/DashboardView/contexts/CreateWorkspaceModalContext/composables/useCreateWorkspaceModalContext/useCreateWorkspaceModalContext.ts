import { inject } from 'vue';

import type { UseModal } from '@composables/useModal';

const useCreateWorkspaceModalContext = () => {
  const context = inject<UseModal>('CreateWorkspaceModalContext');

  if (!context) throw new Error('CreateWorkspaceModalContext not provided');

  return context;
};

export default useCreateWorkspaceModalContext;
