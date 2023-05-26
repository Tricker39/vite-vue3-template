import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore(
  'app',
  () => {
    const userName = ref('Tricker');
    return { userName };
  },
  {
    // 插件文档 https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
    persist: true,
  }
);
