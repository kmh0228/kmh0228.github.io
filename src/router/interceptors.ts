// 路由拦截器
import { type Router } from 'vue-router'

export default (router: Router) => {
  router.beforeEach((_to, _from, next) => {
    next()
  })
}
