<template>
  <template v-for="dialog in dialogStore.curDialogs" :key="dialog.key">
    <component
      :is="dialog.component || null"
      v-bind="dialog.props"
      @on-change="
        (data: any) => {
          onChange(data, dialog)
        }
      "
      @on-cancel="onCancel(dialog)"
    ></component>
  </template>
</template>
<script lang="ts" setup>
import useDialogStore from '@/store/dialogStore/dialogStore.ts'

const dialogStore = useDialogStore()

// 改变
const onChange = (data: GDialogStore.TProps, dialog: GDialogStore.TDialogItem) => {
  dialog.callBack?.(data)
  dialogStore.closeDialog(dialog)
}

// 取消
const onCancel = (dialog: GDialogStore.TDialogItem) => {
  dialogStore.closeDialog(dialog)
}
</script>
<style></style>
