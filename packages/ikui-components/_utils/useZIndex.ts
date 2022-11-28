import { computed, ref } from 'vue'

const zIndex = ref(0)

export const useZIndex = () => {
  const initialIndex = 2000
  const currentZIndex = computed(() => {
    return initialIndex + zIndex.value
  })
  const nextZIndex = () => {
    zIndex.value++
    return currentZIndex.value
  }

  return {
    currentZIndex,
    nextZIndex,
  }
}
