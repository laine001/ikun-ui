import type { Directive, DirectiveBinding } from 'vue'
import { createApp } from 'vue'
import Mask from './mask.vue'

export interface LoadingElType extends HTMLElement {
  loadingIns?: ProxyHandler
  originPosition?: string
  style: CSSStyleDeclaration
}

export interface LoadingServiceOptions {
  duration?: number
}

const removeDom = (el: LoadingElType): void => {
  el.style.position = el.originPosition || 'static'
  el.removeChild(el.loadingIns.$el)
}

const insertDom = (el: LoadingElType, binding: DirectiveBinding): void => {
  if (el.originPosition !== 'absolute' && el.originPosition !== 'fixed') {
    el.style.position = 'relative'
  }
  const loading = createApp(Mask)
  const fullscreen = binding.modifiers.fullscreen
  loading.provide('fullscreen', fullscreen)
  const loadingIns = loading.mount(document.createElement('div'))
  el.loadingIns = loadingIns
  el.appendChild(loadingIns.$el)
}

export const IkLoading: Directive = {
  mounted(el: LoadingElType, binding: DirectiveBinding) {
    const originPosition = window.getComputedStyle(el)['position']
    el.originPosition = originPosition
    if (binding.value) {
      insertDom(el, binding)
    }
  },
  updated(el: LoadingElType, binding: DirectiveBinding) {
    if (binding.value !== binding.oldValue) {
      if (!binding.value) {
        removeDom(el)
      } else {
        insertDom(el, binding)
      }
    }
  },
}
export const loadingService = {
  service(options: LoadingServiceOptions) {
    const loading = createApp(Mask)
    loading.provide('fullscreen', true)
    const loadingIns = loading.mount(document.createElement('div'))
    document.body.appendChild(loadingIns.$el)
    setTimeout(() => {
      document.body.removeChild(loadingIns.$el)
    }, options.duration || 2000)
  },
}
