<template>
  <div>
    <div color="red">{{ appStore.userName }}</div>
    <div v-for="item in arr" :class="item">谷歌</div>
    <VNode :content="divEl" />
  </div>
</template>
<script setup lang="ts">
  import { h } from 'vue';
  import { useAppStore } from '@/store/modules/appStore';
  import { VNode } from '@/VNode';
  const appStore = useAppStore();
  const arr = [
    'icon-park-twotone-search',
    'icon-park-solid-like',
    'icon-park-outline-search',
    'icon-park-solid-config',
    'icon-park-outline-zoom-in',
  ];
  const zoomOut = 'icon-park-outline-zoom-out';
  const divEl = h('div', { class: zoomOut });
</script>
<style scoped></style>
