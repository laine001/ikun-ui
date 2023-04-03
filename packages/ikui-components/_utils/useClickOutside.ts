/**
 * clickoutside
 * @param target 监听元素
 * @param callback 回调
 */
export const useClickOutside = (target: HTMLElement, callback: () => void) => {
  const handler = (e) => {
    const element = e.target
    if (element && !e.target.contains(target)) {
      // console.log('not')
    } else {
      callback()
    }
  }
  window.addEventListener('click', handler)
}
