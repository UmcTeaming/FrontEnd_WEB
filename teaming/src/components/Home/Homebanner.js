import React from 'react'
import './Homebanner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homebanner = () => {
  const items = []; // 리스트가 비어있는 경우
  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우

  return (
    <div className="BannerApp">
      {items.length === 0 ? (
        <div className="Bannerempty">
          <div className="emptycontent">
            <div className="emptytitle">
              <span className='emptytitlelineone'>아직 생성된</span><br/>프로젝트가 없어요</div>
            <div className="emptyimg"></div>
            <div className="emptysubtitle">프로젝트를 생성하고 티밍을 이용해보세요! </div>
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
          <div className="BannerContent">
            <div className="content">
              <span className="contentprogress">
                진행중 <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="contentimgs"></div>
              <div className="contenttitle">프로젝트 이름을 적어주세요</div>
              <div className="contentsubtitle">수업 명을 적어주세요</div>
              <div className="contentdescription">
                프로젝트 진행 날짜를 적어주세요
                <br />
                팀원 정보를 알려주세요
              </div>
            </div>

            <div className="content">
              <span className="contentprogress">
                진행중 <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="contentimgs"></div>
              {/* <img className='contentimg'
  alt="프로젝트 이미지"
  src='/images/m_logo_img.png'
/> */}
              <div className="contenttitle">프로젝트 이름을 적어주세요</div>
              <div className="contentsubtitle">수업 명을 적어주세요</div>
              <div className="contentdescription">
                프로젝트 진행 날짜를 적어주세요
                <br />
                팀원 정보를 알려주세요
              </div>
            </div>

            <div className="content">
              <span className="contentprogress">
                진행중 <FontAwesomeIcon icon={faCircle} />
              </span>
              <div className="contentimgs"></div>
              {/* <img className='contentimg'
  alt="프로젝트 이미지"
  src='/images/m_logo_img.png'
/> */}
              <div className="contenttitle">프로젝트 이름을 적어주세요</div>
              <div className="contentsubtitle">수업 명을 적어주세요</div>
              <div className="contentdescription">
                프로젝트 진행 날짜를 적어주세요
                <br />
                팀원 정보를 알려주세요
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
