<template>
  <div class="app-layout__container">
    <n-config-provider class="app-layout__theme" :theme-overrides="themeOverrides">
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/config/theme.ts'
</script>
<style lang="scss" scoped>
.app-layout__container {
  width: 100%;
  height: 100%;
  .app-layout__theme {
    width: 100%;
    height: 100%;
  }
}
</style>
