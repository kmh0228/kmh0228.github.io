import { defineStore } from 'pinia'
import test from '@/components/Dialogs/test.vue'
import { markRaw } from 'vue'
import naiveDialogs from '@/components/Dialogs/naiveDialogs/naiveDialogs.ts'

// 支持的弹窗
const dialogs = [
  {
    // 测试弹窗
    key: 'test',
    component: markRaw(test)
  }
] as const

const useDialogStore = defineStore('dialogStore', {
  state: (): GDialogStore.StoreInfo => {
    return {
      curDialogs: []
    }
  },
  actions: {
    ...naiveDialogs,
    // 自定义组件弹窗
    ...dialogs.reduce(
      (customDialogs, dialog) => {
        customDialogs[dialog.key] = (props) => {
          const plusItem: GDialogStore.TDialogItem = { ...dialog, props }
          useDialogStore().curDialogs.push(plusItem)
          return new Promise((resolve) => {
            plusItem.callBack = resolve
          })
        }
        return customDialogs
      },
      {} as {
        [p in (typeof dialogs)[number]['key']]: (arg?: GDialogStore.TProps) => Promise<any>
      }
    ),
    closeDialog(dialog: GDialogStore.TDialogItem) {
      useDialogStore().curDialogs = useDialogStore().curDialogs.filter((n) => n !== dialog)
    }
  }
})

export default useDialogStore
