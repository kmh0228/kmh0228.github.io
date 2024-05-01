const funStr = `/**
 * 轮询功能
 * */
import axios, { Canceler, CancelToken } from 'axios'

export type TServerResult = {
  code: number
  data: any
  msg?: string
}

type TPollingOption = {
  server?: (cancelToken: CancelToken) => Promise<TServerResult> // 要轮询的服务
  callBack: (res: TServerResult) => boolean | unknown // 服务回调，如果返回false则终止轮询
  timeout?: number // 轮询周期
}
export class Polling {
  // 配置项
  options: TPollingOption

  // 轮询状态
  bePolling: boolean = false

  // 轮询计时器
  private pollTimer: NodeJS.Timeout | undefined

  // cancelToken - canceler
  private canceler: Canceler | undefined

  constructor(options: TPollingOption) {
    this.options = Object.assign(
      {
        timeout: 3000
      },
      options || {}
    )
  }

  // 下一步轮询
  private next() {
    clearTimeout(this.pollTimer)
    this.pollTimer = setTimeout(() => {
      this.startPoll()
    }, this.options.timeout)
  }

  // 开启轮询
  startPoll() {
    this.bePolling = true
    if (!this.options.server) {
      if (this.options.callBack({ code: 0, data: null }) !== false) {
        this.next()
      }
      return
    }
    const cancelToken = new axios.CancelToken((c) => {
      this.canceler = c
    })
    this.options
      .server(cancelToken)
      .then((res) => {
        if (this.options.callBack(res) !== false) {
          this.next()
        } else {
          this.bePolling = false
        }
      })
      .catch(() => {
        this.next()
      })
      .finally(() => {
        this.canceler = undefined
      })
    return this
  }

  // 停止轮询
  stopPoll() {
    clearTimeout(this.pollTimer)
    this.bePolling = false
    if (this.canceler) {
      this.canceler()
      this.canceler = undefined
    }
  }
}

export default (options: TPollingOption) => {
  return new Polling(options)
}
`

export default funStr
