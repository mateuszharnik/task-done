<script setup lang="ts">
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import type OverlayScrollbars from 'overlayscrollbars';

import type { List } from '@views/DashboardView/types/listTypes';
import TaskListContainer from '@views/DashboardView/views/BoardView/components/Board/components/TaskListContainer';

defineProps<{ list: List }>();

const scrollbarOptions: OverlayScrollbars.Options = {
  className: 'os-theme-dark',
  autoUpdate: true,
  overflowBehavior: {
    x: 'hidden',
  },
};
</script>

<template>
  <task-list-container>
    <v-card class="pa-1 h-100">
      <v-card-text class="d-flex align-center justify-space-between pa-2">
        <p class="ml-2">
          {{ list.name }}
        </p>
        <v-btn
          variant="text"
          icon="mdi-dots-vertical"
          class="rounded-lg"
          size="x-small"
        />
      </v-card-text>
      <v-sheet height="calc(100% - 60px)">
        <overlay-scrollbars-component
          class="h-100"
          :options="scrollbarOptions"
        >
          <v-sheet class="d-flex ga-2 flex-column px-3">
            <v-card
              v-for="index in Array(50)"
              :key="index"
              class="pa-2"
              variant="tonal"
              tag="button"
            >
              <v-card-text class="d-flex flex-column pa-0">
                <div class="d-flex ga-2 mb-1">
                  <v-chip
                    color="red"
                    size="x-small"
                  >
                    Label 1
                  </v-chip>
                  <v-chip
                    color="blue"
                    size="x-small"
                  >
                    Label 2
                  </v-chip>
                </div>
                <p class="text-left">
                  Lorem ipsum dolor sit
                </p>
                <div class="d-flex mt-1 align-center justify-space-between">
                  <div class="d-flex ga-1">
                    <v-icon
                      icon="mdi-eye-outline"
                      class="rounded-lg"
                      size="16px"
                    />
                    <v-icon
                      icon="mdi-format-align-left"
                      class="rounded-lg"
                      size="16px"
                    />
                  </div>
                  <v-avatar
                    size="22px"
                    image="https://randomuser.me/api/portraits/women/19.jpg"
                  />
                </div>
              </v-card-text>
            </v-card>
          </v-sheet>
        </overlay-scrollbars-component>
      </v-sheet>
    </v-card>
  </task-list-container>
</template>
