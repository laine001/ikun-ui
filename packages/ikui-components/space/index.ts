import Space from './src/space'
import { withInstall } from '../_utils/withInstall'

const IkSpace = withInstall(Space)

export default IkSpace

export type { SpaceInstance, SpaceProps } from './src/prop'
