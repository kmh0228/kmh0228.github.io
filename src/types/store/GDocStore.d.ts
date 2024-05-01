declare namespace GDocStore {
  // 文档信息
  interface DocItem extends GDocsApi.DocItem {
    parents?: DocItem[]
  }

  type DocEvents = {
    onActiveMenu: (menu: DocItem) => void
  }

  type EventNames = keyof DocEvents

  // store信息
  interface StoreInfo {
    leftBarWidth: number
    docData: DocItem[] | undefined
    curShowDoc: DocItem[]
    curMenuDoc: DocItem[]
    _events: { [key in EventNames]?: DocEvents[key][] }
  }
}
