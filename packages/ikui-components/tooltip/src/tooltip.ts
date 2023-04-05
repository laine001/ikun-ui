import type tooltip from './tooltip.vue'

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type TriggerType = 'hover' | 'click'

export const props = {
  placement: {
    type: String,
    default: (): string => 'auto' as Placement,
  },
  triggerType: {
    type: String,
    default: (): string => 'hover' as TriggerType,
  },
  arrow: {
    type: Boolean,
    default: (): boolean => true,
  },
  light: {
    type: Boolean,
    default: (): boolean => false,
  },
} as const

export type IkTooltipInstance = InstanceType<typeof tooltip>
