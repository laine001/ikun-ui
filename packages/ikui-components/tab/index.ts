// import Tab from './src/tab'
// export default Tab
import Tab from './src/tab'
import TabItem from './src/tab-item.vue'
import { withInstall } from '../_utils/withInstall'

const IkTab = withInstall(Tab)
const IkTabItem = withInstall(TabItem)

export default IkTab
export { IkTabItem }
// export type { ButtonInstance, ButtonType } from './src/tab'
