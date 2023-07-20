import React from 'react'
import './Calendarcalendar.css';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const Calendarcalendar = () => {
  return (
    <div className='CalendarApp'>
      <div className='Calendartxt'>&#62;진행중인 프로젝트&#62;00교양 조별과제</div>
      {/* <div className='content'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      </div> */}
      <div className='Calendarnew'>
        새 일정 만들기 
      </div>
    </div>
  )
}
