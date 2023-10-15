export interface LunarDateType {
  lunarYear: string
  lunarMonth: string
  lunarDay: string
}

export interface CalendarItemType {
  year: number
  month: number
  day: number
  date?: string
  lunarDate?: LunarDateType
  isToday?: boolean
  isYesterday?: boolean
  isTomorrow?: boolean
  lunarYear?: number
  isCurrentMonth?: boolean
  currentDate?: string
}

export type CalendarOperateDate = 'next-year' | 'prev-year' | 'next-month' | 'prev-month' | 'today'

export const props = {
  showLunar: {
    type: Boolean,
    default: false,
  },
} as const
