import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import { message } from './message'
import { IkLoading, loadingService } from './loading'
// import { withInstall } from '../utils/install'
// // const IkButton = withInstall(Button)
export {
  IkButton,
  IkInput,
  IkLoading,
  loadingService,
  IkIcon,
  message
}

import * as types from './button'
export { types }
export default {
  install(app: App): void {
    app.component(IkButton.name, IkButton)
    app.component(IkInput.name, IkInput)
    app.component(IkIcon.name, IkIcon)
    // app.component(IkLoading.name, IkLoading)
    app.directive('loading', IkLoading)
    app.config.globalProperties.IkLoading = loadingService
    app.config.globalProperties.$message = message
  }
}
