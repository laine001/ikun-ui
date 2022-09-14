import type { Directive } from "vue"
import { createApp } from 'vue'
import Mask from './mask.vue'

interface LoadingType extends HTMLElement {
  loadingIns?: unknown;
  originPosition?: string
}

const insertDom = (el: LoadingType, binding): void => {
  if (el.originPosition !== 'absolute' && el.originPosition !== 'fixed') {
    el.style.position = 'relative'
  }
  const loading = createApp(Mask)
  const loadingIns = loading.mount(document.createElement('div'))
  el.loadingIns = loadingIns
  el.appendChild(loadingIns.$el)
}

export const vLoading: Directive = {
  mounted(el, binding) {
    const originPosition = window.getComputedStyle(el)['position']
    el.originPosition = originPosition
    if (binding.value) {
      insertDom(el, binding)
    }
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      if (!binding.value) {
        el.style.position = el.originPosition
        el.removeChild(el.loadingIns.$el)
      } else {
        insertDom(el, binding)
      }
    }
  }
}
