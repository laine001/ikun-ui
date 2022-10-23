import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import IkCheckbox from './checkbox'
import IkCheckboxGroup from './checkbox-group'
import { message } from './message'
import { IkLoading, loadingService } from './loading'
export {
  IkButton,
  IkInput,
  IkLoading,
  loadingService,
  IkIcon,
  message,
  IkCheckbox,
  IkCheckboxGroup
}

export default {
  install(app: App): void {
    app.component(IkButton.name, IkButton)
    app.component(IkInput.name, IkInput)
    app.component(IkIcon.name, IkIcon)
    app.component(IkCheckbox.name, IkCheckbox)
    app.component(IkCheckboxGroup.name, IkCheckboxGroup)
    // app.component(IkLoading.name, IkLoading)
    app.directive('loading', IkLoading)
    app.config.globalProperties.IkLoading = loadingService
    app.config.globalProperties.$message = message
  }
}
