import React from 'react'
import './CleanHome.css'
import { Homebanner } from '../../components/Home/Homebanner';
import { Homeongoingproject } from '../../components/Home/Homeongoingproject';
import { Homeportfolio } from '../../components/Home/Homeportfolio';

//========================================================================
// 메인 페이지를 담당하는 가장 상위 컴포넌트
// Homebanner는 배너
// Homeongointproject는 진행 중인 프로젝트
// Homeportfolio는 완료된 프로젝트와 관련된 하위 컴포넌트들이다


const CleanHome = () => {
  return (
    <div className='cleanhomecontainer'>
      <div className='homebanner'><Homebanner/></div>
      <div className='homeproject'><Homeongoingproject/></div>
      <div className='homeportfolio'><Homeportfolio/></div>
    </div>
  )
}
export default CleanHome;