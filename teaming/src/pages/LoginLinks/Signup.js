import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { BsCheckLg, BsEyeSlash, BsEye } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const InputDiv = tw.div`
flex flex-col h-28
`;
export const InputNameSpan = tw.span`
    text-[#194AC2] font-bold 
`;
export const Input = tw.input`
placeholder:text-gray-400
placeholder:opacity-50
outline-none
border-b
border-mainColor 
py-1
`;
const InputAddiSpan = tw.span`
text-mainColor
pt-1
`;
export const ErrorSpan = tw.span`
text-[#F98984]
pt-1
`;
const Signup = () => {
  const [isSend, setIsSend] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSame, setIsSame] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isEyeClick1, setIsEyeClick1] = useState(false);
  const [isEyeClick2, setIsEyeClick2] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onValid = (data) => {
    if (data.pw1 !== data.pw2) {
      setError("pw2", { message: "비밀전호가 앞서 입력한 내용과 다릅니다" });
      return;
    }
    if (data.checkbox === false) {
      setError("checkbox", {
        message: "필수 약관 동의가 체크되어 있지 않습니다",
      });
      return;
    }
    if (isCheck) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
          name: data.name,
          email: data.email,
          password: data.pw1,
        })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("checkNum", {
        message: "올바른 인증번호를 재입력해주세요",
      });
    }

    console.log(data);
  };
  const onClickIsSend = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/email-duplication`, {
        email: watch("email"),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setIsSend((prev) => !prev);
  };

  const onClickCheck = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/email-verification`, {
        authentication: watch("checkNum"),
      })
      .then((res) => {
        setIsCheck(true);
        console.log(res);
      })
      .catch((err) => {
        setError("checkNum", { message: "인증번호가 일치하지 않습니다" });
        setIsCheck(false);
        console.log(err);
      });
    setIsCheck((prev) => !prev);
  };
  const onClickIsEye1 = () => {
    setIsEyeClick1((prev) => !prev);
  };
  const onClickIsEye2 = () => {
    setIsEyeClick2((prev) => !prev);
  };
  useEffect(() => {
    if (errors.pw1 === undefined && watch("pw1") !== "") setIsCorrect(true);
    else setIsCorrect(false);

    if (
      watch("pw1") === watch("pw2") &&
      watch("pw1") !== "" &&
      watch("pw2") !== "" &&
      errors.pw1 === undefined &&
      errors.pw2 === undefined
    ) {
      setIsSame(true);
    }
  }, [errors.pw1, watch("pw1"), watch("pw2")]);

  useEffect(() => {});
  return (
    <div className="w-screen flex justify-center py-24 ">
      <div>
        <div className="flex flex-col space-y-2 pr-40">
          <span className="font-bold text-xl">
            안녕하세요 티밍입니다 :&#41;
          </span>
          <span className="text-gray-400 text-sm">
            개인정보는 본인 인증 외에 다른 용도로 사용되지 않습니다.
          </span>
        </div>
        <form className="py-7 " onSubmit={handleSubmit(onValid)}>
          <InputDiv>
            <InputNameSpan>이름</InputNameSpan>
            <Input
              placeholder="이름 입력"
              {...register("name", {
                required: "이름을 입력해주세요",
              })}
            />
            {watch("name") ? (
              <InputAddiSpan>멋진 이름 이네요 :&#41;</InputAddiSpan>
            ) : null}
          </InputDiv>
          <InputDiv className="relative">
            <InputNameSpan>이메일</InputNameSpan>
            <Input
              placeholder="대소문자 구분하여 abc@teaming의 형식으로 입력해주세요"
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message:
                    "대소문자 구분하여 abc@teaming의 형식으로 입력해주세요",
                },
              })}
            />
            <div
              className="absolute px-4 cursor-pointer right-0 top-4 rounded-full  py-1 pt-2 text-sm bg-mainColor text-white"
              onClick={onClickIsSend}
            >
              인증
            </div>
            {isSend ? (
              <InputAddiSpan>
                입력하신 이메일로 인증메일을 보냈습니다.
              </InputAddiSpan>
            ) : (
              <ErrorSpan>{errors.email?.message}</ErrorSpan>
            )}
          </InputDiv>
          <InputDiv className="relative">
            <InputNameSpan>인증번호 입력</InputNameSpan>
            <Input
              placeholder="이메일로 전송된 인증 번호 6자리를 입력해주세요."
              {...register("checkNum")}
            />
            <div
              className="absolute px-4 cursor-pointer right-0 top-4 rounded-full  py-1 pt-2 text-sm bg-mainColor text-white"
              onClick={onClickCheck}
            >
              확인
            </div>

            {errors.checkNum && isCheck !== true ? (
              <ErrorSpan>{errors.checkNum.message}</ErrorSpan>
            ) : isCheck ? (
              <InputAddiSpan>인증되었습니다</InputAddiSpan>
            ) : (
              ""
            )}
          </InputDiv>
          <InputDiv className="relative">
            <InputNameSpan>비밀번호</InputNameSpan>
            <Input
              placeholder="영문,숫자,특수문자를 혼합하여 8~20자로 입력해주세요."
              type={isEyeClick1 ? "text" : "password"}
              {...register("pw1", {
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
            />
            <div className="absolute right-0 top-8 flex items-center space-x-1">
              <BsCheckLg
                color={isCorrect ? "#527FF5" : "lightgray"}
                size="20"
              />
              <div onClick={onClickIsEye1} className="cursor-pointer">
                {isEyeClick1 ? (
                  <BsEye size="18" color="#033FFF" />
                ) : (
                  <BsEyeSlash size="18" color="gray" />
                )}
              </div>
            </div>

            <ErrorSpan>{errors.pw1?.message}</ErrorSpan>
          </InputDiv>
          <InputDiv className="relative">
            <InputNameSpan>비밀번호 확인</InputNameSpan>
            <Input
              type={isEyeClick2 ? "text" : "password"}
              placeholder="비밀번호 입력"
              {...register("pw2")}
            />
            <div className="absolute right-0 top-8 flex items-center space-x-1">
              <BsCheckLg color={isSame ? "#527FF5" : "lightgray"} size="20" />
              <div onClick={onClickIsEye2} className="cursor-pointer">
                {isEyeClick2 ? (
                  <BsEye size="18" color="#033FFF" />
                ) : (
                  <BsEyeSlash size="18" color="gray" />
                )}
              </div>
            </div>
            <ErrorSpan>{errors.pw2?.message}</ErrorSpan>
          </InputDiv>

          <div className="flex flex-col items-center justify-center mb-10">
            <div className="space-x-3 flex items-center">
              <input type="checkbox" {...register("checkbox")} />
              <span className="text-gray-400">
                [필수] 이용약관 및 개인정보 수집 동의
              </span>
              <Link
                to="https://firebasestorage.googleapis.com/v0/b/tab-website-a3588.appspot.com/o/%5B%EB%A1%9C%ED%8F%BC%5D%EC%84%9C%EB%B9%84%EC%8A%A4%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80(%EC%9E%90%EC%82%AC%20%EC%A0%9C%ED%92%88%2C%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B3%B5%EA%B8%89%EC%9A%A9).pdf?alt=media&token=f7a43c68-d7bb-4877-b44e-2b2490cb906e"
                className="text-mainColor underline text-sm cursor-pointer"
              >
                내용보기
              </Link>
            </div>
            <div className="h-8">
              <ErrorSpan>{errors.checkbox?.message}</ErrorSpan>
            </div>
          </div>
          <div className="flex justify-center bg-mainColor cursor-pointer mx-20 py-3 rounded-full">
            <button className=" text-white font-bold  h-full w-full  text-center text-xl">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
