// 请求状态
export enum RequestStatus {
  SUCCESS = 200, // 请求成功
  ERROR = 400, // 错误请求
  NOT_LOGIN = 401, // 请登录
  TIMEOUT = 408, // 服务超时
  FALL = 500 // 服务器异常
}
