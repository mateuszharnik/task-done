import type { Board } from '@views/DashboardView/types/boardTypes';

export type Workspace = {
  id: number;
  name: string;
  boards: Board[],
};
