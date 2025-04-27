<script setup lang="ts">
import type { Board as BoardType } from '@views/DashboardView/types/boardTypes';
import BoardTopBar from '@views/DashboardView/views/BoardView/components/BoardTopBar';
import Board from '@views/DashboardView/views/BoardView/components/Board';
import { BoardColors } from '@constants/boardConstants';

defineOptions({ inheritAttrs: false });

const boardData: BoardType = {
  id: 3,
  name: 'Angular',
  color: BoardColors.PINK,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem.',
  isPrivate: true,
};
</script>

<template>
  <board-top-bar :board="boardData" />
  <board :board="boardData" />
</template>
