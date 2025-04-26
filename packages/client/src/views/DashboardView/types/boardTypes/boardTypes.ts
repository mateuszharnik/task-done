import { type BoardColors } from '@constants/boardConstants';

export type BoardColorPickerOptions = {
  label: string;
  value: BoardColors
};

export type Board = {
  id: number;
  name: string;
  color: BoardColors;
  description: string;
  isPrivate: boolean;
};
