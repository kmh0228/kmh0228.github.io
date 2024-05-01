declare namespace GDialogStore {
  // 组件入参
  type TProps = { [key: string]: any }

  // 组件回调函数
  type TCallBack = (props?: TProps) => Promise<any> | void

  // 组件信息
  type TDialogItem = {
    key: string
    component: any
    callBack?: TCallBack
    props?: TProps
  }

  // store信息
  interface StoreInfo {
    // 当前显示得弹窗
    curDialogs: TDialogItem[]
  }
}
