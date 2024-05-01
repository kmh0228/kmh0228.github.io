// html相关的方法

/**
 * 寻找父级元素
 * @param dom 准备找父级的对象
 * @param filter  父级满足的条件
 * @return 满足条件的父级
 */
const findParentNode = (
  dom: HTMLElement | ParentNode | null,
  filter: (ele: HTMLElement | ParentNode) => boolean
): HTMLElement | ParentNode | null => {
  if (!dom || dom === document.body) {
    return null
  }
  if (filter(dom)) {
    return dom
  } else {
    return findParentNode(dom.parentNode, filter)
  }
}

// 绑定clickOutside事件
let _events: { el: HTMLElement; fn: () => void }[] = []
document.addEventListener('click', (e) => {
  _events.forEach(({ el, fn }) => {
    if (!el.contains(e.target as HTMLElement)) {
      fn()
    }
  })
})

const bindOnClickOutSide = (el: HTMLElement, fn?: () => void) => {
  if (el && fn) _events.push({ el, fn })
}

const offOnClickOutSide = (el: HTMLElement, fn?: () => void) => {
  _events = _events.filter(({ el: el1, fn: fn1 }) => {
    return el1 !== el || fn1 !== fn
  })
}

// 获取当前query的信息
const getQueryInfo = () => {
  const search = location.search
  const info = search.split(/[?&]/g)
  const result: { [key: string]: string } = {}
  info.forEach((qInfo) => {
    const qs = qInfo.split('=')
    if (qs[0] && qs[1]) {
      result[qs[0]] = qs[1]
    }
  })
  return result
}

export {
  findParentNode, // 寻找父级元素
  bindOnClickOutSide, // 绑定点击外部的事件
  offOnClickOutSide, // 取消绑定点击外部的事件
  getQueryInfo // 获取地址栏query
}
