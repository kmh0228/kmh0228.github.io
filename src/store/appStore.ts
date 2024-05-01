import { defineStore } from 'pinia'
import { useDocStore } from '@/store/docStore.ts'

export const useAppStore = defineStore('appStore', {
  state: (): GAppStore.StoreInfo => {
    return {}
  },
  actions: {
    // 加载项目
    init() {
      // 初始化文档数据
      return useDocStore().init()
    }
  }
})
