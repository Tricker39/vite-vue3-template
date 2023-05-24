<template>
  <div :class="icon"></div>
</template>
<script setup lang="ts">
import { IconType } from '@/types/CommonType';
import { computed } from 'vue';
const props = defineProps<IconType>();
const icon = computed(() => {
  return props.type && props.theme ? `icon-park-${props.theme == 'multi' ? 'twotone' : props.theme}-${props.type}` : '';
});
</script>
<style lang="scss" scoped></style>
