import Button from './src/button.vue'
import { withInstall } from '../_utils/withInstall'

const IkButton = withInstall(Button)

export default IkButton

export type { ButtonInstance, ButtonType } from './src/button'
