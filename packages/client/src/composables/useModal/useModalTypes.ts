import type { Ref } from 'vue';

export interface UseModal<T = unknown> {
  isModalOpen: Ref<boolean>
  modalPayload: Ref<T | undefined>
  closeModal: VoidFunction;
  openModal: (payload: T) => void;
}
