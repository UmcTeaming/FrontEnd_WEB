import React from "react";
import "./Homeportfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homeportfolio = () => {
  const items = ['item']; // 리스트가 비어있는 경우
  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우
  return (
    <div className="PortfolioApp">
      <div className="Portfoliotitle">
        <a href="/portfolio">포트폴리오 &#62;</a>
      </div>
      <div className="Portfoliosubtitle">
        000님의 프로젝트를 한눈에 모아보세요!
      </div>

      {items.length === 0 ? (
        // 진행 중인 프로젝트가 없을 때
        <div className="Portfolioempty">
        <div className="Portfolioemptycontent">
        <div className="emptytitle">
            <span className='emptytitlelineone'>마감된</span><br/>프로젝트가 없어요</div>
          <div className="emptyimg"></div>
          <div className="emptysubtitle"><span className="emptysubtitlelineone">프로젝트를 마감하면</span><br/>지난 활동들을 모아볼 수 있어요!</div>
        </div>
      </div>
      ) : (
        // 진행 중인 프로젝트가 있을 때
        <div className="Portfoliocontent">
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='/images/m_logo_img.png'
  /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentdescription">
              프로젝트 진행 날짜를 적어주세요
              <br />
              팀원 정보를 알려주세요
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
