import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStore = defineStore(
  'main',
  () => {
    const someState = ref('你好 pinia');
    const setState = (state: string) => {
      someState.value = state;
    };
    return { someState, setState };
  },
  {
    persist: true,
  }
);
