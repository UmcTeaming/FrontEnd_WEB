import React from 'react'
import './Homebanner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export const Homebanner = () => {
  return (
    <div className='BannerApp'>
    <div className='Bannertxt'>
      <div className='Bannertitle'>가장 최근 프로젝트</div>
      <div className='Bannersubtitle'>카리나님의 프로젝트 중 가장 최근 새소식이 있는 프로젝트 입니다</div>
    </div>
    <div className='BannerContent'>
      <div className='content'>
      <span className='contentprogress'>진행중 <FontAwesomeIcon icon={faCircle} /></span>
      <div className='contentimgs'></div>
        {/* <img className='contentimg'
          alt="프로젝트 이미지"
          src='/images/m_logo_img.png'
        /> */}
        <div className='contenttitle'>
          프로젝트 이름을 적어주세요
        </div>
        <div className='contentsubtitle'>
          수업 명을 적어주세요
        </div>
        <div className='contentdescription'>
          프로젝트 진행 날짜를 적어주세요
          <br/>
          팀원 정보를 알려주세요
        </div>
      </div>

      <div className='content'>
      <span className='contentprogress'>진행중 <FontAwesomeIcon icon={faCircle} /></span>
      <div className='contentimgs'></div>
        {/* <img className='contentimg'
          alt="프로젝트 이미지"
          src='/images/m_logo_img.png'
        /> */}
        <div className='contenttitle'>
          프로젝트 이름을 적어주세요
        </div>
        <div className='contentsubtitle'>
          수업 명을 적어주세요
        </div>
        <div className='contentdescription'>
          프로젝트 진행 날짜를 적어주세요
          <br/>
          팀원 정보를 알려주세요
        </div>
      </div>

      <div className='content'>
      <span className='contentprogress'>진행중 <FontAwesomeIcon icon={faCircle} /></span>
      <div className='contentimgs'></div>
        {/* <img className='contentimg'
          alt="프로젝트 이미지"
          src='/images/m_logo_img.png'
        /> */}
        <div className='contenttitle'>
          프로젝트 이름을 적어주세요
        </div>
        <div className='contentsubtitle'>
          수업 명을 적어주세요
        </div>
        <div className='contentdescription'>
          프로젝트 진행 날짜를 적어주세요
          <br/>
          팀원 정보를 알려주세요
        </div>
      </div>
      </div>
    </div>
  )
}
