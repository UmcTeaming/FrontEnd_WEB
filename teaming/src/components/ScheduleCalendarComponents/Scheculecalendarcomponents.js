import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Schedulecalendarcomponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { CalendarIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { BiHome } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
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
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState } from "../atom";

// className함수는 여러 개의 클래스 이름들을 받아들이고, 조건에 따라 필터링하여 결합한 문자열을 반환함
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Schedulecalendarcomponents = () => {
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const { projectId } = useParams();
  const [meetings, setMeetings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 수정 중
  useEffect(() => {
    const requestData = {
      date_request: format(selectedDate, "yyyy-MM-dd"), // selectedDate를 yyyy-MM-dd 형식으로 변환하여 요청
    };

    // meetings 배열을 초기화합니다.
    setMeetings([]);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/member/${memberId}/date_list`,
        requestData
      )
      .then((response) => {
        const data = response.data.data;
        console.log(data);

        // date_list 값을 출력
        // data.forEach((item) => {
        //   console.log("Data List:", item.date_list);
        // })

        // 각 date_list 값을 처리하고 개별 요청을 보내기
        data.forEach((dateListItem) => {
          const scheduleStartData = {
            schedule_start: dateListItem.date_list,
          };

          // "schedule_start" 데이터를 이용하여 일정을 가져오는 요청
          axios
            .post(
              `${process.env.REACT_APP_API_URL}/member/${memberId}/schedule_start`,
              scheduleStartData
            )
            .then((scheduleResponse) => {
              const scheduleData = scheduleResponse.data;
              console.log("일단 절반 성공");
              // console.log(scheduleData);

              // data -> scheduleData로 수정
              scheduleData.data.forEach((schedule) => {
                // console.log("Schedule Name:", schedule.schedule_name);
                // console.log("Start Date:", schedule.schedule_start);
                // console.log("End Date:", schedule.schedule_end);

                const newMeeting = {
                  id: schedule.schedule_id,
                  name: schedule.schedule_name,
                  startDatetime: `${schedule.schedule_start}T${schedule.schedule_start_time}`,
                  endDatetime: `${schedule.schedule_end}T${schedule.schedule_end_time}`,
                  project_color: schedule.project_color,
                };
                // setMeetings 함수를 사용하여 기존 meetings 배열에 새 일정을 추가한다
                setMeetings((prevMeetings) => [...prevMeetings, newMeeting]);
              });
              // setMeetings(res.data.data);
              // scheduleData를 활용하여 일정을 처리하고 state를 업데이트하세요.
            })
            .catch((err) => console.log(err));
        });
      })
      .catch((err) => console.log(err));
  }, []);

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

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  console.log("시작 일정:", format(selectedDay, "yyyy-MM-dd"));

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

  function Meeting({ meeting }) {
    let startDateTime = parseISO(meeting.startDatetime);
    let endDateTime = parseISO(meeting.endDatetime);

    // project_color 값을 가져와서 스타일로 적용
    const colorStyle = {
      backgroundColor: meeting.project_color,
    };

    return (
      <div className="schedulecomponents ">
        <li className="flex items-center border border-white-300 mb-2 bg-white px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-10 hover:bg-gray-10">
          {/* flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100 */}
          <div className="colorbar" style={colorStyle}></div>
          <div className="flex-auto">
            <div className="flex">
              <div className="content text-black-900">{meeting.name}</div>
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
              <div className="contentdescription">{meeting.dailyscrum}</div>
              <div className="contenttimeperiod" style={colorStyle}>
                <div className="timeperiod">
                  <time dateTime={meeting.startDatetime}>
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

  // 1차 수정
  let selectedDayMeetings = meetings.filter((meeting) =>
    // isSameDay(parseISO(meeting.startDatetime), selectedDay)
    daysBetween(
      parseISO(meeting.startDatetime),
      parseISO(meeting.endDatetime)
    ).some((d) => isSameDay(d, selectedDay))
  );

  // 같은 날 같은 일정이 중복되지 않도록 필터링합니다.
  const filteredMeetings = [];
  selectedDayMeetings.forEach((meeting) => {
    const isDuplicate = filteredMeetings.some((filteredMeeting) => {
      return (
        meeting.id === filteredMeeting.id &&
        isSameDay(
          parseISO(meeting.startDatetime),
          parseISO(filteredMeeting.startDatetime)
        )
      );
    });

    if (!isDuplicate) {
      filteredMeetings.push(meeting);
    }
  });

  selectedDayMeetings = filteredMeetings;



  return (
    <div className="SchedulecalendarApp pt-10">
      <div className="SchedulecalendarSection">
        <div className="SchedulecalendarPath">
          <div className="schedulepath">
            {" "}
            <Link to="/">
              <BiHome size="13" />
            </Link>
            <GoChevronRight size="13" />
            일정달력
          </div>
        </div>
        <div className="mx-auto md:max-w-4xl mt-10">
          <div className="calsection md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
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
                        isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-red-500",
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
                    <Meeting meeting={meeting} key={meeting.id} />
                  ))
                ) : (
                  <p>등록된 일정이 없습니다</p>
                )}
              </ol>
            </section>
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
