import React from "react";
import "./Homeongoingproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homeongoingproject = () => {
  const items = []; // 리스트가 비어있는 경우
  // const items = ['item1', 'item2', 'item3']; // 리스트에 내용이 있는 경우
  return (
    <div className="OngoingProjApp">
      <div className="OngoingProjtitle">
        <a href="/ongoingProject">진행중인 프로젝트&#62;</a>
      </div>
      <div className="OngoingProjsubtitle">
        프로젝트의 상태가 '진행중인' 프로젝트입니다
      </div>

      {items.length === 0 ? (
        // 진행 중인 프로젝트가 없을 때
        <div className="Ongoingempty">
          <div className="Ongoingemptycontent">
          <div className="emptytitle">
              <span className='emptytitlelineone'>마감된</span><br/>프로젝트가 없어요</div>
            <div className="emptyimg"></div>
            <div className="emptysubtitle"><span className="emptysubtitlelineone">프로젝트를 마감하면</span><br/>지난 활동들을 모아볼 수 있어요!</div>
          </div>
        </div>
      ) : (
        // 진행 중인 프로젝트가 있을 때
        <div className="OngoingProjContent">
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='..\..\..\public\img\projectImg\project_img.jpg' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감 <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
          <div className="content">
            <span className="contentprogress">
              마감! <FontAwesomeIcon className="progressicon" icon={faCircle} />
            </span>
            <div className="contentimgs"></div>
            {/* <img className='contentimg'
    alt="프로젝트 이미지"
    src='../../public/img/logo/mLogo.png' /> */}
            <div className="contenttitle">프로젝트 이름을 적어주세요</div>
            <div className="contentsubtitle">수업 명을 적어주세요</div>
          </div>
        </div>
      )}
    </div>
  );
};
