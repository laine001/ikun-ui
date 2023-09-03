import { computed, defineComponent } from 'vue'
import IkButton from '../../button'
import { props } from './prop'

export default defineComponent({
  components: {
    IkButton,
  },
  name: 'ik-empty',
  props,
  emits: ['click'],
  // slots, attrs
  setup(props, { slots }) {
    const computedCls = computed(() => {
      return ['ik-empty']
    })
    return () => {
      const Content = (
        <div class={computedCls.value}>
          <div class="ik-empty--img">
            {props.image ? (
              <img src={props.image} class="ik-empty--image" />
            ) : (
              <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4957">
                <path d="M471.115 386.924L852.85 491.832v367.033L471.115 694.393z" fill="#8E99A3" p-id="4958"></path>
                <path d="M471.554 387.288l-311.778 87.125v385.66l311.782-166.92z" fill="#A0AAB5" p-id="4959"></path>
                <path
                  d="M679.411 101.616s-2.158-54.701-16.645-69.188a37.151 37.151 0 0 0-52.543 52.538c14.487 14.487 69.193 16.646 69.193 16.646zM704.832 123.512s2.159 54.701 16.645 69.188a37.151 37.151 0 0 0 52.543-52.543c-14.487-14.487-69.193-16.645-69.193-16.645z"
                  fill="#CED8E5"
                  opacity=".4"
                  p-id="4960"
                ></path>
                <path
                  d="M699.386 77.054h26.404v26.301a37.767 37.767 0 0 1-37.767 37.767H661.62v-26.301a37.767 37.767 0 0 1 37.767-37.767z"
                  fill="#A8B7C5"
                  p-id="4961"
                ></path>
                <path
                  d="M650.382 94.87l7.167-7.167 52.454 52.454-7.167 7.166zM670.65 78.014l7.167-7.166 52.454 52.454-7.167 7.166z"
                  fill="#DDE5F2"
                  p-id="4962"
                ></path>
                <path
                  d="M708.902 70.312a27.02 26.978 0 1 0 54.04 0 27.02 26.978 0 1 0-54.04 0z"
                  fill="#8B9AA8"
                  p-id="4963"
                ></path>
                <path d="M159.772 475.103L541.506 596.24V1024L159.772 859.542z" fill="#DAE2EC" p-id="4964"></path>
                <path d="M854.776 491.347L536.093 596.255V1024l318.683-164.454z" fill="#C5D0D9" p-id="4965"></path>
                <path
                  d="M853.871 491.095l123.195 164.87-326.95 128.84L537.203 595.43z"
                  fill="#DAE2EC"
                  p-id="4966"
                ></path>
                <path
                  d="M159.315 474.212L52.607 640.666l376.079 144.14L538.564 595.2z"
                  fill="#C5D0D9"
                  p-id="4967"
                ></path>
              </svg>
            )}
          </div>
          {slots.default && slots?.default()}
        </div>
      )
      return Content
    }
  },
})
