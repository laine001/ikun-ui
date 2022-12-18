import Backtop from './src/backtop'
import { withInstall } from '../_utils/withInstall'

const IkBacktop = withInstall(Backtop)

export default IkBacktop

export type { BacktopInstance, BacktopProps } from './src/prop'
