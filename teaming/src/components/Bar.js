import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import tw from "tailwind-styled-components";
import { cls } from "../libs/utils";
import { useRecoilState } from "recoil";
import { loginState } from "./atom";

const BarItem = tw.div`
flex space-x-6 items-center cursor-pointer
`;
const Bar = () => {
  const [isClick, setIsClick] = useState(false);

  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const { pathname } = useLocation();
  const onClick = () => {
    setIsClick((prev) => !prev);
  };

  return (
    <div className="flex flex-col ">
      <div className="pl-1 py-1 flex items-center justify-between">
        <div className="flex items-center space-x-7 ">
          <Link to="/">
            <img className="h-7" src="/img/logo/teamingLogo.png" />
          </Link>
          {isLogin ? (
            <div
              className="space-x-7 text-xs text-gray-400"
              onClick={() => {
                if (!isLogin) alert("로그인 후 이용해주세요!");
              }}
            >
              <Link to={isLogin ? "/ongoingProject" : null}>
                <span
                  className={cls(
                    "cursor-pointer hover:text-mainColor",
                    pathname === "/ongoingProject" ? "text-mainColor" : ""
                  )}
                >
                  진행중 프로젝트
                </span>
              </Link>
              <Link to={isLogin ? "/portfolio" : null}>
                <span
                  className={cls(
                    "cursor-pointer hover:text-mainColor",
                    pathname === "/portfolio" ? "text-mainColor" : ""
                  )}
                >
                  포트폴리오
                </span>
              </Link>
              <Link to={isLogin ? "/schedulecalendar" : null}>
                <span
                  className={cls(
                    "cursor-pointer hover:text-mainColor",
                    pathname === "/schedulecalendar" ? "text-mainColor" : ""
                  )}
                >
                  일정달력
                </span>
              </Link>
            </div>
          ) : null}
        </div>
        {isLogin ? (
          <div
            className="flex items-center space-x-3 text-xs"
            onClick={() => {
              if (!isLogin) alert("로그인 후 이용해주세요!");
            }}
          >
            <div>
              <span className="text-gray-400">로그아웃</span>
            </div>
            <Link to={isLogin ? "/mypage" : null}>
              <HiOutlineUser color="gray" className="cursor-pointer" />
            </Link>
            <Link to={isLogin ? "/newProject" : null}>
              <div className="bg-mainColor flex items-center text-white px-2 py-1  rounded-full  font-bold space-x-2 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>

                <span>새 프로젝트</span>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Bar;
