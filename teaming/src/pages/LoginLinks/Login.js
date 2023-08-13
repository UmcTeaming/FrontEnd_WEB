import React, { useEffect, useState } from "react";
import Bar from "../../components/Bar";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { loginState, tokenState } from "../../components/atom";

const Input = tw.input`
h-14 w-96 border-b-[1px] border-mainDeepColor outline-none placeholder:text-mainColor p-2
`;
const FormSpan = tw.span`
px-2
`;
const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [accessToken, setAcessToken] = useRecoilState(tokenState);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [login, setLogin] = useState(false);
  const onValid = (data) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.accessToken);
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" flex justify-center lg:justify-between ">
      <div className="space-y-2 ">
        <div className="absolute left-56 top-56 hidden lg:block space-y-2 z-10">
          <div className=" font-bold text-3xl space-y-5 ">
            <div>
              <span className="text-mainDeepColor">티밍</span>에서 효율적인 팀
              프로젝트를
            </div>

            <div>기록해보세요!</div>
          </div>
          <div className="text-sm text-gray-400">
            sns로 빠른 로그인이 가능합니다.
          </div>
        </div>

        <img
          className="absolute bottom-0 left-10 z-0"
          src="/img/logo/loginMLogo.png"
        />
      </div>
      <form
        onSubmit={handleSubmit(onValid)}
        className="flex flex-col mt-36 lg:mt-44 lg:mr-56 z-10 "
      >
        <Input placeholder="email" {...register("email")} />
        <Input
          autoComplete=""
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <div>
          <div className="text-center text-mainDeepColor mt-4 mb-8 text-sm ">
            <FormSpan className="border-r border-mainDeepColor">
              <Link to="/findPW">비밀번호 찾기</Link>
            </FormSpan>
            <FormSpan>
              <Link to="/signup">회원가입</Link>
            </FormSpan>
          </div>
        </div>
        <button className="bg-mainColor w-full text-white py-3 rounded-full font-bold text-lg focus:bg-mainColor">
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
