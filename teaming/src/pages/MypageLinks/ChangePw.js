import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash, BsCheckLg } from "react-icons/bs";
import { useRecoilState } from "recoil";
import tw from "tailwind-styled-components";
import { memberIdState } from "../../components/atom";
import { useNavigate } from "react-router-dom";

const InputSpan = tw.span`
text-mainMoreDeepColor font-bold pb-2
`;
const Input = tw.input`
border border-mainColor outline-none placeholder:font-thin p-3 rounded-md
`;
const InputDiv = tw.div`
flex flex-col text-sm  relative
`;
const EmojiWrap = tw.div`
absolute right-2 top-3 cursor-pointer 
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
  const [isSameNewPW, setIsSameNewPW] = useState(false);
  const [isEyeClickNewPW1, setIsEyeClickNewPW1] = useState(false);
  const [isEyeClickNewPW2, setIsEyeClickNewPW2] = useState(false);
  const [isCorrectNewPW1, setIsCorrectNewPW1] = useState(false);

  const [memberId, setMemberId] = useRecoilState(memberIdState);

  const navigate = useNavigate();

  const onClickEye = () => {
    setEyeClick((prev) => !prev);
  };

  const onClickEyeNewPw1 = () => {
    setIsEyeClickNewPW1((prev) => !prev);
  };
  const onClickEyeNewPw2 = () => {
    setIsEyeClickNewPW2((prev) => !prev);
  };
  const onValidSamePW = (data) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/member/${memberId}/change-password/check-password`,
        {
          currentPassword: data.nowPW,
        }
      )
      .then((res) => {
        console.log(res);
        setIsSame((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
        setError("nowPW", {
          message: "현재 비밀번호와 입력한 비밀번호가 맞지 않습니다",
        });
      });
  };
  const onValidNewPw = (data) => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/member/${memberId}/change-password`,
        {
          change_password: data.newPW1,
        }
      )
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        navigate("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (errors.newPW1 === undefined && watch("newPW1") !== "")
      setIsCorrectNewPW1(true);
    else setIsCorrectNewPW1(false);

    if (
      watch("newPW1") === watch("newPW2") &&
      watch("newPW1") !== "" &&
      watch("newPW2") !== "" &&
      errors.newPW1 === undefined &&
      errors.newPW2 === undefined
    ) {
      setIsSameNewPW(true);
    } else setIsSameNewPW(false);
  }, [errors.newPW1, watch("newPW1"), watch("newPW2"), isSame]);

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
                  <Input
                    type={isEyeClickNewPW1 ? "text" : "password"}
                    {...register("newPW1", {
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
                    placeholder="비밀번호"
                  />
                  <EmojiWrap className="flex items-center space-x-1">
                    <BsCheckLg
                      color={isCorrectNewPW1 ? "#527FF5" : "lightgray"}
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
                  <div className="pt-1 text-gray-400 text-sm">
                    {errors.newPW1?.message ? (
                      <span className="text-red-300">
                        {errors.newPW1?.message}
                      </span>
                    ) : (
                      "비밀번호는 영문 대소문자, 숫자, 특수문자(.!@#$%)를 혼합하여 8~20자로 입력해주세요"
                    )}
                  </div>
                </InputDiv>
                <InputDiv>
                  <Input
                    type={isEyeClickNewPW2 ? "text" : "password"}
                    {...register("newPW2")}
                    placeholder="비밀번호확인"
                  />
                  <EmojiWrap className="flex items-center space-x-1">
                    <BsCheckLg
                      color={isSameNewPW ? "#527FF5" : "lightgray"}
                      size="20"
                    />
                    <div onClick={onClickEyeNewPw2}>
                      {isEyeClickNewPW2 ? (
                        <BsEye size="18" color="#033FFF" />
                      ) : (
                        <BsEyeSlash size="18" color="gray" />
                      )}
                    </div>
                  </EmojiWrap>
                </InputDiv>
              </div>

              <div className="pt-3 text-red-400 text-sm">
                {errors.newPW?.message || errors.newPW2?.message}
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
                className="absolute right-2 top-10 cursor-pointer"
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
