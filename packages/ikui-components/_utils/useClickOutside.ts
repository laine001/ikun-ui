/**
 * clickoutside
 * @param target 监听元素
 * @param callback 回调
 */
export const useClickOutside = (target: HTMLElement, callback: () => void) => {
  const handler = (e) => {
    if (e.target.contains(target)) {
      callback()
    }
  }
  window.addEventListener('click', handler)
}
