import React from 'react'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo2.png'

const LandingHeader = () => {
  return (
    <div data-cy='header' className='header-container'>
      <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
      <div>
        <button className='custom-button' data-cy='phone-number'>
          <a href='tel:+46812345678'>08-123 456 78</a>
        </button>
        <LanguageSelect />
      </div>
    </div>
  )
}

export default LandingHeader
