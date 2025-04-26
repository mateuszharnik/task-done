<script setup lang="ts">
import { useCreateBoardModalContext } from '@views/DashboardView/views/BoardsView/contexts/CreateBoardModalContext';

const { openModal } = useCreateBoardModalContext();
</script>

<template>
  <v-card
    class="w-100"
    color="grey-lighten-3"
    height="100px"
    tag="button"
    link
    @click="openModal"
  >
    <v-card-item class="h-100 text-center d-flex justify-center align-center">
      <v-icon icon="mdi-plus" />
    </v-card-item>
  </v-card>
</template>
