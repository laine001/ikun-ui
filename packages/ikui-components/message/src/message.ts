import Message from './message.vue'

export const messageIconNameList = {
  success: 'success-filling',
  warning: 'warning',
  info: 'prompt',
}

export const messageProps = {
  message: {
    type: String,
    default: (): string => '',
  },
  type: {
    type: String,
    default: (): string => '',
  },
  zIndex: {
    type: Number || String,
  },
  id: {
    type: String,
  },
  onDestory: {
    type: Function,
  },
  duration: {
    type: Number,
    default: (): number => 3000,
  },
} as const

export const messageEmits = {
  destroy: () => true,
  close: () => true,
}

export const MessageProps = messageProps

export const messageTypes = ['success', 'info', 'warning', 'error'] as const

export type MessageServiceOptions = Record<string, unknown>

export type messageInstance = typeof Message
