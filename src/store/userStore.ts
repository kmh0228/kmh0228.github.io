import { defineStore } from 'pinia'

// 后面登录身份认证 token都用这个
const TOKEN_KEY = 'Token'

const defaultUserInfo: GUserStore.IUserInfo = {
  userName: '游客'
}
export const useUserStore = defineStore('userStore', {
  state: (): GUserStore.StoreInfo => {
    // 获取用户信息
    const localToken = localStorage.getItem(TOKEN_KEY) || ''

    return {
      token: localToken, // token
      userInfo: defaultUserInfo // 用户信息
    }
  }
})
