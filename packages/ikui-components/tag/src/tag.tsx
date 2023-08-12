import { computed, defineComponent, ref, Transition } from 'vue'
import { props } from './prop'

// import { useCssVar, calcColor } from '../../_utils/useCssVar'

export default defineComponent({
  name: 'ik-tag',
  props,
  setup(props, { slots }) {
    const visible = ref<boolean>(true)
    const computedCls = computed(() => {
      return [
        'ik-tag',
        `ik-tag--${props.type}`,
        {
          'ik-tag--double': props.doubleColor,
          'ik-tag--ikun': props.ikun,
        },
      ]
    })
    const onRemoveTag = () => {
      visible.value = false
    }
    return () => {
      const Content = props.doubleColor ? (
        <div class={computedCls.value}>
          <div class="ik-tag--inner">
            <span class="ik-tag--inner__left">{slots?.left()}</span>
            <span class="ik-tag--inner__right">{slots?.right()}</span>
          </div>
        </div>
      ) : (
        <Transition name="tag-fade">
          <div class={computedCls.value} v-show={visible.value}>
            {slots?.default && <div class="ik-tag--inner">{slots?.default()}</div>}
            {props.closeable && (
              <span class="ik-tag--close" onClick={onRemoveTag}>
                <ik-icon size={12} name="xmark"></ik-icon>
              </span>
            )}
          </div>
        </Transition>
      )
      return Content
    }
  },
})
