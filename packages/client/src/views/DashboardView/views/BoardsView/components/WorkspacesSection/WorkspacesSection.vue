<script setup lang="ts">
import { BoardColors } from '@constants/boardConstants';
import type { Workspace } from '@views/DashboardView/types/workspaceTypes';
import WorkspacesList from '@views/DashboardView/views/BoardsView/components/WorkspacesSection/components/WorkspacesList';

const workspaces: Workspace[] = [{
  id: 1,
  name: 'Kodowanie',
  boards: [{
    id: 1,
    name: 'React',
    description: '',
    color: BoardColors.PINK,
    isPrivate: true,
  }, {
    id: 2,
    name: 'Vue',
    color: BoardColors.PINK,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem.',
    isPrivate: false,
  }, {
    id: 3,
    name: 'Angular',
    color: BoardColors.PINK,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem.',
    isPrivate: false,
  }],
}, {
  id: 2,
  name: 'Sport',
  boards: [{
    id: 1,
    name: 'Bieganie',
    color: BoardColors.PINK,
    description: '',
    isPrivate: true,
  }],
}];
</script>

<template>
  <workspaces-list :workspaces="workspaces" />
</template>
