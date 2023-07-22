import React from 'react'
import './Home.css'
import { Homebanner } from '../components/Homebanner'
import { Homeongoingproject } from '../components/Homeongoingproject'
import { Homecalendar } from '../components/Homecalendar';
import { Homeportfolio } from '../components/Homeportfolio';


export const Home = () => {
  return (
    <div className='homecontainer'>
      <div className='homebanner'><Homebanner /></div>
      <div className='bodysection'>
        <div className='homeproject'><Homeongoingproject /></div>
        <div className='homecalendar'><Homecalendar /></div>
      </div>
      <div className='homeportfolio'><Homeportfolio /></div>
    </div>
  )
}





