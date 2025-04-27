import { ref } from 'vue';
import type { UseModal } from '@composables/useModal/useModalTypes';

const useModal = <T = unknown>(initialValue = false): UseModal<T> => {
  const isModalOpen = ref(initialValue);
  const modalPayload = ref<T | undefined>();

  const closeModal = () => {
    modalPayload.value = undefined;
    isModalOpen.value = false;
  };

  const openModal = (payload: T) => {
    modalPayload.value = payload;
    isModalOpen.value = true;
  };

  return {
    isModalOpen,
    closeModal,
    openModal,
    modalPayload,
  };
};

export default useModal;
