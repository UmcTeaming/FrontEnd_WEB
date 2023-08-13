import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import moment from "moment";
import { cls } from "../libs/utils";

const Span = tw.span`
text-mainMoreDeepColor font-bold
`;

const dayOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const colorCode = [
  "F98984",
  "FFD008",
  "FFAA00",
  "B5EC3E",
  "8DD773",
  "527FF5",
  "456DD0",
  "BB92FF",
  "555555",
  "D9D9D9",
];

const NewProject = () => {
  const [previewImg, setPreviewImg] = useState();
  const [emails, setEmails] = useState();

  const [date1, setDate1] = useState(moment());
  const [date2, setDate2] = useState(moment());
  const [selectedDay1, setSelectedDay1] = useState(date1.clone());
  const [selectedDay2, setSelectedDay2] = useState(date2.clone());

  const [logoNum, setLogoNum] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleMonth = (x, num) => {
    x
      ? num === 1
        ? setDate1(date1.clone().add(1, "month"))
        : setDate2(date2.clone().add(1, "month"))
      : num === 1
      ? setDate1(date1.clone().subtract(1, "month"))
      : setDate1(date2.clone().subtract(1, "month"));
  };

  const onClickDay = (current, num) => {
    if (num === 1) {
      setSelectedDay1(current.clone());
      setSelectedDay2(current.clone());
    } else {
      if (selectedDay1.diff(current.clone()) < 0)
        setSelectedDay2(current.clone());
      else alert("시작날 보다 이전일 수 없습니다");
    }
  };
  const buildCalendar = (num) => {
    const date = num === 1 ? date1 : date2;
    const dateStartWeek = date.clone().startOf("month").week();

    const dateEndWeek =
      date.clone().endOf("month").week() === 1
        ? 53
        : date.clone().endOf("month").week();

    let calendar = [];

    calendar.push(
      <div className="flex justify-between items-center">
        <div onClick={() => handleMonth(0, num)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="space-x-2">
          <span>
            {num === 1
              ? months[Number(selectedDay1.format("MM")) - 1]
              : months[Number(selectedDay2.format("MM")) - 1]}
          </span>
          <span>
            {num === 1
              ? selectedDay1.format("YYYY")
              : selectedDay2.format("YYYY")}
          </span>
        </div>
        <div onClick={() => handleMonth(1, num)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    );
    calendar.push(
      <div className="grid grid-cols-7 items-center justify-items-center gap-1 text-xs bg-[#F5F7FA] py-2">
        {dayOfWeek.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
    );

    for (let week = dateStartWeek; week <= dateEndWeek; week++) {
      calendar.push(
        <div
          key={week}
          className="grid grid-cols-7 items-center justify-items-center gap-1 text-xs "
        >
          {[
            Array(7)
              .fill(0)
              .map((n, i) => {
                let current = date
                  .clone()
                  .week(week)
                  .startOf("week")
                  .add(i, "day");

                const isMonth =
                  current.clone().format("MM") !== date.format("MM");

                return (
                  <div key={i} className="py-1">
                    <span
                      className={cls(
                        "text-center hover:font-extrabold cursor-pointer",
                        isMonth ? "text-gray-200" : ""
                      )}
                      onClick={() => onClickDay(current, num)}
                    >
                      {current.format("D")}
                    </span>
                  </div>
                );
              }),
          ]}
        </div>
      );
    }
    return calendar;
  };

  const insertImg = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      const fileURL = reader.result;
      setPreviewImg(fileURL);
    };
    reader.readAsDataURL(file);
  };

  const onClickLogo = (i) => {
    setLogoNum(i);
  };
  const onClickAppend = () => {};

  useEffect(() => {
    console.log(colorCode[logoNum]);
  }, [logoNum]);
  return (
    <div className="flex justify-center items-center">
      <form className="flex space-x-6">
        <div>
          <div className="flex text-mainDeepColor items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="pt-1">&#62;프로젝트 생성하기</span>
          </div>
          <div className="mt-2">
            <div>
              <label htmlFor="img">
                <div className="flex justify-center items-center bg-[#F4F4F4] text-gray-400 h-80 w-96">
                  {previewImg !== undefined ? (
                    <img src={previewImg} className="object-cover " />
                  ) : (
                    <span className="">대표 이미지 추가하기</span>
                  )}
                </div>
              </label>
              <input
                id="img"
                type="file"
                {...register("img")}
                className="hidden"
                onChange={(e) => insertImg(e)}
              />
            </div>
            <div className="pt-3 pb-10 flex flex-col space-y-3">
              <Span>프로젝트 명</Span>
              <input
                {...register("projectName")}
                placeholder="프로젝트 명을 입력해주세요."
                className="placeholder:text-gray-400 placeholder:opacity-50 border-b-[1.5px] border-mainColor"
              />
            </div>
            <div className="flex space-x-3">
              <Span className="pt-1">색상</Span>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div
                    className={cls(
                      "h-5 w-5 rounded-full ",
                      `bg-[#${colorCode[logoNum]}]`
                    )}
                  ></div>
                  <span className="pt-1">해당 색상으로 선택하시겟습니까?</span>
                </div>
                <div className="grid grid-cols-5 gap-5 ">
                  {[5, 6, 7, 8, 9, 0, 1, 2, 3, 4].map((n, i) => (
                    <img
                      className="h-10 cursor-pointer"
                      onClick={() => onClickLogo(i)}
                      src={`/img/newProjectColor/Teaming_color_${String(
                        n
                      )}.png`}
                      alt=""
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 space-y-3">
          <div className="">
            <div className="flex flex-col space-y-2">
              <Span>날짜</Span>
              <span className="text-gray-400 opacity-50">
                프로젝트의 예상 진행 날짜를 입력해주세요.
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center items-center text-gray-400">
                <span className="px-3 py-1 border-b border-mainColor">
                  {selectedDay1.format("YYYY-MM-DD")}
                </span>
                <span className="font-bold text-mainDeepColor">~</span>
                <span className="px-3 py-1 border-b border-mainColor">
                  {selectedDay2.format("YYYY-MM-DD")}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>{buildCalendar(1)}</div>
                <div>{buildCalendar(2)}</div>
              </div>
            </div>
          </div>
          <div className="ml-3 space-y-8 ">
            <div className="space-y-3">
              <Span className="">팀원 추가</Span>
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <div className="flex flex-col items-center space-y-1">
                    <div className="h-10 w-10 bg-gray-300 rounded-full" />
                    <span className="text-gray-400">팀원</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col ">
              <Span className="pb-5">이메일</Span>
              <input
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:
                      "이메일에 오류가 있거나팀원이 티밍에 가입하지않았어요",
                  },
                })}
                className="border-b border-mainColor outline-none pb-1"
                placeholder="초대할 팀원의 이메일을 입력해주세요."
              />
              <span>{errors.email?.message}</span>
              <div className="border border-mainColor absolute right-0 rounded-full pt-1 px-3 text-mainColor text-sm top-10 cursor-pointer">
                추가
              </div>
              <div></div>
            </div>
          </div>
          <div className="bg-mainColor flex justify-center rounded-full mx-10">
            <button className=" text-white pt-2 pb-1  w-full">
              프로젝트 생성하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewProject;
