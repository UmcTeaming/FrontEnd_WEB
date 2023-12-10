import React from 'react'
import { Schedulecalendarcomponents } from '../../components/ScheduleCalendarComponents/Scheculecalendarcomponents'

// =============================================
// 상단의 메뉴 "일정 달력"클릭 시 나타나는 컴포넌트
// 모든 프로젝트의 일정들을 통합해서 보여준다

export const Schedulecalendar = () => {
  return (
    <div className='Schedulecalendarcontainer'>
      <Schedulecalendarcomponents/>
    </div>
  )
}
