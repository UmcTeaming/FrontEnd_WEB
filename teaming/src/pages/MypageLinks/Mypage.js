import React, { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import tw from "tailwind-styled-components";
import { HiOutlinePencil } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { Link, Routes, Route } from "react-router-dom";
import ChangePw from "./ChangePw";
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState, nickNameState } from "../../components/atom";
import basicProfile from "./프로필_기본.jpg";

const Div = tw.div`
flex space-x-2
`;

const LinkDiv = tw.div`
flex justify-between items-center py-3 pl-6 border-b border-gray-400 cursor-pointer text-gray-600 font-medium
`;
const Mypage = () => {
  const [editState, setEditState] = useState(false);

  const [previewImg, setPreviewImg] = useState();

  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [email, setEmail] = useState();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
    setError,
  } = useForm();

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
        alert("닉네임이 변경되었습니다.");
        setEditState(false);
      })
      .catch((err) => {
        setError("nickName", { message: "중복되는 닉네임이 있어요" });
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

  const onClickBasikImg = async () => {
    try {
      const formData = new FormData();
      const imageUrl = "/img/projectImg/profile_default_img.jpg";
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const imageFile = new File([blob], "project_image.jpg", {
        type: "image/jpeg",
      });
      formData.append("change_image_file", imageFile);

      const res = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}/member/${memberId}/mypage/change-image`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: formData,
        transformRequest: (data, headers) => {
          return data;
        },
      });
      console.log(res);
      setPreviewImg(res.data.data);
    } catch (err) {
      console.error(err);
    }
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
    <div
      className="flex  justify-center pt-20 space-y-10 h-screen"
      style={{
        background:
          "linear-gradient(180deg, rgba(3, 63, 255, 0.50) 0%, rgba(3, 63, 255, 0.00) 100%)",
      }}
    >
      <div className="space-y-8">
        <div className="flex text-white items-center  mb-3">
          <span className="font-extrabold text-lg"> 마이페이지</span>
        </div>
        <div className="flex ">
          <div className="flex space-x-14 pr-10  h-full ">
            <div className="flex flex-col items-center space-y-3">
              <div className="h-32 w-32 bg-[#D9D9D9] text-gray-400 rounded-full shadow-xl flex justify-center items-center text-sm overflow-hidden">
                {previewImg !== null ? (
                  <img alt="" src={previewImg} className="object-cover " />
                ) : (
                  <span className="">이미지</span>
                )}
              </div>
            </div>

            <div className="py-3 space-y-5  flex flex-col justify-between w-44">
              <div className=" ">
                {editState ? (
                  <form
                    onSubmit={handleSubmit(onValidNickName)}
                    className="relative flex flex-col"
                  >
                    <input
                      {...register("nickName")}
                      placeholder=""
                      className="bg-transparent border w-full rounded-md border-mainColor  outline-none text-2xl font-extrabold pl-2 text-[#02207F]"
                    />
                    <div className="h-5">
                      {watch("nickName") && !errors.nickName?.message ? (
                        <span className="text-xs text-mainColor pt-1">
                          좋은닉네임이에요 :0
                        </span>
                      ) : (
                        <span className=" text-xs text-red-400">
                          {errors.nickName?.message}
                        </span>
                      )}
                    </div>

                    <button className="absolute right-2 bg-mainColor rounded-full text-white px-2  top-2 text-xs focus:bg-mainColor">
                      확인
                    </button>
                  </form>
                ) : (
                  <div>
                    <div className="flex items-center justify-between ">
                      <span className="text-white font-extrabold text-2xl">
                        {nickName}
                      </span>

                      <HiOutlinePencil color="gray" onClick={onClick} />
                    </div>
                    <span className="text-white text-sm">{email}</span>
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("img")}
                  type="file"
                  accept=".gif, .jpg, .png"
                  id="img"
                  {...register("img")}
                  className="hidden"
                  onChange={(e) => insertImg(e)}
                />
                <label
                  htmlFor="img"
                  className="text-[#02207F] font-semibold cursor-pointer"
                >
                  프로필 이미지 변경
                </label>
                <div
                  className="text-sm text-gray-500 cursor-pointer"
                  onClick={onClickBasikImg}
                >
                  기본 이미지로 변경
                </div>
              </div>
            </div>
          </div>

          <div className="pl-10 space-y-2 border-l-2 border-white pb-5">
            <span className="text-xs text-white pl-3">
              문의 사항은 test@gmail.com 으로 보내주시면 감사하겠습니다
            </span>
            <div className="flex flex-col">
              <Link>
                <LinkDiv>
                  <span>자주 묻는 질문</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </LinkDiv>
              </Link>
              <Link to="changePW">
                <LinkDiv>
                  <span>비밀번호 변경</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </LinkDiv>
              </Link>
              <Link>
                <LinkDiv>
                  <span>자주 묻는 질문</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      className="w-4 h-4 text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </LinkDiv>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
