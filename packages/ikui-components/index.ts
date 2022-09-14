import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import { vLoading } from './loading/src/directive'
// import { withInstall } from '../utils/install'
// // const IkButton = withInstall(Button)
export {
  IkButton,
  IkInput,
  vLoading
}

import * as types from './button'
export { types }
export default {
  install(app: App): void {
    app.component(IkButton.name || 'IkButton', IkButton)
    app.component(IkInput.name || 'IkInput', IkInput)
    app.directive('loading', vLoading)
  }
}
