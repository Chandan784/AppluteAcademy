import React from 'react'
import Slider from "./Slider"
import Courses from './Courses'
import WhyUs from './WhyUs'
import LiveTraining from './LiveTraining'
import IntershipPlacement from './IntershipPlacement'
import PaymentSection from './PaymentSection'

function Home() {
  return (
    <div>
        <Slider/>
        <Courses/>
        <WhyUs/>
        <LiveTraining/>
        <IntershipPlacement/>
        <PaymentSection/>
    </div>
  )
}

export default Home