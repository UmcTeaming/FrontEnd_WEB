import React from 'react'
import './Calendarcalendar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

// 일정 달력
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export const Calendarcalendar = () => {
  return (
    <div className='CalendarApp'>
      <div className='Calendartxt'><FontAwesomeIcon icon={faHouse} />&#62;진행중인 프로젝트&#62;00교양 조별과제</div>
      <div className='Calendarcontent'>
        <div className='content'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
        <div className='dailylist'>
          <div className='dailylisttitle'>2023.08.03</div>
          <div className='dailycontent'>
            <div className='colorbar'></div>
            <div className='contenttitle'>티밍 전체 대면회의 - 중구 퇴계로</div>
            <div className='contentdateperiod'>2023.08.03~2023.08.28</div>
            <div className='contentdescription'>oo교양 조별과제</div>
            <div className='contenttimeperiod'>11:00 ~ 13:00</div>
          </div>
          <div className='dailycontent'>
            <div className='colorbar'></div>
            <div className='contenttitle'>티밍 전체 대면회의 - 중구 퇴계로</div>
            <div className='contentdateperiod'>2023.08.03~2023.08.28</div>
            <div className='contentdescription'>oo교양 조별과제</div>
            <div className='contenttimeperiod'>11:00 ~ 13:00</div>
          </div>
          <div className='dailycontent'>
            <div className='colorbar'></div>
            <div className='contenttitle'>티밍 전체 대면회의 - 중구 퇴계로</div>
            <div className='contentdateperiod'>2023.08.03~2023.08.28</div>
            <div className='contentdescription'>oo교양 조별과제</div>
            <div className='contenttimeperiod'>11:00 ~ 13:00</div>
          </div>
          <div className='dailycontent'>
            <div className='colorbar'></div>
            <div className='contenttitle'>티밍 전체 대면회의 - 중구 퇴계로</div>
            <div className='contentdateperiod'>2023.08.03~2023.08.28</div>
            <div className='contentdescription'>oo교양 조별과제</div>
            <div className='contenttimeperiod'>11:00 ~ 13:00</div>
          </div>
        </div>
        <div className='newlist'>
          <div className='newlisttxt'><FontAwesomeIcon icon={faCirclePlus} /> 새 일정 만들기</div>
          <div className='newlistcontent'>
            <input type="newlisttext" placeholder="새 일정의 제목을 적어주세요,,," />
            <button className='newlistbtn'>생성</button>
            <div className='newlistpicker'>
              <div className='periodpicker'>시작 일정</div>
              <input type="newlistpickertext" placeholder=",,," />
              <div className='periodpicker'>마감 일정</div>
              <input type="newlistpickertext" placeholder=",,," />
            </div>
            <div className='newlistperiod'>
              <div className='newliststart'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
              <div className='newlistend'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                </LocalizationProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
