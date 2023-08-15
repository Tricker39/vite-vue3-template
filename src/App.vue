<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
  :root {
    --primary-color: #6e3dff;
  }
  .page-container {
    width: 1920px;
    margin: 0 auto;
  }
  #nprogress {
    .bar {
      background-color: var(--primary-color);
    }
  }
</style>
