import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'


const PersonCard = ({  info, image }) => {

  const { t } = useTranslation()
  return (  
    <SwiperSlide>
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'>
          <div className='testimonialBox'>
            <div className='details'>
              <img
                className='profile-image'
                src={image}
                alt='profile'
              />
              <h3>{}</h3>
              <h4>{t(`testimonials.id_.position`)}</h4>
            </div>
            <div className='content'>
              <p>
              {t(`testimonials.id_.text`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  )
}
export default PersonCard
