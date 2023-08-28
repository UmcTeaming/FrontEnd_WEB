import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, InputDiv, InputNameSpan } from "./Signup";
import { TiDelete } from "react-icons/ti";
import axios from "axios";
import { Link } from "react-router-dom";

const FindPW = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState();
  const onClickX = () => {
    reset();
  };
  const onValid = (data) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/auth/reset-password`, {
        email: data.email,
      })
      .then((res) => {
        setIsSubmit(true);
        setEmail(data.email);
      })
      .catch((err) => {
        console.log(err);
        alert("회원가입되지 않은 이메일입니다.");
      });
  };
  return (
    <div className="flex justify-center py-28">
      {isSubmit ? (
        <div className="flex flex-col justify-center items-center space-y-8">
          <img src="/img/passwordImgs/email.png" />
          <div className="flex-col flex items-center space-y-3">
            <span className="text-mainColor font-bold">{email}</span>
            <span className="text-gray-600">
              비밀번호 재설정 메일이 발송되었습니다
            </span>
          </div>

          <Link
            to="/"
            className="bg-mainColor text-center text-white rounded-full py-2 w-full"
          >
            로그인 페이지로 돌아가기
          </Link>
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
          <form onSubmit={handleSubmit(onValid)} className="mt-10">
            <InputDiv className="relative">
              <Input
                className="h-10"
                {...register("email")}
                placeholder="이메일 입력"
              />
              <div
                className="absolute right-1 top-2 cursor-pointer"
                onClick={onClickX}
              >
                <TiDelete color="lightgray" size="24" />
              </div>
            </InputDiv>

            <div className="mt-4 flex justify-center bg-mainColor cursor-pointer mx-12 pt-3 pb-2 rounded-full hover:bg-white hover:text-mainColor transition-all text-white border-mainColor border-[1px]">
              <button className="   h-full w-full  text-center text-xl">
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
