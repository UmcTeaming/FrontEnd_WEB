import React, { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import tw from "tailwind-styled-components";
import { HiOutlinePencil } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Link, Routes, Route } from "react-router-dom";
import ChangePw from "./ChangePw";
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState } from "../../components/atom";
import basicProfile from "./프로필_기본.jpg";

/* axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
); */

const Div = tw.div`
flex space-x-2
`;
const Mypage = () => {
  const [editState, setEditState] = useState(false);

  const [previewImg, setPreviewImg] = useState();

  const [nickName, setNickName] = useState();
  const [email, setEmail] = useState();

  const { handleSubmit, register, reset, watch } = useForm();

  const [memberId, setMemberId] = useRecoilState(memberIdState);

  const onClick = () => {
    setEditState((prev) => !prev);
  };
  const onValidNickName = (data) => {
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage/change-nickname`,
        {
          change_nickname: data.nickName,
        }
      )
      .then((res) => {
        console.log(res);

        setNickName(data.nickName);
        setEditState(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  const insertImg = (e) => {
    const file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.onload = () => {
      const fileURL = reader.result;
      setPreviewImg(fileURL);
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("change_image_file", file);

    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage/change-image`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      transformRequest: (data, headers) => {
        return data;
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const onClickBasikImg = () => {
    const profileImg = new File([basicProfile], "프로필_기본.jpg", {
      type: "image/jpeg",
    });
    const formData = new FormData();
    formData.append("change_image_file", profileImg);
    console.log(profileImg);
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage/change-image`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
      transformRequest: (data, headers) => {
        return data;
      },
    })
      .then((res) => {
        console.log(res);
        setPreviewImg(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/member/${memberId}/mypage`)
      .then((res) => {
        console.log(res);
        setEmail(res.data.data.email);
        setNickName(res.data.data.name);
        setPreviewImg(res.data.data.profileImage);
      })
      .catch((err) => {
        alert(err);
      });
  }, [nickName]);
  return (
    <div className="flex flex-col justify-center items-center mt-20 space-y-10">
      <div className="space-y-8">
        <div className="flex text-mainDeepColor items-center space-x-1 text-sm mb-3">
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
          <span className="pt-1">&#62; 마이페이지</span>
        </div>
        <div className="flex items-end space-x-14">
          <div className="flex flex-col items-center space-y-3">
            <label htmlFor="img">
              <div className="h-32 w-32 bg-[#D9D9D9] text-gray-400 rounded-full shadow-xl flex justify-center items-center text-sm overflow-hidden">
                {previewImg !== null ? (
                  <img
                    alt=""
                    src={previewImg === null ? basicProfile : previewImg}
                    className="object-cover "
                  />
                ) : (
                  <span className="">이미지</span>
                )}
              </div>
            </label>
            <input
              {...register("img")}
              type="file"
              accept=".gif, .jpg, .png"
              id="img"
              {...register("img")}
              className="hidden"
              onChange={(e) => insertImg(e)}
            />

            <div className="text-sm text-gray-300" onClick={onClickBasikImg}>
              기본 이미지로 변경
            </div>
          </div>

          <div className="py-3 space-y-5">
            <div className="">
              {editState ? (
                <form
                  onSubmit={handleSubmit(onValidNickName)}
                  className="relative flex flex-col"
                >
                  <input
                    {...register("nickName")}
                    placeholder=""
                    className="border-b-2 border-mainColor w-44 outline-none"
                  />
                  {watch("nickName") ? (
                    <span className="text-xs text-mainColor pt-1">
                      좋은닉네임이에요 :0
                    </span>
                  ) : (
                    <div className="h-5"></div>
                  )}

                  <button className="absolute right-0 bg-mainColor rounded-full text-white px-2 pt-1 bottom-6 text-sm focus:bg-mainColor">
                    확인
                  </button>
                </form>
              ) : (
                <div className="flex items-center space-x-1 mb-5">
                  <span className="pt-1">
                    <span className="text-mainColor">{nickName}</span>님
                  </span>

                  <HiOutlinePencil color="gray" onClick={onClick} />
                </div>
              )}

              <span className="text-gray-400">{email}</span>
            </div>

            <Link to="changePw">
              <div className="flex space-x-2 items-center text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <span className="pt-1">비밀번호 변경하기</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400">
        문의 사항은
        <span className="text-mainColor underline pr-1">test@gmail.com</span>
        으로 보내주시면 감사하겠습니다
      </div>
    </div>
  );
};

export default Mypage;
