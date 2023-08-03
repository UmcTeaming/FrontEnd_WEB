import React from 'react'
import './Homeongoingproject.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homeongoingproject = () => {
  return (
    <div className='OngoingProjApp'>
      <div className='OngoingProjtitle'>진행중인 프로젝트&#62;</div>
      <div className='OngoingProjsubtitle'>프로젝트의 상태가 '진행중'인 프로젝트입니다</div>

      <div className='OngoingProjContent'>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='..\..\..\public\img\projectImg\project_img.jpg' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감 <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
        <div className='content'>
          <span className='contentprogress'>마감! <FontAwesomeIcon className="progressicon" icon={faCircle} /></span>
          <div className='contentimgs'></div>
          {/* <img className='contentimg'
            alt="프로젝트 이미지"
            src='../../public/img/logo/mLogo.png' /> */}
          <div className='contenttitle'>
            프로젝트 이름을 적어주세요
          </div>
          <div className='contentsubtitle'>
            수업 명을 적어주세요
          </div>
        </div>
      </div>
    </div>
  )
}
