import Card from './src/card.vue'
import { withInstall } from '../_utils/withInstall'

const IkCard = withInstall(Card)

export default IkCard

export type { CardInstance, CardProps } from './src/card'
