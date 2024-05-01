<template>
  <RouterView />

  <!-- 公用弹窗 -->
  <Dialogs></Dialogs>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import Dialogs from '@/components/Dialogs/index.vue'
import { useAppStore } from '@/store/appStore.ts'

// 初始化项目
useAppStore().init()
</script>
<style></style>
