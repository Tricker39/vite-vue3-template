<template>
  <div>
    <div color="red">{{ appStore.userName }}</div>
    <div v-for="item in arr" :class="item" uno-text="36px" uno-cursor="pointer" />
  </div>
</template>
<script setup lang="ts">
  // import { ref } from 'vue';
  import { useAppStore } from '@/store/modules/appStore';
  const appStore = useAppStore();
  const arr = [
    'icon-park-twotone-search',
    'icon-park-solid-like',
    'icon-park-outline-search',
    'icon-park-solid-config',
  ];
</script>
<style scoped></style>
