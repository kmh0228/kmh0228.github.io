import { defineStore } from 'pinia'
import { requestGetDocs } from '@/api/docs.ts'
import {
  delParentsByRecursion,
  getArrayDataLevel,
  setParentsByRecursion
} from '@/utils/dataTools.ts'

export const useDocStore = defineStore('docStore', {
  state: (): GDocStore.StoreInfo => {
    return {
      leftBarWidth: 136, // 菜单栏宽度
      docData: undefined, // 文档数据
      curShowDoc: [], // 当前页面显示的文档
      curMenuDoc: [], // 当前菜单里展示的文档
      _events: {} // 绑定的事件
    }
  },
  getters: {
    // 最大层级数
    levelsNum(state) {
      return getArrayDataLevel(state.docData)
    },
    // 当前激活的一级文档
    curDoc(state) {
      return state.curShowDoc[0]
    }
  },
  actions: {
    // 绑定事件
    on<T extends GDocStore.EventNames>(eventName: T, fn: GDocStore.DocEvents[T]) {
      if (!this._events[eventName]) this._events[eventName] = []
      if (!this._events[eventName]?.find((item) => item === fn)) {
        this._events[eventName]?.push(fn)
      }
    },

    // 解绑事件
    off<T extends GDocStore.EventNames>(eventName: T, fn: GDocStore.DocEvents[T]) {
      this._events[eventName] = this._events[eventName]?.filter((n) => n !== fn)
    },

    // 设置当前显示的文档
    setCurShowDoc(curDoc: GDocStore.DocItem | undefined | GDocStore.DocItem[]) {
      if (curDoc?.constructor === Array) {
        this.curShowDoc = curDoc
      } else {
        this.curShowDoc = [curDoc as GDocStore.DocItem]
      }
    },
    // 设置左侧菜单的文档
    setCurMenuDoc(curMenuDoc: GDocStore.DocItem | undefined | GDocStore.DocItem[]) {
      if (curMenuDoc?.constructor === Array) {
        this.curMenuDoc = curMenuDoc
      } else {
        this.curMenuDoc = [curMenuDoc as GDocStore.DocItem]
      }
    },
    // 初始化菜单和内容
    initCurDoc(doc: GDocStore.DocItem | undefined) {
      // 设置当前显示的文档
      this.setCurShowDoc(doc)
      // 设置左侧菜单栏内容
      this.setCurMenuDoc(doc)
    },
    // 激活左侧菜单
    activeMenu(menuItem: GDocStore.DocItem) {
      const newShowDoc = [...(menuItem.parents || []), menuItem]
      this.setCurMenuDoc(menuItem.parents)
      this.setCurShowDoc(newShowDoc)
      this._events['onActiveMenu']?.forEach((callBack) => {
        callBack(menuItem)
      })
    },
    // 打开菜单
    openMenu(menuItem: GDocStore.DocItem) {
      const newShowMenuDoc = [...(menuItem.parents || []), menuItem]
      this.setCurMenuDoc(newShowMenuDoc)
    },

    // 初始化文档
    init() {
      return this.updateDocData()
    },

    // 更新文档数据
    updateDocData() {
      // 获取数据
      return requestGetDocs().then(({ data }) => {
        this.setDocData(data || [])
        return data
      })
    },

    // 设置文档
    setDocData(docData: GDocStore.DocItem[]) {
      // 增加parents字段
      setParentsByRecursion(docData, 'children')
      this.docData = docData
      this.initCurDoc(docData[0])
    },

    // 获取文档
    getDocData(): GDocStore.DocItem[] {
      return delParentsByRecursion(this.docData, 'children')
    }
  }
})
