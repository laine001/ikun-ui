<script lang="ts" setup name="ik-calendar">
import { ref, watch, onMounted, computed } from 'vue'
import { props } from './props'
import type { CalendarItemType, CalendarOperateDate } from './props'
import {
  getCurrentDay,
  getCurrentMonth,
  getCurrentYear,
  getMonthDays,
  getWeekDay,
  formatNum,
  sloarToLunar,
} from './calendar-util'

const prop = defineProps(props)
const CY = getCurrentYear()
const CM = getCurrentMonth()
const CD = getCurrentDay()

const currentYear = ref(CY)
const currentMonth = ref(CM)
const currentDay = ref(CD)

const calendarData = ref<CalendarItemType[]>()

const weeks = ['一', '二', '三', '四', '五', '六', '日']

onMounted(() => {
  console.log(currentMonth.value)
  getCalendarData(currentYear.value, currentMonth.value)
})

// watch(
//   currentYear,
//   (oldVal, val) => {
//     console.log(val, 'val')
//     getCalendarData()
//   },
//   { immediate: true }
// )
watch(currentMonth, (newVal) => {
  getCalendarData(currentYear.value, newVal)
})

watch(currentYear, (newVal) => {
  getCalendarData(newVal, currentMonth.value)
})

const getPrevDaysInCurrentMonth = (y: number, m: number) => {
  const currentMonthFisrtDayInWeek = getWeekDay(y, m, 1)
  const showPrevDaysInCurrentMonth = currentMonthFisrtDayInWeek === 0 ? 7 - 1 : currentMonthFisrtDayInWeek - 1
  return showPrevDaysInCurrentMonth
}
const getNextDaysInCurrentMonth = (y: number, m: number) => {
  const currentMonthDays = getMonthDays(y, m)
  const currentMonthLastDayInWeek = getWeekDay(y, m, currentMonthDays)
  const showNextDaysInCurrentMonth = currentMonthLastDayInWeek === 0 ? 0 : 7 - currentMonthLastDayInWeek
  return showNextDaysInCurrentMonth
}

const getCalendarData = (y: number, m: number) => {
  console.log(y, m)
  const prevMonthDays = getMonthDays(y, m - 1)
  const currentMonthDays = getMonthDays(y, m)

  const prevShowDays = getPrevDaysInCurrentMonth(y, m)
  const nextShowDays = getNextDaysInCurrentMonth(y, m)
  console.log(y, m, currentMonthDays)

  const currentMonthValue: CalendarItemType[] = []
  const prevMonthValue: CalendarItemType[] = []
  const nextMonthValue: CalendarItemType[] = []
  for (let i = prevShowDays; i > 0; i--) {
    prevMonthValue.push({
      year: currentYear.value,
      month: currentMonth.value - 1,
      day: prevMonthDays - i + 1,
      isCurrentMonth: false,
      isToday: false,
      isTomorrow: false,
      isYesterday: false,
      currentDate: `${currentYear.value}-${currentMonth.value - 1}-${prevMonthDays - i + 1}`,
      lunarDate: sloarToLunar(currentYear.value, currentMonth.value - 1, prevMonthDays - i + 1),
    })
  }

  for (let i = 0; i < currentMonthDays; i++) {
    currentMonthValue.push({
      year: currentYear.value,
      month: currentMonth.value,
      day: i + 1,
      isCurrentMonth: true,
      isToday: i + 1 === currentDay.value && m === CM && y === CY,
      isTomorrow: i + 1 === currentDay.value + 1,
      isYesterday: i + 1 === currentDay.value - 1,
      currentDate: `${currentYear.value}-${currentMonth.value}-${i + 1}`,
      lunarDate: sloarToLunar(currentYear.value, currentMonth.value, i + 1),
    })
  }

  for (let i = 0; i < nextShowDays; i++) {
    nextMonthValue.push({
      year: currentYear.value,
      month: currentMonth.value + 1,
      day: i + 1,
      isCurrentMonth: false,
      isToday: false,
      isTomorrow: false,
      isYesterday: false,
      currentDate: `${currentYear.value}-${currentMonth.value + 1}-${i + 1}`,
      lunarDate: sloarToLunar(currentYear.value, currentMonth.value + 1, i + 1),
    })
  }
  const data = [...prevMonthValue, ...currentMonthValue, ...nextMonthValue]
  console.log(data, 'data')
  calendarData.value = data
}
const currentWeek = computed(() => {
  const week = getWeekDay(currentYear.value, currentMonth.value, currentDay.value)
  return `周${weeks[week === 0 ? 6 : week - 1]}`
})
const currentFullDate = computed(() => {
  return `${currentYear.value}年${currentMonth.value}月`
})
const changeCalendarDate = (type: CalendarOperateDate) => {
  if (type === 'next-month') {
    if (currentMonth.value === 12) {
      currentMonth.value = 1
      currentYear.value++
    } else {
      currentMonth.value++
    }
  } else if (type === 'prev-month') {
    if (currentMonth.value === 1) {
      currentMonth.value = 12
      currentYear.value--
    } else {
      currentMonth.value--
    }
  } else if (type === 'prev-year') {
    currentYear.value--
  } else if (type === 'next-year') {
    currentYear.value++
  } else if (type === 'today') {
    currentYear.value = CY
    currentMonth.value = CM
  }
}
</script>
<template>
  <div class="ik-calendar">
    <div class="ik-calendar-action">
      <div class="ik-calendar__current-date">
        <span class="ik-calendar__date-info">{{ currentFullDate }}</span>
        <span class="ik-calendar__week-info" v-if="currentYear === CY && currentMonth === CM">{{ currentWeek }}</span>
      </div>
      <div class="ik-calendar__opeation">
        <button class="ik-calendar__opeation-btn" @click="() => changeCalendarDate('prev-year')">上一年</button>
        <button class="ik-calendar__opeation-btn" @click="() => changeCalendarDate('prev-month')">上个月</button>
        <button class="ik-calendar__opeation-btn" @click="() => changeCalendarDate('today')">今天</button>
        <button class="ik-calendar__opeation-btn" @click="() => changeCalendarDate('next-month')">下个月</button>
        <button class="ik-calendar__opeation-btn" @click="() => changeCalendarDate('next-year')">下一年</button>
      </div>
    </div>
    <div class="ik-calendar-header">
      <span class="ik-calendar-header__weeks-item" v-for="(el, index) in weeks" :key="index">{{ el }}</span>
    </div>
    <div class="ik-calendar-content">
      <div
        :class="[
          'ik-calendar-content__days-item',
          {
            'ik-calendar-content__days-today': item.isToday,
            'ik-calendar__days-prev-month': !item.isCurrentMonth,
            'ik-calendar__days-next-month': !item.isCurrentMonth,
          },
        ]"
        v-for="(item, key) in calendarData"
        :key="key"
      >
        <span class="cal-day">{{ item.day }}</span>
        <span v-if="prop.showLunar" class="cal-lunar-day">{{ item.lunarDate.lunarDay }}</span>
      </div>
    </div>
    <div class="ik-calendar-bgDate">{{ `${currentYear}-${formatNum(currentMonth)}` }}</div>
  </div>
</template>
