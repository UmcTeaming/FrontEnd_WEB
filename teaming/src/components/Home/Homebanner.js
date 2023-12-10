import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BannerStyle/Homebanner.css";
// 아이콘 관련
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
// 배너 슬라이더 관련
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import 'swiper/swiper-bundle.min.css';
// 데이터 적용 관련
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState, nickNameState } from "../../components/atom";

//========================================================================
// 메인 페이지의 배너 관련 컴포넌트
// slider 3d coverflow는 사용하여 배너 코드를 작성


// datas > home.json데이터 가져와야 함
export const Homebanner = () => {
  // 회원 정보 및 최근 프로젝트 관련 상태를 선언
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [recentlyProjects, setRecentlyProjects] = useState([]);

  useEffect(() => {
    // 여기서 외부 데이터를 가져오고 recentlyProjects 상태를 설정
    axios
      .get(`${process.env.REACT_APP_API_URL}/member/${memberId}/home`)
      .then((response) => {
        const data = response.data.data;

        // 최근 프로젝트가 있으면 상태를 업데이트
        if (data.recentlyProject !== null)
          setRecentlyProjects(data.recentlyProject);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(recentlyProjects);
  return (
    <div className="BannerApp">
      {/* 최근 프로젝트가 없는 경우 */}
      {recentlyProjects?.length === 0 ? (
        <div className="Bannerempty">
          <div className="notworkingicon empty_left">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#ffffff", pointerEvents: "none" }}
            />
          </div>
          <div className="emptycontent">
            <div className="emptytitle">
              <span className="emptytitlelineone">아직 생성된</span>
              <br />
              프로젝트가 없어요
            </div>
            <div className="emptyimg"></div>
            <div className="emptysubtitle">
              프로젝트를 생성하고 티밍을 이용해보세요!{" "}
            </div>
          </div>
          <div className="notworkingicon empty_right">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#ffffff", pointerEvents: "none" }}
            />
          </div>
        </div>
      ) : (
        <div className="Bannernotempty">
          {/* 최근 프로젝트가 있는 경우 */}
          <div className="Bannertxt">
            <div className="Bannertitle">가장 최근 프로젝트</div>
            <div className="Bannersubtitle">
              {nickName}님의 프로젝트 중 가장 최근 새소식이 있는 프로젝트 입니다
            </div>
          </div>
          {/* 여기가 회전할 콘텐츠 */}
          <div className="BannerContent container">
            <Swiper
              className="swiper_container"
              effect={'coverflow'} // 3D 효과 사용
              grabCursor={true}
              centeredSlides={true} // 중앙 정렬
              slidesPerView={3}
              initialSlide={0}
              loop={true} // 무한 루프
              spaceBetween={-50} // 슬라이드 사이 간격
              coverflowEffect={{
                rotate: 0, // 슬라이드 회전 각도
                stretch: 0, // 슬라이드 사이 간격
                depth: 100, // 3D 효과 깊이
                modifier: 2.5, // 효과 강도
                slideShadows: true, // 슬라이드 그림자 표시 여부
              }}
              pagination={{ el: "swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Navigation]}
            >
              {recentlyProjects?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="contentdisplay_inline">
                    <div className="content">
                      <Link to={`/${item.projectId}/project-files`}>
                        {item.projectStatus === "ING" ? (
                          <span className="contentprogress2">
                            진행중{" "}
                            <FontAwesomeIcon icon={faCircle} color="#527FF5" />
                          </span>
                        ) : (
                          <span className="contentprogress2">
                            마감{" "}
                            <FontAwesomeIcon
                              icon={faCircle}
                              style={{ color: "yellow" }}
                            />
                          </span>
                        )}
                        <div className="contentimgs">
                          {item.projectImage && (
                            <img
                              src={item.projectImage}
                              alt={item.projectName}
                            />
                          )}
                        </div>
                        <div className="contenttitle">{item.projectName}</div>

                        <div className="contentdescription">
                          {item.projectCreatedDate}
                        </div>
                        <div className="contentmember">{item.member_name}</div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* 슬라이드 복제 */}
              {/* 수정해야 할 사항 - 3d coverflow에서 무한루프가 적용되려면 슬라이드의 갯수가 최소 5개가 되어야 하기 때문에 등록된 프로젝트가 3개일 경우, 슬라이드를 복제하여 임의로 6개가 되도록 했다  */}
              {recentlyProjects?.length > 2 ? (
                recentlyProjects?.map((item, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <div className="contentdisplay_inline">
                      <div className="content">
                        <Link to={`/${item.projectId}/project-files`}>
                          {item.projectStatus === "ING" ? (
                            <span className="contentprogress2">
                              진행중{" "}
                              <FontAwesomeIcon icon={faCircle} color="#527FF5" />
                            </span>
                          ) : (
                            <span className="contentprogress2">
                              마감{" "}
                              <FontAwesomeIcon
                                icon={faCircle}
                                style={{ color: "yellow" }}
                              />
                            </span>
                          )}
                          <div className="contentimgs">
                            {item.projectImage && (
                              <img
                                src={item.projectImage}
                                alt={item.projectName}
                              />
                            )}
                          </div>
                          <div className="contenttitle">{item.projectName}</div>

                          <div className="contentdescription">
                            {item.projectCreatedDate}
                          </div>
                          <div className="contentmember">{item.member_name}</div>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : null}
            </Swiper>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow workingicon">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  style={{ color: "#000" }}
                />
              </div>
              <div className="swiper-button-next slider-arrow workingicon">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ color: "#000" }}
                />
              </div>
              {/* <div className="swiper-pagination"></div> */}
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};
