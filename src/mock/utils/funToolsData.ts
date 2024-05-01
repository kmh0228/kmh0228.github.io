export default [
  {
    id: 't_1_2_1',
    name: '防抖函数',
    desc: '方法名：antiShake',
    code: `/**
 * 防抖函数
 * @param func 需要防抖的函数
 * @param wait 延迟时间，单位毫秒
 * @returns 返回防抖后的函数
 */
const antiShake = (
  func: (...args: unknown[]) => void,
  wait: number = 100
): ((...args: unknown[]) => void) => {
  let timeout: NodeJS.Timeout | null = null
  return (...args: unknown[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func(...args)
      timeout = null
    }, wait)
  }
}`
  },
  {
    id: 't_1_2_2',
    name: '添加收藏夹',
    desc: '方法名：addFavorite',
    code: `/**
 * 添加收藏夹
 * @param title 添加的标题
 * @param url 添加的地址
 */
const addFavorite = (title: string, url: string) => {
  try {
    ;(window.external as any).addFavorite(url, title)
  } catch (e) {
    try {
      ;(window as any).sidebar.addPanel(title, url, '')
    } catch (e) {
      alert('抱歉，您所使用的浏览器无法完成此操作。加入收藏失败，请使用Ctrl+D进行添加')
    }
  }
}`
  },
  {
    id: 't_1_2_3',
    name: '通过url下载文件',
    desc: '方法名：downloadByUrl',
    code: `/**
 * 通过url下载文件
 * @param url 下载地址
 * @param title 下载文件的名称
 */
const downloadByUrl = (url: string, title?: string) => {
  const a = document.createElement('a')
  if (title) {
    a.download = title //用于设置下载文件的文件名
  }
  a.style.display = 'none'
  a.href = url
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}`
  },
  {
    id: 't_1_2_4',
    name: '通过blob下载文件',
    desc: '方法名：fetDownload',
    code: `/**
 * 通过blob下载文件
 * @param url
 * @param fileName
 */
export const mimeTypeMap: {
  [key: string]: string
} = {
  'text/plain': 'txt',
  'text/html': 'html',
  'application/pdf': 'pdf',
  'application/zip': 'zip',
  'image/jpeg': 'jpeg',
  'application/msword': 'doc',
  'application/docx': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx'
}
const fetDownload = (url: string, fileName?: string) => {
  // 如果是苹果浏览器就噶成zip再下载,要不不会下载
  if (navigator.userAgent.match(/iphone|iPhone|ipad/i)) {
    return new Promise((resolve) => {
      const zip = new JSZip()
      fetch(url).then((res) => {
        res.blob().then((blob) => {
          zip.file(
            fileName || \`\${Date.now()}.\${mimeTypeMap[blob.type as keyof typeof mimeTypeMap]}\`,
            blob,
            { binary: true }
          )
          zip.generateAsync({ type: 'blob' }).then((content) => {
            // 下载压缩包
            saveAs(content, \`\${fileName || new Date().getTime()}.zip\`)
          })
          resolve(undefined)
        })
      })
    })
  } else
    return fetch(url).then((res) => {
      res.blob().then((blob) => {
        const blobUrl = window.URL.createObjectURL(blob)
        const a = document.createElement('a')

        a.style.display = 'none'
        a.href = blobUrl
        a.download =
          fileName || \`\${Date.now()}.\${mimeTypeMap[blob.type as keyof typeof mimeTypeMap]}\`
        document.body.appendChild(a)
        a.click()

        document.body.removeChild(a)
        window.URL.revokeObjectURL(blobUrl)
      })
    })
}`
  },
  {
    id: 't_1_2_5',
    name: '复制文本',
    desc: '方法名：copy',
    code: `/**
 * 复制带换行符的内容
 * @param val 要复制的内容
 */
const copy = (val: string) => {
  return new Promise((resolve) => {
    const textarea = document.createElement('textarea')
    document.body.appendChild(textarea)
    textarea.value = val
    textarea.select()
    if (document.execCommand('copy')) {
      resolve(val)
    }
    document.body.removeChild(textarea)
  })
}`
  },
  {
    id: 't_1_2_6',
    name: '把文字导出成txt文档',
    desc: '方法名：exportTextAsFile',
    code: `/**
 * 把文字导出成txt文档
 * @param text 文字内容
 * @param filename  文档名称
 */
function exportTextAsFile(text: string, filename: string) {
  // 创建一个Blob实例，类型为纯文本
  const blob = new Blob([text], { type: 'text/plain' })

  // 创建一个链接元素
  const link = document.createElement('a')

  // 使用URL.createObjectURL创建一个指向Blob的URL
  link.href = URL.createObjectURL(blob)

  // 设置下载的文件名
  link.download = filename

  // 触发点击
  link.click()

  // 清理URL对象
  URL.revokeObjectURL(link.href)
}`
  },
  {
    id: 't_1_2_7',
    name: '把文字导出成txt文档',
    desc: '方法名：exportTextAsFile',
    code: `// 导入文件
const fileTypes = {
  pdf: { dox: ['pdf'], type: 'application/pdf' },
  word: {
    dox: ['doc', 'docx'],
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword'
  },
  excel: { dox: ['xls'], type: 'application/vnd.ms-excel' },
  zip: { dox: ['zip'], type: 'application/zip' },
  txt: { dox: ['txt'], type: 'text/plain' }
}

type TImportFileOption = {
  acceptType?: (keyof typeof fileTypes)[] // 接受的类型
  multiple?: boolean // 是否多选
}

function importFile(option: TImportFileOption = {}): Promise<File[]> {
  const { acceptType } = Object.assign(
    {
      acceptType: ['pdf', 'word', 'excel', 'txt'],
      multiple: true
    } as TImportFileOption,
    option
  )
  const acceptStr = (acceptType || []).map((n) => fileTypes[n].type).join(',')
  return new Promise((reslove, reject) => {
    const input = document.createElement('input') //创建元素
    input.type = 'file' //添加file类型
    input.multiple = true
    input.setAttribute('accept', acceptStr)
    input.click()
    input.onchange = (event: Event) => {
      if (!event.target) {
        message.warning('js异常')
        reject('error')
        return
      }

      const eTarget = event.target as EventTarget & { files: File[] }
      const files = eTarget.files
      reslove(files)
    }
  })
}`
  },
  {
    id: 't_1_2_7',
    name: '把文字导出成txt文档',
    desc: '方法名：exportTextAsFile',
    code: `// 读取txt文件内容
const readTxtFile = (textFile: File): Promise<string> => {
  const reader = new FileReader()
  return new Promise((resolve) => {
    reader.onload = function (e) {
      const content = e?.target?.result
      resolve(content as string)
    }
    reader.readAsText(textFile)
  })
}`
  }
]
