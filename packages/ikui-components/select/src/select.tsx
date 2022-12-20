import { defineComponent, ref } from 'vue'
import { props } from './props'

export default defineComponent({
  name: 'ik-select',
  props,
  setup(props, { slots, emit }) {
    console.log(props)
    const selectValue = ref(props.modelValue)
    return () => {
      const Content = (
        <div class="ik-select">
          <div class="ik-select__inner">
            <input class="ik-select__input" value={selectValue.value} readonly type="text" />
            <ik-icon name="arrow-right"></ik-icon>
          </div>
          <div class="ik-select--options">
            {props.option.map((item, index) => (
              <div class="ik-select--item" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )
      return Content
    }
  },
})
