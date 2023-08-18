import React from "react";
import "./BannerStyle/Homebanner.css";
// 아이콘 관련
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from "swiper";

export const Homebanner = () => {
  const items = ["item1"]; // 리스트가 비어있는 경우
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
              <SwiperSlide>
                <div className="contentdisplay_inline">
                  <div className="content">
                    <span className="contentprogress">
                      진행중 <FontAwesomeIcon icon={faCircle} style={{ color: "blue" }} />
                    </span>
                    <div className="contentimgs"></div>
                    <div className="contenttitle">
                      프로젝트0 이름을 적어주세요
                    </div>
                    <div className="contentsubtitle">수업 명을 적어주세요</div>
                    <div className="contentdescription">
                      프로젝트 진행 날짜를 적어주세요
                      <br />
                      팀원 정보를 알려주세요
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contentdisplay_inline">
                  <div className="content">
                    <span className="contentprogress">
                      진행중 <FontAwesomeIcon icon={faCircle} style={{ color: "blue" }}/>
                    </span>
                    <div className="contentimgs"></div>
                    <div className="contenttitle">
                      프로젝트1 이름을 적어주세요
                    </div>
                    <div className="contentsubtitle">수업 명을 적어주세요</div>
                    <div className="contentdescription">
                      프로젝트 진행 날짜를 적어주세요
                      <br />
                      팀원 정보를 알려주세요
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="contentdisplay_inline">
                  <div className="content">
                    <span className="contentprogress">
                      진행중 <FontAwesomeIcon icon={faCircle} style={{ color: "blue" }} />
                    </span>
                    <div className="contentimgs"></div>
                    <div className="contenttitle">
                      프로젝트2 이름을 적어주세요
                    </div>
                    <div className="contentsubtitle">수업 명을 적어주세요</div>
                    <div className="contentdescription">
                      프로젝트 진행 날짜를 적어주세요
                      <br />
                      팀원 정보를 알려주세요
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              {/* <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <FontAwesomeIcon
                    icon="fa-solid fa-chevron-right"
                    style={{ color: "#ffffff" }}
                  />
                </div>
                <div className="swiper-button-next slider-arrow">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    style={{ color: "#000000" }}
                  />
                </div>
                <div className="swiper-pagination"></div>
              </div> */}

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
