import React, { useEffect, useState } from "react";
import Bar from "../../components/Bar";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  loginState,
  memberIdState,
  nickNameState,
  tokenState,
} from "../../components/atom";
import { useCookies } from "react-cookie";
import { removeCookie, setCookie } from "../../components/Cookie";

const Input = tw.input`
h-12 w-96  outline-none placeholder:text-mainMoreDeepColor p-2 bg-[#e9eefe] rounded-xl
`;
const FormSpan = tw.span`
px-2
`;
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [accessToken, setAcessToken] = useRecoilState(tokenState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [nickName, setNickName] = useRecoilState(nickNameState);

  const [cookies, setCookies] = useCookies(["token", "memberId"]);

  const onValid = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        setCookie("token", res.data.data.jwtToken.accessToken);

        setMemberId(res.data.data.jwtToken.memberId);
        setNickName(res.data.data.name);
        setIsLogin(true);
        setCookie("memberId", res.data.data.jwtToken.memberId);

        localStorage.setItem("nickName", res.data.data.name);
        if (data.checkBox) {
          localStorage.setItem("checkLogin", true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex mx-24 lg:justify-between mt-32 justify-center">
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col p-20  z-10 "
      >
        <div className="space-y-5 pb-5">
          <div
            className="w-20 h-2 bg-mainColor "
            style={{
              background:
                "linear-gradient(169deg, #527FF5 0%, rgba(82, 127, 245, 0.00) 100%)",
            }}
          />
          <div className="text-mainColor font-bold text-4xl">Log In</div>
        </div>
        <Input placeholder="email" className="mb-4" {...register("email")} />
        <Input
          autoComplete=""
          placeholder="password"
          type="password"
          {...register("password")}
        />

        <div>
          <div className="text-center text-mainMoreDeepColor mt-4 mb-4 text-sm ">
            <FormSpan className="border-r border-mainMoreDeepColor">
              <Link to="/findPW">비밀번호 찾기</Link>
            </FormSpan>
            <FormSpan>
              <Link to="/signup">회원가입</Link>
            </FormSpan>
          </div>
          <div class="flex items-center mb-4 justify-center">
            <input
              {...register("checkBox")}
              type="checkbox"
              class="w-4 h-4 text-mainColor bg-gray-100 border-[#D9D9D9] rounded dark:focus:ring-mainColor dark:ring-offset-[#D9D9D9] dark:bg-[#D9D9D9] dark:border-[#D9D9D9]  outline-none"
            />
            <label
              for="default-checkbox"
              class="ml-2 text-sm font-medium text-[#D9D9D9] dark:text-gray-300"
            >
              자동로그인
            </label>
          </div>
        </div>

        <button className="bg-mainColor w-full text-white py-3 rounded-full font-bold text-lg focus:bg-mainColor">
          로그인
        </button>
      </form>
      <div className="hidden lg:block">
        <img className="z-0" src="/img/logo/loginMLogo.png" />
      </div>
    </div>
  );
};

export default Login;
