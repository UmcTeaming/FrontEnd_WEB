import React, { useState, useEffect } from "react";
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

// 데이터 적용 관련
import axios from "axios";

// datas > home.json데이터 가져와야 함

export const Homebanner = () => {
  const items = [
    {
      projectName: "Auto-Encoder 머신러닝 프로젝트",
      projectDate: "2023-09-01",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "스토리텔링 팀 프로젝트",
      projectDate: "2023-09-01",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
    {
      projectName: "연출학개론 팀 프로젝트",
      projectDate: "2023-09-01",
      projectStatus: "ING",
      member_name: "팀원 정보를 알려주세요",
    },
  ];

  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우

  return (
    <div className="BannerApp">
      {items.length === 0 ? (
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
              카리나님의 프로젝트 중 가장 최근 새소식이 있는 프로젝트 입니다
            </div>
          </div>
          {/* 여기가 회전할 콘텐츠 */}
          <div className="BannerContent container">
            <Swiper
              className="swiper_container"
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
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
              modules={[EffectCoverflow, Pagination, Navigation]}
              spaceBetween={5}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="contentdisplay_inline">
                    <div className="content">
                      {item.projectStatus === "ING" ? (
                        <span className="contentprogress">
                          진행중{" "}
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ color: "blue" }}
                          />
                        </span>
                      ) : (
                        <span className="contentprogress">
                          마감{" "}
                          <FontAwesomeIcon
                            icon={faCircle}
                            style={{ color: "yellow" }}
                          />
                        </span>
                      )}
                      <div className="contentimgs"></div>
                      <div className="contenttitle">{item.projectName}</div>

                      <div className="contentdescription">
                        {item.projectDate}
                      </div>
                      <div className="contentmember">{item.member_name}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
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
