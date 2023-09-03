import Empty from './src/empty'
import { withInstall } from '../_utils/withInstall'

const IkEmpty = withInstall(Empty)

export default IkEmpty

export type { EmptyInstance, EmptyProps } from './src/prop'
