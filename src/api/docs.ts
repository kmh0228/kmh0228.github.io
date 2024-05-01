import http from '@/api/http.ts'

// 获取文档书v
export const requestGetDocs = () => http.get<GDocsApi.GetDocsResult>('/api/getDocData')
