import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import { vLoading, loadingService } from './loading'
// import { withInstall } from '../utils/install'
// // const IkButton = withInstall(Button)
export {
  IkButton,
  IkInput,
  vLoading,
  IkIcon
}

import * as types from './button'
export { types }
export default {
  install(app: App): void {
    app.component(IkButton.name, IkButton)
    app.component(IkInput.name, IkInput)
    app.component(IkIcon.name, IkIcon)
    app.directive('loading', vLoading)
    app.config.globalProperties.IkLoading = loadingService
  }
}
