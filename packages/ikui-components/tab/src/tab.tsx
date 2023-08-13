import { computed, defineComponent, onMounted, provide, ref } from 'vue'
import { tabProps as props, tabEmits as emits, tabCtxKey } from './props'

export default defineComponent({
  name: 'ik-tab',
  props,
  emits,
  setup(props, { slots, expose }) {
    const labels = slots.default().map((item) => item.props.label)
    const currentIndex = ref(0)
    const activeName = ref(labels[currentIndex.value])
    const headerRef = ref(null)
    const blockRef = ref(null)
    // console.log(slots.default(), props, labels, 'slots')
    onMounted(() => {
      onClickTabItem(0)
    })
    const onClickTabItem = (index) => {
      currentIndex.value = index
      activeName.value = labels[index]
      const allTabItemNode: NodeList = (headerRef.value as HTMLElement).querySelectorAll('.tab-header--item')
      const currentNode = allTabItemNode[index] as HTMLElement
      blockRef.value.style.left = currentNode.offsetLeft + 'px'
      blockRef.value.style.width = currentNode.offsetWidth + 'px'
    }
    // console.log(activeName.value, 'tabLabels')
    provide(tabCtxKey, {
      props,
      // currentIndex,
      activeName,
    })
    expose({
      activeName,
    })
    const renderHeader = () => {
      const TabHeader = (
        <>
          {slots.default().map((el, index) => {
            return (
              <span
                class={{ 'tab-header--item': true, 'tab-header-item__active': index === currentIndex.value }}
                key={index}
                onClick={() => onClickTabItem(index)}
              >
                {el.props.label}
              </span>
            )
          })}
        </>
      )
      return TabHeader
    }

    const computedCls = computed(() => {
      return [
        `ik-tab`,
        {
          'ik-tab--segmented': props.type === 'segmented',
        },
      ]
    })
    return () => {
      console.log(slots.default())
      const Content = (
        <div class={computedCls.value}>
          <div class="ik-tab--header" ref={headerRef}>
            <span class="header--active__block" ref={blockRef}></span>
            {renderHeader()}
          </div>
          {slots.default() && slots.default().children ? <div class="ik-tab--content">{slots.default()}</div> : null}
        </div>
      )
      return Content
    }
  },
})
