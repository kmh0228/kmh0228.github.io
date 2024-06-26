import { RequestStatus } from '@/api/const.ts'
declare namespace GHttp {
  import type { AxiosRequestConfig } from 'axios'
  import type { AxiosRequestHeaders } from 'axios'

  // 请求头
  type TAxiosHeaders = AxiosRequestHeaders & { token?: string }

  // 请求配置
  interface CustomConfig extends AxiosRequestConfig {
    ignoreError?: boolean // 忽略报错拦截
    ignoreIntercept?: boolean // 忽略所有拦截
    headers?: GHttp.TAxiosHeaders
  }

  // 返回数据结果
  interface IRes<T> {
    code: RequestStatus
    data: T | null
    msg: string
  }
}
