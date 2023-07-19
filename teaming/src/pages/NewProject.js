import React, { useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";

const Span = tw.span`
text-mainMoreDeepColor font-bold
`;
const NewProject = () => {
  const [previewImg, setPreviewImg] = useState();
  const [emails, setEmails] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const insertImg = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      const fileURL = reader.result;
      setPreviewImg(fileURL);
    };
    reader.readAsDataURL(file);
  };
  const onClickAppend = () => {};

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
                  <div className="h-5 w-5 rounded-full bg-red-300"></div>
                  <span className="pt-1">해당 색상으로 선택하시겟습니까?</span>
                </div>
                <div className="grid grid-cols-5 gap-5 ">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <img
                      className="h-10 cursor-pointer"
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
            <div className="flex justify-center space-x-2 ">
              <input type="date" />
              <span className="text-mainMoreDeepColor font-bold">~</span>
              <input type="date" />
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
