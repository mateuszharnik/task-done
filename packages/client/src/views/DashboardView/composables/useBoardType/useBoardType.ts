import { computed } from 'vue';

import { BoardTypes } from '@constants/boardConstants';

const useBoardType = (isPrivate: boolean) => {
  const boardType = computed<BoardTypes>(
    () => (isPrivate ? BoardTypes.PRIVATE : BoardTypes.PUBLIC),
  );

  return { boardType };
};

export default useBoardType;
