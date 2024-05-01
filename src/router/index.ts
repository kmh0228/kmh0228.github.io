import { createRouter, createWebHistory } from 'vue-router'
import interceptors from './interceptors.ts'
import { GRouterItem } from '@/types/GRouter'

const routerList: GRouterItem[] = [
  {
    path: '/',
    component: () => import('@/components/Layout/index.vue'),
    redirect: '/docs',
    children: [
      {
        path: 'docs',
        name: 'docs',
        component: () => import('@/views/docs/docs.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routerList
})

interceptors(router)

export default router
