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
import { IonIcon } from '@ionic/react';
import {  arrowForwardCircleOutline,arrowBackCircleOutline, chevronForwardOutline, chevronBackOutline} from 'ionicons/icons';

// 배너 슬라이더 관련
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

// 데이터 적용 관련
import axios from "axios";
import { useRecoilState } from "recoil";
import { memberIdState, nickNameState } from "../../components/atom";

// datas > home.json데이터 가져와야 함

export const Homebanner = () => {
  const [nickName, setNickName] = useRecoilState(nickNameState);
  const [memberId, setMemberId] = useRecoilState(memberIdState);
  const [recentlyProjects, setRecentlyProjects] = useState([]);

  useEffect(() => {
    // 여기서 외부 데이터를 가져오고 recentlyProjects 상태를 설정하세요
    axios
      .get(`${process.env.REACT_APP_API_URL}/member/${memberId}/home`)
      .then((response) => {
        const data = response.data.data;

        // setMemberId(data.memberId);
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
      {recentlyProjects?.length === 0 ? (
        <div className="Bannerempty">
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
        </div>
      ) : (
        <div className="Bannernotempty">
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
              effect={"coverflow"}
              initialSlide={1}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: "swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                clickable: true,
              }}
              loop={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              spaceBetween={-50}
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

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <IonIcon icon={chevronBackOutline} style={{ fontSize: '30px' }}></IonIcon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <IonIcon icon={chevronForwardOutline} style={{ fontSize: '30px' }}></IonIcon>
                  
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};
