import { defineComponent, ref, watch, Transition, onMounted } from 'vue'
import { selectProps as props, selectEmits as emits } from './props'
import { useClickOutside } from '../../_utils/useClickOutside'

export default defineComponent({
  name: 'ik-select',
  props,
  emits,
  setup(props, { slots, emit }) {
    const selectValue = ref(props.modelValue)
    const selectOptionVisible = ref<boolean>(false)
    const selectOptionsRef = ref<HTMLElement>(null)

    onMounted(() => {
      console.log(selectOptionsRef.value, 'mounted')
      useClickOutside(selectOptionsRef.value, () => {
        selectOptionVisible.value = false
      })
    })
    const onClickSelectItem = (item) => {
      if (selectValue.value === item) return
      emit('update:modelValue', item)
      selectValue.value = item
      selectOptionVisible.value = false
    }
    const onClickSelct = () => {
      selectOptionVisible.value = true
    }
    // const selectIndex
    watch(
      () => props.modelValue,
      (value) => emit('change', value)
    )

    return () => {
      const Content = (
        <div class="ik-select">
          <div class="ik-select__inner" onClick={onClickSelct}>
            <input class="ik-select__input" value={selectValue.value} readonly type="text" />
            <ik-icon name="arrow-right"></ik-icon>
          </div>

          <Transition name="slide-fade__select">
            <div v-show={selectOptionVisible.value} class="ik-select--options" ref={selectOptionsRef}>
              {props.option.map((item, index) => (
                <div
                  class={{ 'ik-select--item': true, 'ik-select--item__active': item === props.modelValue }}
                  key={index}
                  onClick={() => onClickSelectItem(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </Transition>
        </div>
      )
      return Content
    }
  },
})
