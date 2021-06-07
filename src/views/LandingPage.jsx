import React from 'react'
import LandingHeader from '../components/LandingHeader'

const LandingPage = () => {
  return (
    <div className='hero-section' data-cy='hero-section'>
      <LandingHeader />
      <div data-cy='welcome-text' className='welcome-text'>
        <h1>Flexible short term office leasing in modern Gothenburg</h1>
        <button data-cy='get-started' className='custom-button'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default LandingPage
