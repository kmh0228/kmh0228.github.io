// 数据处理相关的方法

/**
 * 获取一个递归数组内部的最大层数
 * @param {Array} array 待获取层级的数组
 * @param {Object} option 配置项
 * @param {string} option.childKey 指向子层的key
 * @param {number} startLevel 计算开始的层级，默认0
 * @return 层级
 */
const getArrayDataLevel = <T>(
  array: T[] | undefined,
  option: { childKey?: string } = {},
  startLevel: number = 0
): number => {
  if (!array || !array.length) {
    return startLevel
  }
  const childKey = (option?.childKey || 'children') as keyof T
  const childrens = array.reduce((cs, cur) => {
    const curChild = cur[childKey] as T[]
    return cs.concat(curChild || [])
  }, [] as T[])
  return getArrayDataLevel(childrens, option, startLevel + 1)
}

/**
 * 将数字转换成中文 eg:12 => 十二
 * @param str 阿拉伯数字
 * @return 中文数字
 */
const numberToChinese = (str: number | string) => {
  str = str + ''
  const len = str.length - 1
  const idxs = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿'
  ]
  // var num = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
  const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

  return str.replace(/([1-9]|0+)/g, function (_, $1, idx) {
    let pos = 0
    if ($1[0] != '0') {
      pos = len - idx
      if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
        return idxs[len - idx]
      }
      return num[$1[0]] + idxs[len - idx]
    } else {
      const left = len - idx
      const right = len - idx + $1.length
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4)
      }
      if (pos) {
        return idxs[pos] + num[$1[0]]
      } else if (idx + $1.length >= len) {
        return ''
      } else {
        return num[$1[0]]
      }
    }
  })
}

/**
 * 计算文字数量
 * @param text 要计算的单词
 */
const letterReg = /[a-zA-Z-]/
const ignoreReg = /[\s,，.。:：;；?？!！’”()[\]{}《》、]/
const beLetter = (chat: string) => letterReg.test(chat) // 是否是单词
const beIgnoreCalc = (chat: string) => ignoreReg.test(chat) // 是否是不用计算数量的符号
const calcTextWordsNumber = (text: string) => {
  if (!text) return 0
  let number = 0
  let afterLetter = false // 是否是跟在字母后面
  for (let i = 0, length = text.length; i < length; i++) {
    const char = text[i]
    const isLetter = beLetter(char)
    const isIgnore = beIgnoreCalc(char)
    if (!isIgnore) {
      if (afterLetter) {
        if (!isLetter) {
          number++
        }
      } else {
        number++
      }
    }
    afterLetter = isLetter
  }
  return number
}

/**
 * 在递归数据中增加parents字段
 * @param data 递归数据
 * @param childKey 子数据的key
 * @param parents 可不填，初始parent值
 */
const setParentsByRecursion = <
  T extends string,
  D extends { [key in T]?: D[] } & { parents?: D[] }
>(
  data: D[] | undefined,
  childKey: T,
  parents: D[] = []
) => {
  if (data)
    data.forEach((dataItem) => {
      dataItem.parents = parents
      setParentsByRecursion(dataItem[childKey], childKey, [...parents, dataItem])
    })
}

/**
 * 在递归数据中删除parents字段
 * @param data 递归数据
 * @param childKey 子数据的key
 * @param returnNew 是否返回新数据，如果为true,则原数据不改变
 */
const delParentsByRecursion = <
  T extends string,
  D extends { [key in T]?: D[] } & { parents?: D[] }
>(
  data: D[] | undefined,
  childKey: T,
  returnNew: boolean = true
): D[] => {
  if (data) {
    if (returnNew) {
      return data.map((n) => {
        const newData = { ...n }
        delete newData.parents
        newData[childKey] = delParentsByRecursion(newData[childKey], childKey, returnNew) as D[T]
        return newData
      })
    } else {
      data.forEach((dataItem) => {
        delete dataItem.parents
        delParentsByRecursion(dataItem[childKey], childKey, returnNew)
      })
    }
  }
  return []
}

export {
  getArrayDataLevel, // 获取一个递归数组内部的最大层数
  numberToChinese, //  将数字转换成中文
  calcTextWordsNumber, // 计算文字数量
  setParentsByRecursion, // 在递归数据中增加parents字段
  delParentsByRecursion // 在递归数据中删除parents字段
}
