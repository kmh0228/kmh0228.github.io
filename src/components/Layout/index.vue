<template>
  <div class="app-layout__container">
    <n-config-provider :theme-overrides="themeOverrides">
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { NConfigProvider } from 'naive-ui'
import { themeOverrides } from '@/config/theme.ts'
</script>
<style lang="scss">
.app-layout__container {
  width: 100%;
  height: 100%;
}
</style>
