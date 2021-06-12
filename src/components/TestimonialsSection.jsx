import React, { useState, useEffect } from 'react'
import Testimonial from './Testimonial'
import illustration from '../assets/office-illu.png'
import { testimonials } from '../assets/testimonials'

const TestimonialsSection = () => {
  const [slider, setSlider] = useState(1)
  const sliderHandler = (number) => {
    if (slider + number === 4) {
      setSlider(1)
    } else if (slider + number === 0) {
      setSlider(3)
    } else {
      setSlider(slider + number)
    }    
  }

  //onMouseOver Stop Slinding (set State) & clear TimeOut on click

  useEffect(() => {
    setTimeout(() => {
      sliderHandler(1)
    }, 4000)
  }, [slider])

  return (
    <>
      <div className='illu-container'>
        <div>
          <img className='illustration' src={illustration} alt='illustration' />
          <h4 className='testimonial-subtitle'>High end flexibility</h4>
          <h1 className='testimonial-title'>
            In the last 12 months, Flex Coast has helped over 100 companies find
            their new offices - here are some examples
          </h1>
        </div>
      </div>
      <div className='testimonials-container'>
        <Testimonial
          slider={slider}
          info={testimonials[slider - 1]}
          sliderHandler={sliderHandler}
        />
      </div>
    </>
  )
}

export default TestimonialsSection
