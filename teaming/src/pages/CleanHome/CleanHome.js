import React from 'react'
import './CleanHome.css'
import { Homebanner } from '../../components/Home/Homebanner';
import { Homeongoingproject } from '../../components/Home/Homeongoingproject';
import { Homeportfolio } from '../../components/Home/Homeportfolio';

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