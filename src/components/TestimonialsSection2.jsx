import React, { useState, useEffect } from 'react'
import Testimonial2 from './Testimonial2'
import { testimonials } from '../assets/testimonials'
import { useTranslation } from 'react-i18next'

const TestimonialsSection = () => {
  const { t } = useTranslation()
  return (
    <>  
      <div className='testimonials-container'>        
        <Testimonial2
        info={testimonials}
        />
      </div>
    </>
  )
}

export default TestimonialsSection
