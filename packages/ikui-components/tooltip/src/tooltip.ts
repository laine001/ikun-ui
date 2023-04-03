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
    default: (): string => 'top' as Placement,
  },
  triggerType: {
    type: String,
    default: (): string => 'hover' as TriggerType,
  },
  arrow: {
    type: Boolean,
    default: (): boolean => true,
  },
} as const
