/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentInternalInstance, createVNode, render, shallowReactive, VNode } from 'vue'
import Message from './message.vue'
import { MessageServiceOptions, messageTypes } from './message'
import { useZIndex } from '../../_utils/useZIndex'

export type MessageContext = {
  id: string
  vnode: VNode
  handler: any
  vm: ComponentInternalInstance
  props: any
}

//  shallowReactive 非递归监听，只监听第一层数据的变化
export const instanceList = shallowReactive([])

let seed = 1

const createMessage = (options: MessageServiceOptions) => {
  const container = document.createElement('div')
  const zIndex = useZIndex().nextZIndex()
  const id = `ik-message_${seed++}`
  const props = {
    ...options,
    zIndex,
    id,
    seed,
    onClose() {
      closeMessage(instance)
    },
    onDestroy() {
      render(null, container)
    },
  }
  const vnode = createVNode(Message, props)
  render(vnode, container)
  document.body.appendChild(container.firstElementChild!)

  const vm = vnode.component!
  const instance = {
    vnode,
    id,
    vm,
    props,
    handler: {
      close() {
        vm.exposed!.visible.value = false
      },
    },
  }
  return instance
}

const closeMessage = (instance: any) => {
  const i = instanceList.indexOf(instance)
  if (i === -1) return
  instanceList.splice(i, 1)
  instance.handler.close()
}

const messageService = (messageParams: MessageServiceOptions = {}) => {
  console.log('msgmessageParams', messageParams)
  const options = typeof messageParams === 'string' ? { message: messageParams } : messageParams
  const instance = createMessage(options)

  instanceList.push(instance)
  return instance
}

messageTypes.forEach((type) => {
  messageService[type] = (messageParams) => {
    console.log(type, 'message-type', messageParams)
    const options = typeof messageParams === 'string' ? { message: messageParams } : { ...messageParams }
    const params = {
      type,
      ...options,
    }
    return messageService(params)
  }
})

export const getLastOffset = (id: string): number => {
  const i = instanceList.findIndex((instance) => instance.id === id)

  let prevInstance
  if (i > 0) {
    prevInstance = instanceList[i - 1]
  }
  if (!prevInstance) return 0
  return prevInstance?.vm?.exposed!.bottom.value
}

export default messageService
