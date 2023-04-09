import { computed, defineComponent } from 'vue'
import { props } from './prop'

export default defineComponent({
  name: 'ik-avatar',
  props,
  // emits: ['click'],
  // slots, attrs
  setup(props) {
    const computedCls = computed(() => {
      return [
        'ik-avatar',
        `ik-avatar--${props.size}`,
        {
          'ik-avatar__square': props.square,
        },
      ]
    })
    return () => {
      const Content = (
        <div class={computedCls.value}>
          <img class="ik-avatar--img" src={props.url} alt="" />
        </div>
      )
      return Content
    }
  },
})
