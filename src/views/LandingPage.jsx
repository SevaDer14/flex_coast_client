import React from 'react'
import LandingHeader from '../components/LandingHeader'
import heroImg from '../assets/hero.jpg'

const LandingPage = () => {
  return (
    <div className='hero-section'>
     <LandingHeader />
     <img src={heroImg} alt='hero' className='hero-img' />
    </div>
  )
}

export default LandingPage
