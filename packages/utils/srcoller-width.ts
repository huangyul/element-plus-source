import isServer from './isServer'

let scorllBarWidth: number

/**
 * 计算滚动条的宽度
 * @returns 滚动条的宽度
 */
export default function(): number {
  if (isServer) return 0
  if (scorllBarWidth !== undefined) {
    return scorllBarWidth
  }

  const outer = document.createElement('div')
  outer.className = 'el-scrollbar__wrap'
  outer.style.width = '100px'
  outer.style.position = 'absolute'
  outer.style.top = '-9999px'
  document.body.appendChild(outer)

  const widthNoScroll = outer.offsetWidth
  outer.style.overflow = 'scroll'

  const inner = document.createElement('div')
  inner.style.width = '100%'
  outer.appendChild(inner)

  const widthWithScroll = inner.offsetWidth
  outer.parentNode.removeChild(outer)
  scorllBarWidth = widthNoScroll - widthWithScroll

  return scorllBarWidth
}
