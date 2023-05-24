<template>
  <div>
    <!-- <div class="icon-park-twotone-add" style="color: orange; font-size: 30px"></div> -->
    <icon :type="type" theme="outline" />
    <div :class="icon || 'icon-park-solid-bill'"></div>
    <button @click="icon = 'icon-park-outline-heart'">like</button>
    <button @click="type = 'heart'">alike</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import Icon from '@/components/Icon.vue';
const icon = ref('');
const type = ref('');
</script>
<style scoped></style>
