import { MockMethod } from 'vite-plugin-mock'
import dataToolsData from './utils/dataToolsData.ts'
import funToolsData from './utils/funToolsData.ts'
import htmlToolsData from './utils/htmlToolsData.ts'
import createPollingData from './utils/createPollingData.ts'

export default [
  // 获取文档数据
  {
    url: '/api/getDocData',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: [
          {
            name: 'ts方法',
            id: 't_1',
            children: [
              {
                id: 't_1_1',
                name: '数据相关方法',
                desc: 'dataToolsData.ts',
                children: dataToolsData
              },
              {
                id: 't_1_2',
                name: '功能相关方法',
                desc: 'funToolsData.ts',
                children: funToolsData
              },
              {
                id: 't_1_3',
                name: 'html相关方法',
                desc: 'htmlToolsData.ts',
                children: htmlToolsData
              },
              {
                id: 't_1_4',
                name: '创建轮询的方法',
                desc: 'createPollingData.ts',
                code: createPollingData
              }
            ]
          }
        ]
      }
    }
  }
] as MockMethod[]
