declare namespace GUserStore {
  interface IUserInfo {
    userName: string
  }

  interface StoreInfo {
    token: string
    userInfo: IUserInfo // 用户名称
  }
}
