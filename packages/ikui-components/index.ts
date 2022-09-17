import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import { vLoading } from './loading/src/directive'
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
    app.component(IkButton.name || 'IkButton', IkButton)
    app.component(IkInput.name || 'IkInput', IkInput)
    app.component(IkIcon.name || 'IkIcon', IkIcon)
    app.directive('loading', vLoading)
  }
}
