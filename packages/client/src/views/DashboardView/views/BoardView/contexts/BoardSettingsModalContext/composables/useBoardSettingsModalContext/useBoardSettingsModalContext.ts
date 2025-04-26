import { inject } from 'vue';

import type { UseModal } from '@composables/useModal';
import { BoardSettingsTabs } from '@views/DashboardView/views/BoardView/types/tabsTypes';

const useBoardSettingsModalContext = () => {
  const context = inject<UseModal<{ activeTab: BoardSettingsTabs }>>('BoardSettingsModalContext');

  if (!context) throw new Error('BoardSettingsModalContext not provided');

  return context;
};

export default useBoardSettingsModalContext;
