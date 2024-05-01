declare namespace GDocsApi {
  interface DocItem {
    id: string // id
    name: string // 标题
    desc?: string // 描述
    code?: string // 代码
    children?: DocItem[]
  }

  type GetDocsResult = DocItem[]
}
