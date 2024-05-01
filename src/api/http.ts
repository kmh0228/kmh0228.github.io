import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { GHttp } from '@/types/api/GHttp'
import { RequestStatus, useStaticData } from '@/api/const.ts'
import { useUserStore } from '@/store/userStore.ts'
import mockData from '@/mock'

const defaultConfig: AxiosRequestConfig = {
  baseURL: '/',
  timeout: 60000
  // withCredentials: true // 允许携带凭证，跨域请求需要设置此为true
}

class Request {
  instance: AxiosInstance

  constructor(options?: GHttp.CustomConfig) {
    this.instance = axios.create({ ...defaultConfig, ...(options || {}) })
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        Object.assign(config.headers, {
          ...options?.headers,
          token: useUserStore().token
        })

        // get请求加时间戳
        if (config.method === 'get') {
          if (!config.params) {
            config.params = {}
          }
          config.params.t = Date.now()
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        const res = response.data

        // 忽略拦截
        if ((response.config as GHttp.CustomConfig).ignoreIntercept) {
          return res
        }

        if (res.code !== RequestStatus.SUCCESS) {
          if (!(response.config as GHttp.CustomConfig).ignoreError) {
            alert(res.msg)
          }
          return Promise.reject(res)
        } else {
          return res
        }
      },
      (error) => {
        if (error.config && !error.config?.ignoreError) {
          alert(error)
        }
        return Promise.reject(error)
      }
    )
  }

  getMockData<T>(url: string): Promise<GHttp.IRes<T>> {
    const data = mockData.find((n) => n.url === url)
    const errorData = {
      code: 400,
      data: null,
      msg: '没有找到服务'
    }
    if (data) {
      // @ts-ignore
      return Promise.resolve(data.response?.() || errorData)
    } else {
      return Promise.resolve(errorData)
    }
  }

  get<T>(url: string, params?: any, config?: GHttp.CustomConfig): Promise<GHttp.IRes<T>> {
    if (useStaticData) return this.getMockData(url)
    return this.instance
      .get(url, { params, ...config })
      .then((res) => {
        return res
      })
      .catch((err) => {
        return Promise.resolve({ ...err, errorData: err, isSuccess: false })
      })
  }

  post<T>(url: string, params?: any, config?: GHttp.CustomConfig): Promise<GHttp.IRes<T>> {
    if (useStaticData) return this.getMockData(url)
    return this.instance
      .post(url, params, config)
      .then((res) => {
        return res
      })
      .catch((err) => {
        return Promise.resolve({ ...err, errorData: err, isSuccess: false })
      })
  }
}

export default new Request()
