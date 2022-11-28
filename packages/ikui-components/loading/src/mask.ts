import { createApp, h } from 'vue'
export function createLoadingComponent() {
  const loadingComponent = {
    name: 'IkLoading',
    setup() {
      return () => {
        return h(
          'div',
          {
            class: 'ik-loading-wrapper',
          },
          'this is loading'
        )
      }
    },
  }

  const loadingIns = createApp(loadingComponent)
  const vm = loadingIns.mount(document.createElement('div'))
  return {
    vm,
    get $el(): HTMLElement {
      return vm?.$el
    },
  }
}
