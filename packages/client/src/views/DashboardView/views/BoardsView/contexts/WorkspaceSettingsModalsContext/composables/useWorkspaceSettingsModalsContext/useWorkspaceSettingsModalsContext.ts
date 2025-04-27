import { inject } from 'vue';

import type { UseModal } from '@composables/useModal';

const useWorkspaceSettingsModalsContext = () => {
  const context = inject<{ renameModal: UseModal, deleteModal: UseModal }>('WorkspaceSettingsModalsContext');

  if (!context) throw new Error('WorkspaceSettingsModalsContext not provided');

  return context;
};

export default useWorkspaceSettingsModalsContext;
