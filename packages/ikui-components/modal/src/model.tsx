import { computed, defineComponent } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'ik-modal',
  props,
  setup(props, { slots, emit }) {
    console.log(props, 'props')
    const onClickMask = (e: Event): void => {
      e.preventDefault()
      emit('click-mask')
    }
    const onClickWrap = (e: Event): void => {
      // e.preventDefault()
      e.stopPropagation()
    }
    const computedCls = computed(() => {
      return [
        'ik-modal',
        {
          'ik-modal--show': props.visible,
        },
      ]
    })
    const onCancle = () => {
      emit('click-mask')
    }
    return () => {
      const Content = (
        // <Transition name="slide-top">
        <div class="ik-modal--root" v-show={props.visible} onClick={onClickMask}>
          {/* <div class="ik-modal--mask" onClick={onClickMask}></div> */}
          <div class="ik-modal--wrap">
            <div class={computedCls.value} onClick={onClickWrap}>
              <div class="ik-modal--header">
                <span>这是标题</span>
                <ik-icon name="close" onClick={onCancle}></ik-icon>
              </div>
              <div class="ik-modal--body">{slots.default?.()}</div>
              <div class="ik-modal--footer">
                <ik-button onClick={onCancle}>取 消</ik-button>
                <ik-button type="primary" style={{ marginLeft: '12px' }}>
                  确 定
                </ik-button>
              </div>
            </div>
          </div>
        </div>
        // </Transition>
      )
      // return props.visible ? Content : null
      return Content
    }
  },
})
