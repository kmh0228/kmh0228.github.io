<template>
  <div class="msg">
    <span>{{ userStore.userInfo.userName }}</span>
    <n-icon size="14" :component="AccessibilitySharp" />
    <n-button @click="btnClick">Default</n-button>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from '@/store/userStore.ts'
import { onBeforeMount } from 'vue'
import { NButton, NIcon } from 'naive-ui'
import { AccessibilitySharp } from '@vicons/ionicons5'
import useMessage from '@/hooks/useMessage/useMessage.ts'
import useDialogStore from '@/store/dialogStore/dialogStore.ts'

const message = useMessage()

const userStore = useUserStore()

const dialogStore = useDialogStore()

const btnClick = () => {
  message?.warning('aaa')
  dialogStore.test()
}

onBeforeMount(() => {})
</script>
<style lang="scss">
.msg {
  span {
    @include ellipsis();
    display: block;
    color: #aaa;
  }
}
</style>
