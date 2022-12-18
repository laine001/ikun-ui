import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App): void => {
    app.component((component as unknown as { name: string }).name, component)
  }
  return component as SFCWithInstall<T>
}

export const directiveWithInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App): void => {
    app.component((component as unknown as { name: string }).name, component)
  }
  return component as SFCWithInstall<T>
}
