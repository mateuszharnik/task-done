<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

import { BoardColorsClasses, BoardColors } from '@constants/boardConstants';
import type { BoardColorPickerOptions } from '@views/DashboardView/types/boardTypes';

defineProps<{ errorMessage?: string }>();

const color = defineModel<string>({ required: true });

const { t } = useTranslation();

const colors: BoardColorPickerOptions[] = [
  { label: t('boards.boardColors.LIGHT'), value: BoardColors.LIGHT },
  { label: t('boards.boardColors.DARK'), value: BoardColors.DARK },
  { label: t('boards.boardColors.ORANGE'), value: BoardColors.ORANGE },
  { label: t('boards.boardColors.RED'), value: BoardColors.RED },
  { label: t('boards.boardColors.GREEN'), value: BoardColors.GREEN },
  { label: t('boards.boardColors.BLUE'), value: BoardColors.BLUE },
  { label: t('boards.boardColors.PINK'), value: BoardColors.PINK },
  { label: t('boards.boardColors.PURPLE'), value: BoardColors.PURPLE },
  { label: t('boards.boardColors.YELLOW'), value: BoardColors.YELLOW },
  { label: t('boards.boardColors.TEAL'), value: BoardColors.TEAL },
];
</script>

<template>
  <v-radio-group :error-messages="errorMessage">
    <v-row
      class="d-flex flex-wrap ga-2"
      justify="center"
      no-gutters
    >
      <div
        v-for="colorOption in colors"
        :key="colorOption.value"
      >
        <label :for="colorOption.value">
          <span class="d-sr-only">
            {{ colorOption.label }}
          </span>
          <input
            :id="colorOption.value"
            v-model="color"
            :value="colorOption.value"
            :checked="colorOption.value === color"
            :class="`bg-${BoardColorsClasses[colorOption.value]}`"
            name="color"
            type="radio"
            class="color-radio-input rounded-sm cursor-pointer mdi"
          >
        </label>
      </div>
    </v-row>
  </v-radio-group>
</template>

<style lang="scss" scoped>
.color-radio-input {
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 40px;
  height: 40px;
  position: relative;

  &::before {
    content: "\F012C";
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
  }

  &:checked::before {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: 3px solid #222222;
  }

  @media (min-width: 600px) {
    width: 54px;
    height: 54px;

    &::before {
      width: 54px;
      height: 54px;
    }
  }
}
</style>
