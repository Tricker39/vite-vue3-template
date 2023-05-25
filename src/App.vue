<template>
  <div>
    <!-- <div class="icon-park-twotone-add" style="color: orange; font-size: 30px"></div> -->
    <div :class="icon || 'icon-park-solid-bill'"></div>
    <button @click="icon = 'icon-park-outline-heart'">like</button>
    <button @click="type = 'heart'">alike</button>
    <div>{{ appStore.someState }}</div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import { useStore } from '@/store/modules/appStore';
  const appStore = useStore();
  appStore.setState('hello');
  const icon = ref('');
  const type = ref('');
</script>
<style scoped></style>
