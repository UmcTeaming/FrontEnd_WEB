import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const BarItem = tw.div`
flex space-x-6 items-center cursor-pointer
`;
const Bar = () => {
  const [isClick, setIsClick] = useState(false);
  const onClick = () => {
    setIsClick((prev) => !prev);
  };
  return (
    <div className="flex flex-col ">
      <div className="px-5 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-7 ">
          <Link to="/">
            <img className="h-10" src="/img/logo/teamingLogo.png" />
          </Link>

          <div className="space-x-7 text-xs text-gray-400">
            <span className="cursor-pointer">진행중 프로젝트</span>
            <span className="cursor-pointer">포트폴리오</span>
            <span className="cursor-pointer">일정달력</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-gray-400 cursor-pointer">로그아웃</span>
          <Link to="/mypage">
            <HiOutlineUser color="gray" className="cursor-pointer" />
          </Link>
          <Link to="/newProject">
            <div className="bg-mainColor flex items-center text-white pt-2 pb-1 pl-5 pr-6 rounded-full font-bold space-x-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-6 h-6"
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
      </div>
    </div>
  );
};

export default Bar;
