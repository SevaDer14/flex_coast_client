import React from 'react'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo2.png'

const LandingHeader = () => {
  return (
    <div data-cy='header' className='header-container'>
      <img src={logo} alt='logo' className='logo' />
      <div>
        <div className='phone-btn'>
          <a href='tel:+46812345678'>08-123 456 78</a>
        </div>
        <LanguageSelect />
      </div>
    </div>
  )
}

export default LandingHeader
