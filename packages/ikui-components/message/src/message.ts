import Message from './message.vue'

export const messageProps = {
  message: {
    type: String,
    default: (): string => ''
  },
  type: {
    type: String
  },
  zIndex: {
    type: Number || String
  },
  id: {
    type: String
  },
  onDestory: {
    type: Function
  }
} as const

export const MessageProps = messageProps

export const messageTypes =
  ['success', 'info', 'warning', 'error'] as const

export type MessageServiceOptions = {}

export type messageInstance = typeof Message