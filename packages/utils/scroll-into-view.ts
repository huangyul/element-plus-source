import isServer from './isServer'

/**
 * 容器元素跳转到选择的元素的位置
 * @param container 容器元素
 * @param selected 选择的元素
 * @returns
 */
export default function(container: HTMLElement, selected: HTMLElement): void {
  // 如果不是浏览器端，则不执行
  if (isServer) return

  // 如果没有目标元素，则跳到第一个元素的顶部
  if (!selected) {
    container.scrollTop = 0
    return
  }

  const offsetParents = []
  let pointer = selected.offsetParent // 获取元素的上一个最近的父元素

  // 当能获取到上一个父元素，并且父元素不等于容器元素，父元素存在于容器元素中
  while (
    pointer !== null &&
    container !== pointer &&
    container.contains(pointer)
  ) {
    offsetParents.push(pointer)
    pointer = (pointer as HTMLElement).offsetParent
  }

  // 获取选择元素到顶部的高
  const top =
    selected.offsetTop +
    offsetParents.reduce((pre, cur) => pre + cur.offsetTop, 0)
  // 获取选择元素底部到顶部的高
  const bottom = top + selected.offsetHeight
  // 当前滚动条的高（滚动条已滚动的距离）
  const viewRectTop = container.scrollTop
  const viewRectBottom = viewRectTop + container.scrollHeight

  if (top < viewRectTop) {
    container.scrollTop = top
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight
  }
}
