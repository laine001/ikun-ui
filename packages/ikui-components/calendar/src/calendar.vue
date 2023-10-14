import { useEffect, useState } from 'react';
import {
  getCurrentDay,
  getCurrentMonth,
  getCurrentYear,
  getMonthDays,
  getWeekDay,
  sloarToLunar,
} from './calendat-utils';
import './calendat.css';

const sortType = ['一', '二', '三', '四', '五', '六', '日'];

console.log(sloarToLunar(2023, 10, 13))
console.log(sloarToLunar(2013, 2, 12))
console.log(sloarToLunar(2001, 12, 29))

const cY = getCurrentYear();
const cM = getCurrentMonth();
const cD = getCurrentDay();

export default () => {
  const [currentYear, setCurrentYear] = useState<number>(cY);
  const [currentMonth, setCurrentMonth] = useState<number>(cM);
  const [currentDay] = useState<number>(cD);
  const [calendarData, setCalendarData] = useState<any>([]);
  useEffect(() => {
    getCalendarData(currentYear, currentMonth);
  }, [currentYear, currentMonth]);
  const getPrevDaysInCurrentMonth = (y: number, m: number): number => {
    const currentMonthFisrtDayInWeek = getWeekDay(y, m, 1);
    const showPrevDaysInCurrentMonth =
      currentMonthFisrtDayInWeek === 0 ? 7 - 1 : currentMonthFisrtDayInWeek - 1;
    return showPrevDaysInCurrentMonth;
  };
  const getCurrentDaysInCurrentMonth = (y: number, m: number) => {
    return getMonthDays(y, m);
  };
  const getNextDaysInCurrentMonth = (y: number, m: number) => {
    const currentMonthDays = getCurrentDaysInCurrentMonth(y, m);
    const currentMonthLastDayInWeek = getWeekDay(y, m, currentMonthDays);
    const showNextDaysInCurrentMonth =
      currentMonthLastDayInWeek === 0 ? 0 : 7 - currentMonthLastDayInWeek;
    return showNextDaysInCurrentMonth;
  };
  const getCalendarData = (cy: number, cm: number) => {
    // console.log(cy, cm)
    const currentMonthDays = getCurrentDaysInCurrentMonth(cy, cm);
    const prevShowDays = getPrevDaysInCurrentMonth(cy, cm);
    const nextShowDays = getNextDaysInCurrentMonth(cy, cm);
    const prevMonthDays = getMonthDays(cy, cm - 1);
    // console.log(prevMonthDays, 'prevMonthDays')
    const currentMonthValue = [];
    const prevMonthValue = [];
    const nextMonthValue = [];

    for (let i = prevShowDays; i > 0; i--) {
      prevMonthValue.push({
        day: prevMonthDays - i + 1,
        isCurrentMonth: false,
        isToday: false,
        isTomorrow: false,
        isYesterday: false,
        currentDate: `${currentYear}-${currentMonth - 1}-${
          prevMonthDays - i + 1
        }`,
      });
    }
    for (let i = 0; i < currentMonthDays; i++) {
      currentMonthValue.push({
        day: i + 1,
        isCurrentMonth: true,
        isToday: i + 1 === currentDay && cm === cM && cy === cY,
        isTomorrow: i + 1 === currentDay + 1,
        isYesterday: i + 1 === currentDay - 1,
        currentDate: `${currentYear}-${currentMonth}-${i + 1}`,
      });
    }
    for (let i = 0; i < nextShowDays; i++) {
      nextMonthValue.push({
        day: i + 1,
        isCurrentMonth: false,
        isToday: false,
        isTomorrow: false,
        isYesterday: false,
        currentDate: `${currentYear}-${currentMonth + 1}-${i + 1}`,
      });
    }
    const data = [...prevMonthValue, ...currentMonthValue, ...nextMonthValue];
    console.log(data, 'data');
    setCalendarData(data);
  };
  const dayCls = (el: any) => {
    const clses = ['calendar-day'];
    if (!el.isCurrentMonth) clses.push('calendar-day--not-current-month');
    if (el.isToday) clses.push('calendar-day-today');
    return clses.join(' ');
  };
  const changeMonth = (type: string) => {
    if (type === 'prev') {
      if (currentMonth === 1) {
        setCurrentYear(currentYear - 1);
        setCurrentMonth(12);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else if (type === 'next') {
      if (currentMonth === 12) {
        setCurrentYear(currentYear + 1);
        setCurrentMonth(1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else if (type === 'today') {
      setCurrentYear(cY);
      setCurrentMonth(cM);
    }
  };
  const onClickDayItem = (item: any) => {
    console.log(item.currentDate, 'item');
  };
  const formatDateNum = (num: number) => {
    if (num < 10) {
      return `0${num}`;
    }
    return num;
  };
  const getLunarDate = (y: number, m: number, d: number) => {
    const o = sloarToLunar(y, m, d)
    return `${o.lunarDay}`;
  }
  return (
    <div className='calendar-page'>
      <h1>Calendar</h1>
      <button onClick={() => changeMonth('prev')}>上个月</button>
      <button onClick={() => changeMonth('today')}>今天</button>
      <button onClick={() => changeMonth('next')}>下个月</button>
      <div className='my-calendar'>
        <div className='calendar-week--title'>
          {sortType.map((item, index) => {
            return (
              <div className='week-title--item' key={index}>
                {item}
              </div>
            );
          })}
        </div>
        <div className='calendar-days'>
          {calendarData.map((el: any, idx: number) => {
            return (
              <div
                className={dayCls(el)}
                key={idx}
                onClick={() => onClickDayItem(el)}
              >
                <span>{formatDateNum(el.day)}</span>
                <span className="lunar-day">{getLunarDate(currentYear, currentMonth, el.day)}</span>
              </div>
            );
          })}
        </div>
        <div className='current-month'>
          {currentYear}-{formatDateNum(currentMonth)}
        </div>
      </div>
    </div>
  );
};
