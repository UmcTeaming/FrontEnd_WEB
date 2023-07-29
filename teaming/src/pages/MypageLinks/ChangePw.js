import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash, BsCheckLg } from "react-icons/bs";
import tw from "tailwind-styled-components";

const InputSpan = tw.span`
text-mainMoreDeepColor font-bold pb-2
`;
const Input = tw.input`
border-b-[1.5px] border-mainColor outline-none placeholder:font-thin 
`;
const InputDiv = tw.div`
flex flex-col text-sm  relative
`;
const EmojiWrap = tw.div`
absolute right-0 top-6 cursor-pointer
`;
const ChangePw = () => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();
  const [isEyeClick, setEyeClick] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const [isSamePW, setIsSamePW] = useState(false);
  const [isEyeClickNewPW, setIsEyeClickNewPW] = useState(false);
  const [isEyeClickNewPW1, setIsEyeClickNewPW1] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const onClickEye = () => {
    setEyeClick((prev) => !prev);
  };

  const onClickEyeNewPw = () => {
    setIsEyeClickNewPW((prev) => !prev);
  };
  const onClickEyeNewPw1 = () => {
    setIsEyeClickNewPW1((prev) => !prev);
  };
  const onValidSamePW = (data) => {
    setIsSame((prev) => !prev);
  };
  const onValidNewPw = (data) => {
    if (data.newPW !== data.newPW1) {
      setError("newPW1", { message: "비밀전호가 앞서 입력한 내용과 다릅니다" });
      return;
    }
    console.log(data);
  };

  useEffect(() => {
    if (errors.newPW === undefined && watch("newPW") !== "") setIsCorrect(true);
    else setIsCorrect(false);

    if (
      watch("newPW") === watch("newPW1") &&
      watch("newPW") !== "" &&
      watch("newPW1") !== "" &&
      errors.newPW === undefined &&
      errors.newPW1 === undefined
    ) {
      setIsSamePW(true);
    } else setIsSamePW(false);
  }, [errors.newPW, watch("newPW"), watch("newPW1")]);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="space-y-10 ">
        <div className="space-y-3 pr-40">
          <div className="flex items-center space-x-3">
            <img src="/img/passwordImgs/lock-closed.png" />
            <span className="pt-1">비밀번호 변경하기</span>
          </div>
          <div className="text-sm text-gray-400 pl-1">
            {isSame
              ? "변경을 원하는 새로운 비밀번호를 입력해주세요"
              : "변경을 위해서는 현재 비밀번호 입력이 필요해요!"}
          </div>
        </div>
        {isSame ? (
          <form onSubmit={handleSubmit(onValidNewPw)} className="">
            <div className=" h-48  ">
              <div className="space-y-5">
                <InputDiv>
                  <InputSpan>현재 비밀번호</InputSpan>

                  <Input
                    type={isEyeClickNewPW ? "text" : "password"}
                    {...register("newPW", {
                      required: "비밀번호를 입력해주세요",
                      minLength: {
                        value: 8,
                        message: "8자 이상 입력해주세요",
                      },
                      maxLength: {
                        value: 20,
                        message: "20자 이내로 입력해주세요",
                      },
                      pattern: {
                        value: "/^[A-Za-z0-9._%+-]$/",
                        message:
                          "영문,숫자,특수문자를 혼합하여 8~20자로 입력해주세요.",
                      },
                    })}
                    placeholder="영문, 숫자, 특수문자를 혼합하여 8~20자로 입력해주세요."
                  />
                  <EmojiWrap
                    onClick={onClickEye}
                    className="flex items-center space-x-1"
                  >
                    <BsCheckLg
                      color={isCorrect ? "#527FF5" : "lightgray"}
                      size="20"
                    />
                    <div onClick={onClickEyeNewPw}>
                      {isEyeClickNewPW ? (
                        <BsEye size="18" color="#033FFF" />
                      ) : (
                        <BsEyeSlash size="18" color="gray" />
                      )}
                    </div>
                  </EmojiWrap>
                </InputDiv>
                <InputDiv>
                  <InputSpan>비밀번호 확인</InputSpan>
                  <Input
                    type={isEyeClickNewPW1 ? "text" : "password"}
                    {...register("newPW1")}
                    placeholder="영문, 숫자, 특수문자를 혼합하여 8~20자로 입력해주세요."
                  />
                  <EmojiWrap
                    onClick={onClickEye}
                    className="flex items-center space-x-1"
                  >
                    <BsCheckLg
                      color={isSamePW ? "#527FF5" : "lightgray"}
                      size="20"
                    />
                    <div onClick={onClickEyeNewPw1}>
                      {isEyeClickNewPW1 ? (
                        <BsEye size="18" color="#033FFF" />
                      ) : (
                        <BsEyeSlash size="18" color="gray" />
                      )}
                    </div>
                  </EmojiWrap>
                </InputDiv>
              </div>

              <div className="pt-3 text-red-400 text-sm">
                {errors.newPW?.message || errors.newPW1?.message}
              </div>
            </div>

            <div className="bg-mainColor cursor-pointer rounded-full text-white mx-20 py-2 ">
              <button className="w-full">비밀번호 재설정</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onValidSamePW)} className="">
            <div className="flex flex-col text-sm h-28 relative">
              <InputSpan>현재 비밀번호</InputSpan>

              <Input
                type={isEyeClick ? "text" : "password"}
                {...register("nowPW")}
                placeholder="현재 비밀번호를 입력해주세요"
              />
              <EmojiWrap
                onClick={onClickEye}
                className="absolute right-0 top-6 cursor-pointer"
              >
                {isEyeClick ? (
                  <BsEye size="18" color="#033FFF" />
                ) : (
                  <BsEyeSlash size="18" color="gray" />
                )}
              </EmojiWrap>
              <span className="text-red-300">{errors.nowPW?.message}</span>
            </div>
            <div className="bg-mainColor cursor-pointer rounded-full text-white mx-20 py-2 ">
              <button className="w-full">비밀번호 재설정</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ChangePw;
