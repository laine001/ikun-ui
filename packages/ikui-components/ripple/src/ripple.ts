import { type Directive, type Plugin, type App, type DirectiveBinding } from 'vue'

import './ripple.css'

const context = {
  enableRipple: true,
}

function supportTouch() {
  return 'ontouchstart' in window
}

function getStyle(element: RippleHTMLElement) {
  const { zIndex, position } = window.getComputedStyle(element)
  return { zIndex, position }
}

function getRect(element: RippleHTMLElement) {
  return element.getBoundingClientRect()
}

interface RippleStyles {
  x: number
  y: number
  centerX: number
  centerY: number
  size: number
}

interface RippleOptions {
  removeRipple: any
  color?: string
  disabled?: boolean
  tasker?: number | null
}

interface RippleHTMLElement extends HTMLElement {
  _ripple?: RippleOptions
}

const ANIMATION_DURATION = 250

function setStyles(element: RippleHTMLElement) {
  const { zIndex, position } = getStyle(element)

  element.style.overflow = 'hidden'
  element.style.overflowX = 'hidden'
  element.style.overflowY = 'hidden'
  position === 'static' && (element.style.position = 'relative')
  zIndex === 'auto' && (element.style.zIndex = '1')
}

function computeRippleStyles(element: RippleHTMLElement, event: MouseEvent): RippleStyles {
  const { top, left }: DOMRect = getRect(element)
  const { clientWidth, clientHeight } = element

  const radius: number = Math.sqrt(clientWidth ** 2 + clientHeight ** 2) / 2
  const size: number = radius * 2
  console.log(event, 'event')

  const localX: number = event.clientX - left
  const localY: number = event.clientY - top

  // const localX: number = event.touches[0].clientX - left
  // const localY: number = event.touches[0].clientY - top

  const centerX: number = (clientWidth - radius * 2) / 2
  const centerY: number = (clientHeight - radius * 2) / 2

  const x: number = localX - radius
  const y: number = localY - radius

  return { x, y, centerX, centerY, size }
}

function createRipple(this: RippleHTMLElement, event: MouseEvent) {
  const _ripple = this._ripple as RippleOptions
  _ripple.removeRipple()

  if (_ripple.disabled || _ripple.tasker || !context.enableRipple) {
    return
  }

  const task = () => {
    _ripple.tasker = null

    const { x, y, centerX, centerY, size }: RippleStyles = computeRippleStyles(this, event)
    const ripple: RippleHTMLElement = document.createElement('div')
    ripple.classList.add('ik-ripple')
    ripple.style.opacity = `0`
    ripple.style.transform = `translate(${x}px, ${y}px) scale3d(.3, .3, .3)`
    ripple.style.width = `${size}px`
    ripple.style.height = `${size}px`
    _ripple.color && (ripple.style.backgroundColor = _ripple.color)
    ripple.dataset.createdAt = String(performance.now())

    setStyles(this)

    this.appendChild(ripple)

    window.setTimeout(() => {
      ripple.style.transform = `translate(${centerX}px, ${centerY}px) scale3d(1, 1, 1)`
      ripple.style.opacity = `.25`
    }, 20)
  }

  _ripple.tasker = window.setTimeout(task, 30)
}

function removeRipple(this: RippleHTMLElement) {
  const _ripple = this._ripple as RippleOptions

  const task = () => {
    const ripples: NodeListOf<RippleHTMLElement> = this.querySelectorAll(`.ik-ripple`)
    if (!ripples.length) {
      return
    }

    const lastRipple: RippleHTMLElement = ripples[ripples.length - 1]
    const delay: number = ANIMATION_DURATION - performance.now() + Number(lastRipple.dataset.createdAt)

    window.setTimeout(() => {
      lastRipple.style.opacity = `0`

      window.setTimeout(() => lastRipple.parentNode?.removeChild(lastRipple), ANIMATION_DURATION)
    }, delay)
  }

  _ripple.tasker ? window.setTimeout(task, 30) : task()
}

function forbidRippleTask(this: RippleHTMLElement) {
  if (!supportTouch() || !context.enableRipple) {
    return
  }

  const _ripple = this._ripple as RippleOptions
  _ripple.tasker && window.clearTimeout(_ripple.tasker)
  _ripple.tasker = null
}

function mounted(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
  console.log('el-mounted', el)
  el._ripple = {
    tasker: null,
    ...(binding.value ?? {}),
    removeRipple: removeRipple.bind(el),
  }

  el.addEventListener('mousedown', createRipple, { passive: true })
  el.addEventListener('mousemove', forbidRippleTask, { passive: true })
  el.addEventListener('mousemove', removeRipple, { passive: true })
  document.addEventListener('mouseup', el._ripple.removeRipple, { passive: true })
}

function unmounted(el: RippleHTMLElement) {
  el.removeEventListener('mousedown', createRipple)
  el.removeEventListener('mousemove', forbidRippleTask)
  el.removeEventListener('mousemove', removeRipple)
  document.removeEventListener('mouseup', el._ripple!.removeRipple)
}

function updated(el: RippleHTMLElement, binding: DirectiveBinding<RippleOptions>) {
  const newBinding = {
    color: binding.value?.color,
    disabled: binding.value?.disabled,
  }

  const diff = newBinding.color !== el._ripple?.color || newBinding.disabled !== el._ripple?.disabled

  if (diff) {
    el._ripple = {
      tasker: newBinding.disabled ? null : el._ripple?.tasker,
      removeRipple: el._ripple?.removeRipple,
      ...newBinding,
    }
  }
}

const Ripple: Directive & Plugin = {
  mounted,
  unmounted,
  updated,
  install(app: App) {
    app.directive('ripple', this)
  },
}

export const _RippleComponent = Ripple

export default Ripple
