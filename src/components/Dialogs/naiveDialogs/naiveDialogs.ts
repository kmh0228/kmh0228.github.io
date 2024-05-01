import { createDiscreteApi } from 'naive-ui'
import { h } from 'vue'

const { dialog } = createDiscreteApi(['dialog'])

export default {
  // 确定删除的弹窗
  confirmDelete: function (message: string) {
    return new Promise((resolve, reject) => {
      dialog.info({
        title: '',
        showIcon: false,
        negativeText: '取消',
        positiveText: '删除',
        content: () => h('span', { innerText: message }),
        class: 'creation_dialog_default',
        onPositiveClick: resolve,
        onNegativeClick: () => reject(true),
        onClose: () => reject(false)
      })
    })
  },

  // 确定成功的弹窗
  confirmSuccess: function (message: string) {
    return new Promise((resolve, reject) => {
      dialog.info({
        title: '',
        showIcon: false,
        positiveText: '确定',
        content: () =>
          h('div', { class: 'success_info' }, [
            h('i', { class: 'iconfont icon-xuanzhong2' }),
            h('span', { class: 'text', innerText: message })
          ]),
        class: 'creation_dialog_default creation_dialog_success',
        onPositiveClick: resolve,
        onClose: () => reject(false)
      })
    })
  },

  // 确定信息的弹窗
  confirmInfo: function (message: string) {
    return new Promise((resolve, reject) => {
      dialog.info({
        title: '',
        showIcon: false,
        negativeText: '取消',
        positiveText: '确定',
        content: () => h('span', { innerText: message }),
        class: 'creation_dialog_default creation_dialog_info',
        onPositiveClick: resolve,
        onNegativeClick: () => reject(true),
        onClose: () => reject(false)
      })
    })
  }
}
