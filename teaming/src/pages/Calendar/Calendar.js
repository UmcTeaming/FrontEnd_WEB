import React from 'react'
import { Calendarcalendar } from '../../components/CalendarComponents/Calendarcalendar'
// import { Calendarcalendar } from '../../components/CalendarComponents/Calendarcalendar'

// ================================================
// 프로젝트 생성 후 해당 프로젝트에 대한 세부 일정을 추가,삭제,변경 할 수 있는 가장 상위의 컴포넌트


export const Calendar = () => {
  return (
    <div className='calendarcontainer'>
      <Calendarcalendar/>
    </div>
  )
}
