import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputDiv, InputNameSpan } from "./Signup";
import { TiDelete } from "react-icons/ti";

const FindPW = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState();
  const onClickX = () => {
    reset();
  };
  const onValid = (data) => {
    setIsSubmit(true);
    setEmail(data.email);
  };
  return (
    <div className="flex justify-center py-20">
      {isSubmit ? (
        <div className="flex flex-col justify-center items-center space-y-8">
          <img src="/img/passwordImgs/email.png" />
          <div className="flex-col flex items-center space-y-3">
            <span className="text-mainColor font-bold">{email}</span>
            <span className="text-gray-600">
              비밀번호 재설정 메일이 발송되었습니다
            </span>
          </div>

          <div className="bg-mainColor text-center text-white rounded-full py-2 w-full">
            로그인 페이지로 돌아가기
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-2 pr-40">
            <div className="flex items-center space-x-3">
              <img src="/img/passwordImgs/lock-closed.png" />
              <span className="text-xl font-bold pt-1">비밀번호 찾기</span>
            </div>

            <div className="text-gray-400 text-sm">
              가입한 이메일 주소를 입력해주세요.
              <br />
              비밀번호 재설정을 위한 이메일을 보내드리겠습니다.
            </div>
          </div>
          <form onSubmit={handleSubmit(onValid)} className="mt-20">
            <InputDiv className="relative">
              <InputNameSpan>이메일</InputNameSpan>
              <Input {...register("email")} placeholder="이메일 입력" />
              <div
                className="absolute right-1 top-8 cursor-pointer"
                onClick={onClickX}
              >
                <TiDelete color="lightgray" size="24" />
              </div>
              <span className="text-mainColor pt-3">
                대소문자를 구분하여 입력해주세요
              </span>
            </InputDiv>

            <div className="mt-10 flex justify-center bg-mainColor cursor-pointer mx-12 pt-3 pb-2 rounded-full">
              <button className=" text-white   h-full w-full  text-center text-xl">
                비밀번호 재설정
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FindPW;
