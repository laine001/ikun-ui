import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'
import { withInstall } from '../_utils/withInstall'

const IkCarousel = withInstall(Carousel)
const IkCarouselItem = withInstall(CarouselItem)

export default IkCarousel

export type { CarouselInstance, CarouselProps } from './src/prop'

export { IkCarouselItem }
