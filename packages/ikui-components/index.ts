import { App } from 'vue'
import IkButton from './button'
import IkInput from './input'
import IkIcon from './icon'
import IkCheckbox from './checkbox'
import IkCheckboxGroup from './checkbox-group'

import IkBacktop from './backtop'
import IkSelect from './select'
import IkAvatar from './avatar'
import IkModal from './modal'
import IkSwitch from './switch'
import IkTooltip from './tooltip'
import IkSpace from './space'
import IkCard from './card'
import IkDrawer from './drawer'
import IkTab from './tab'
import IkMenu from './menu'
import IkTag from './tag'
import IkLockScreen from './lock-screen'
import IkCollapseTransition from './collapse-transition'
import IkSlider from './slider'
import IkEmpty from './empty'
import { IkTabItem } from './tab'
import { IkContainer, IkAside, IkMain, IkHeader } from './layout'
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
  IkCheckboxGroup,
  IkBacktop,
  IkModal,
  IkContainer,
  IkAside,
  IkMain,
  IkHeader,
  IkAvatar,
  IkSelect,
  IkSwitch,
  IkSpace,
  IkCard,
  IkDrawer,
  IkTab,
  IkMenu,
  IkLockScreen,
  IkTag,
  IkCollapseTransition,
  IkSlider,
  IkEmpty,
}

export * from './button'

export default {
  install(app: App): void {
    app.component(IkButton.name, IkButton)
    app.component(IkInput.name, IkInput)
    app.component(IkIcon.name, IkIcon)
    app.component(IkCheckbox.name, IkCheckbox)
    app.component(IkCheckboxGroup.name, IkCheckboxGroup)
    app.component(IkBacktop.name, IkBacktop)
    app.component(IkModal.name, IkModal)
    app.component(IkContainer.name, IkContainer)
    app.component(IkAside.name, IkAside)
    app.component(IkMain.name, IkMain)
    app.component(IkHeader.name, IkHeader)
    app.component(IkAvatar.name, IkAvatar)
    app.component(IkSelect.name, IkSelect)
    app.component(IkSwitch.name, IkSwitch)
    app.component(IkTooltip.name, IkTooltip)
    app.component(IkCard.name, IkCard)
    app.component(IkSpace.name, IkSpace)
    app.component(IkDrawer.name, IkDrawer)
    app.component(IkMenu.name, IkMenu)
    app.component(IkTab.name, IkTab)
    app.component(IkTabItem.name, IkTabItem)
    app.component(IkLockScreen.name, IkLockScreen)
    app.component(IkTag.name, IkTag)
    app.component(IkSlider.name, IkSlider)
    app.component(IkEmpty.name, IkEmpty)
    app.component(IkCollapseTransition.name, IkCollapseTransition)
    app.directive('loading', IkLoading)
    app.config.globalProperties.IkLoading = loadingService
    app.config.globalProperties.$message = message
  },
}
