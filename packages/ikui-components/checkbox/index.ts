import Checkbox from './src/checkbox.vue'
import { withInstall } from '../_utils/withInstall'

const IkCheckbox = withInstall(Checkbox)

export default IkCheckbox

export type { CheckboxInstance, CheckboxProps } from './src/checkbox'
