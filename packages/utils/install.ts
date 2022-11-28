import { App } from 'vue'

export const withInstall = (main) => {
  main.install = (app: App): void => {
    app.component(main.name, main)
  }
  return main
}
