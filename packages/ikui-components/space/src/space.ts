import { computed, createVNode, defineComponent, renderSlot } from 'vue'
import { spaceProps } from './prop'

const Space = defineComponent({
  name: 'IkSpace',
  props: spaceProps,
  setup(props, { slots }) {
    const spaceStyle = computed(() => {
      let gapSize = ''
      const direction = props.direction === 'column' ? 'column' : 'wrap'
      if (props.size === 'large') {
        gapSize = '20'
      } else if (props.size === 'small') {
        gapSize = '12'
      } else if (props.size === 'mini') {
        gapSize = '8'
      } else {
        gapSize = '16'
      }
      return {
        gap: `${gapSize}px`,
        'justify-content': props.justify,
        'flex-direction': direction,
        'flex-wrap': props.wrap ? 'wrap' : 'inherit',
      }
    })
    return () => {
      const children = renderSlot(slots, 'default', { key: 0 }, () => [])
      const childNodes = (children?.children as Array<unknown>).map((nested) => {
        return createVNode(
          'div',
          {
            class: 'ik-space__item',
            style: [],
          },
          {
            default: () => [nested],
          }
        )
      })
      // console.log(children.children, 'children', childNodes)
      return createVNode(
        'div',
        {
          class: 'ik-space',
          style: [spaceStyle.value],
        },
        childNodes
      )
    }
  },
})

export default Space
