import React from 'react'
import profile1 from '../assets/social-img-1.jpg'
import profile2 from '../assets/social-img-2.jpg'
import profile3 from '../assets/social-img-3.jpg'

const Testimonial2 = () => {
  return (
    <div className='items'>
      <div className='card'>
        <img className='profile-image' src={profile1} alt='profile-image' />
        <div className='card-body'>
          <h5 class='card-title'>Delbert Simonas</h5>
          <p class='card-text'>
            "Online reviews can make or break a customer's decision to make a
            purchase. Read about these customer review on site"
          </p>
        </div>
      </div>
      <div className='card'>
        <img className='profile-image' src={profile2} alt='profile-image' />
        <div className='card-body'>
          <h5 class='card-title'>Delbert Simonas</h5>
          <p class='card-text'>
            "Online reviews can make or break a customer's decision to make a
            purchase. Read about these customer review on site"
          </p>
        </div>
      </div>
      <div className='card'>
        <img className='profile-image' src={profile3} alt='profile-image' />
        <div className='card-body'>
          <h5 class='card-title'>Delbert Simonas</h5>
          <p class='card-text'>
            "Online reviews can make or break a customer's decision to make a
            purchase. Read about these customer review on site"
          </p>
        </div>
      </div>
      <div className='card'>
        <img className='profile-image' src={profile2} alt='profile-image' />
        <div className='card-body'>
          <h5 class='card-title'>Delbert Simonas</h5>
          <p class='card-text'>
            "Online reviews can make or break a customer's decision to make a
            purchase. Read about these customer review on site"
          </p>
        </div>
      </div>
    </div>
  )
}
export default Testimonial2
