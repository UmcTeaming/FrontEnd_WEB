import "./Calendarcalendar.css";
import React, { useState, Fragment, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CalendarIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
// 일정 추가 부분
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState } from "../atom";
import { id } from "date-fns/locale";

// className함수는 여러 개의 클래스 이름들을 받아들이고, 조건에 따라 필터링하여 결합한 문자열을 반환함
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Calendarcalendar = () => {
  const [memberId, setMemebrId] = useRecoilState(memberIdState);
  const { projectId } = useParams();
  const [dateList, setDateList] = useState();
  const [daymeetings, setDayMeetings] = useState();

  // 일정 데이터를 받는 부분_해당 내용들은 예시
  const [meetings, setMeetings] = useState([
    // {
    //   schedule_id: 22,
    //   schedule_name: "티밍 기획서 이다다",
    // schedule_start: "2023-07-07",
    // schedule_start_time: "10:30:00",
    // schedule_end: "2023-07-07",
    // schedule_end_time: "14:30:00",
    // },
    // {
    // id: 1,
    // name: "티밍 전체 대면 회의1 - 중구 퇴계로",
    // project_name: "00교양 조별 과제",
    // startDatetime: "2023-08-11T13:00",
    // endDatetime: "2023-08-13T14:30",
    // project_color: "#d79ac3",
    // },
  ]);

  // 프로젝트 전체 스케줄 확인
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/schedule`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        // 배열 내의 각 스케줄 정보를 출력
        data.data.forEach((schedule) => {
          console.log("Schedule Name:", schedule.schedule_name);
          console.log("Start Date:", schedule.schedule_start);
          console.log("End Date:", schedule.schedule_end);
          console.log("Schedule Start Time:", schedule.schedule_start_time);
          console.log("Schedule End Time:", schedule.schedule_end_time);

          const newMeeting = {
            id: schedule.schedule_id,
            name: schedule.schedule_name,
            // startDatetime: schedule.schedule_start,
            // endDatetime: schedule.schedule_end,
            startDatetime: `${schedule.schedule_start}T${schedule.schedule_start_time}`,
            endDatetime: `${schedule.schedule_end}T${schedule.schedule_end_time}`,
          };
          // setMeetings 함수를 사용하여 기존 meetings 배열에 새 일정을 추가한다
          setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
        });

        // 첫 번째 스케줄의 시작 날짜를 선택한 날짜로 설정
        if (data.data.length > 0) {
          const newDay = parseISO(data.data[0].schedule_start);
          setSelectedDay(newDay);
        }
      })
      .catch((error) => {
        console.error("Error fetching schedule data:", error);
      });
  }, []);

  // 일정 추가
  const ScheduleCreate = () => {
    const title = newlisttextRef.current.value; //새 일정의 제목을 입력하는 부분에서 얻어온 값
    // 선택된 날짜와 시간을 이용하여 시간 및 종료 날짜와 시간을 문자열로 생성
    const startDateTime = `${format(
      selectedDate1,
      "yyyy-MM-dd"
    )}T${selectedTime1}`;
    const endDateTime = `${format(
      selectedDate2,
      "yyyy-MM-dd"
    )}T${selectedTime2}`;

    // 만약 일정 제목이 빈 문자열이라면 함수 실행을 중지하고 반환합니다
    if (title === "") return;

    // 새 일정을 생성하기 위해 서버로 보낼 요청 데이터 객체로 일정 이름, 시작, 종료 날자 및 시간이 포함된다
    const requestData = {
      schedule_id: id,
      schedule_name: title,
      schedule_start: format(selectedDate1, "yyyy-MM-dd"),
      schedule_end: format(selectedDate2, "yyyy-MM-dd"),
      schedule_start_time: `${selectedTime1}:00`,
      schedule_end_time: `${selectedTime2}:00`,
    };

    //Axios를 사용하여 서버에 POST 요청을 보낸다. 요청 URL에 requestData를 함께 보내어 새 일정을 생성한다
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/schedule`,
        requestData
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const newMeeting = {
          id: response.data.data.scheduleId,
          name: title,
          startDatetime: startDateTime,
          endDatetime: endDateTime,
        };

        // setMeetings 함수를 사용하여 기존 meetings 배열에 새 일정을 추가한다
        setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);

        // 다음 부분을 추가하여 해당 날짜에 생성된 일정을 보여줍니다.
        const newDay = parseISO(startDateTime);
        setSelectedDay(newDay);

        setSelectedDay(selectedDate1); // 새 회의의 시작 날짜로 선택한 날짜 업데이트

        // 이 부분은 생성 버튼을 눌렀을 때 입력필드, 날짜, 시간 선택을 초기화한다
        newlisttextRef.current.value = "";
        setSelectedDate1(new Date());
        setSelectedDate2(new Date());
        setSelectedTime1("00:00");
        setSelectedTime2("00:00");
      })
      .catch((err) => console.log(err));
  };

  // 일정 삭제
  const ScheduleDelete = (scheduleId) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/projects/${memberId}/${projectId}/${scheduleId}`
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        const updatedMeetings = meetings.filter(
          (meeting) => meeting.id !== scheduleId
        );
        setMeetings(updatedMeetings);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today); //selectDay상태와 setCount 함수를 선언
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  //useState 함수를 호출하여 초기 상태값을 설정, today변수에 저장된 현재 날짜를 초기 상태로 사용함
  //currentMonth는 현재의 상태값을, setCurrentMonth는 상태값을 업데이트하는 함수를 가리킨다
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  // 시작과 끝 일정 사이에 관련된 코드로 주어진 startDate와 endDate 사이의 날짜 배열을 반환하는 함수
  const daysBetween = (startDate, endDate) => {
    const days = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
      days.push(currentDate);
      currentDate = add(currentDate, { days: 1 });
    }
    return days;
  };

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function Meeting({ meeting, onDelete }) {
    let startDateTime = parseISO(meeting.startDatetime);
    let endDateTime = parseISO(meeting.endDatetime);
    // project_color 값을 가져와서 스타일로 적용
    const colorStyle = {
      backgroundColor: meeting.project_color,
    };

    return (
      <div className="schedulecomponents ">
        <li className="flex items-center border border-white-300 mb-2 bg-white px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-10 hover:bg-gray-10">
          <div className="colorbar" style={colorStyle}></div>
          <div className="flex-auto">
            <div className="flex">
              <div className="content text-black-900">{meeting.name}</div>
              <FontAwesomeIcon
                className="delete"
                icon={faXmark}
                onClick={() => onDelete(meeting.id)}
              />
            </div>
            <div className="contentdateperiod mt-0.5">
              <time dateTime={meeting.startDatetime}>
                {format(startDateTime, "yyy.MM.dd")}
              </time>{" "}
              ~{" "}
              <time dateTime={meeting.endDatetime}>
                {format(endDateTime, "yyy.MM.dd")}
              </time>
            </div>
            <div className="flex">
              <div className="contenttimeperiod" style={colorStyle}>
                <div className="timeperiod">
                  <time dateTime={meeting.startDatetime}>
                  {/* <time dateTime={format(startDateTime, "yyyy-MM-dd'T'HH:mm:ss")}> */}
                    {format(startDateTime, "H:mm")}
                  </time>{" "}
                  -{" "}
                  <time dateTime={meeting.endDatetime}>
                    {format(endDateTime, "H:mm")}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    daysBetween(
      parseISO(meeting.startDatetime),
      parseISO(meeting.endDatetime)
    ).some((d) => isSameDay(d, selectedDay))
  );

  // newlist에 해당하는 변수들
  const [newMeetingTitle, setNewMeetingTitle] = useState("");
  const [selectedDate1, setSelectedDate1] = useState(new Date());
  const [selectedDate2, setSelectedDate2] = useState(new Date());
  const [selectedTime1, setSelectedTime1] = useState("00:00");
  const [selectedTime2, setSelectedTime2] = useState("00:00");

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };

  const handleTimeChange1 = (event) => {
    setSelectedTime1(event.target.value);
  };

  const handleTimeChange2 = (event) => {
    setSelectedTime2(event.target.value);
  };

  // 함수를 이용하여 날짜 형식을 변환하는 예시
  const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  // 월화수목금을 영어 대문자로 변경하는 함수
  const formatWeekday = (locale, date) => {
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    return weekdays[date.getDay()];
  };

  // 날짜를 숫자만 표시하는 함수
  const formatDayNumber = (locale, date) => {
    return date.getDate();
  };

  const newlisttextRef = useRef(null);

  useEffect(() => {
    console.log(format(today, "yyyy-MM-dd"));
  }, []);

  return (
    <div className="SchedulecalendarApp pt-10">
      <div className="Calendartxt">
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
          <FontAwesomeIcon icon={faChevronRight} />
          진행 중인 프로젝트
        </Link>
      </div>

      <div className="mx-auto md:max-w-4xl mt-10">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-8 border border-gray-300 calendarblock bg-white">
            {/*  < 날짜 > 앞뒤로 이동하는 부분 */}
            <div className="flex items-center justify-center mt-5 ml-10">
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 -mr-30 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <h2 className="font-semibold text-blue-900">
                {format(firstDayCurrentMonth, "MMMM")}
              </h2>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-30 -mr-1.5  flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-blue-500 ml-10">
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm ml-10">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white bg-blue-500",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-blue-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                  <div className="w-1 h-1 mx-auto mt-1">
                    {/* 날짜 별로 일정이 있는 부분에 점을 찍도록 함 */}
                    {meetings.some((meeting) =>
                      daysBetween(
                        parseISO(meeting.startDatetime),
                        parseISO(meeting.endDatetime)
                      ).some((d) => isSameDay(d, day))
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-10 ">
            <h2 className="font-semibold scheduletitle mt-5">
              {" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "yyy.MM.dd")}
              </time>
            </h2>
            {/* 일정 리스트 */}
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500 max-h-80 overflow-y-auto">
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting
                    meeting={meeting}
                    key={meeting.id}
                    onDelete={ScheduleDelete}
                  />
                ))
              ) : (
                <p>등록된 일정이 없습니다</p>
              )}
            </ol>
          </section>
        </div>
      </div>

      {/* 새 일정 만들기 */}
      <div className="flex justify-center items-center">
        <div
          className="newlist"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <div className="newlisttxt" onClick={ScheduleCreate}>
              <FontAwesomeIcon icon={faCirclePlus} /> 새 일정 만들기
            </div>
          </div>
          <div className="newlistcontent ">
            <div className="calendarScheduletitle">
              <input
                type="text"
                ref={newlisttextRef} // Ref to capture the input value
                placeholder="새 일정의 제목을 적어주세요,,,"
              />
              <button className="newlistbtn" onClick={ScheduleCreate}>
                생성
              </button>
            </div>

            <div className="container">
              <div className="calendarWrapper">
                <div className="calendarschedulefont">
                  <span className="bluefont">시작 일정:</span>
                  <span className="scheduledata1 startdate">
                    {getFormattedDate(selectedDate1)}
                  </span>
                  <span className="starttime">
                    {" "}
                    <input
                      type="time"
                      value={selectedTime1}
                      onChange={handleTimeChange1}
                    />
                  </span>
                </div>
                <Calendar
                  onChange={handleDateChange1}
                  value={selectedDate1}
                  formatShortWeekday={formatWeekday}
                  formatDay={formatDayNumber} // 날짜를 숫자만 표시
                  calendarType="US" // 일요일부터 시작하는 달력 형식 설정
                />
              </div>
              <div className="calendarWrapper">
                <div className="calendarschedulefont">
                  <span className="bluefont">마감 일정:</span>{" "}
                  <span className="scheduledata1 enddate">
                    {getFormattedDate(selectedDate2)}
                  </span>
                  <span className="endtime">
                    <input
                      type="time"
                      value={selectedTime2}
                      onChange={handleTimeChange2}
                    />
                  </span>
                </div>
                <Calendar
                  onChange={handleDateChange2}
                  value={selectedDate2}
                  formatShortWeekday={formatWeekday}
                  formatDay={formatDayNumber} // 날짜를 숫자만 표시
                  calendarType="US" // 일요일부터 시작하는 달력 형식 설정
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
