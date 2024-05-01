import { type RouteRecordRaw } from 'vue-router'

/**
 * 路由meta
 */
interface GRouterMeta {}

/**
 * 路由
 */
type GRouterItem = RouteRecordRaw & {
  meta?: GRouterMeta
}
