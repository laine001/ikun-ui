import Carousel from './src/carousel.vue'
import { withInstall } from '../_utils/withInstall'

const IkCarousel = withInstall(Carousel)

export default IkCarousel

export type { CarouselInstance, CarouselProps } from './src/prop'
