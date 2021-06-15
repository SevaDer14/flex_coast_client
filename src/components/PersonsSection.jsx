import profile1 from '../assets/social-img-1.jpg'
import profile2 from '../assets/social-img-2.jpg'
import profile3 from '../assets/social-img-3.jpg'
import React from 'react'
import PersonCard from './PersonCard'
import { persons } from '../assets/testimonials'
import { useTranslation } from 'react-i18next'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import { EffectCoverflow } from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

const PersonsSection = () => {
  const { t } = useTranslation()

  SwiperCore.use([EffectCoverflow, Pagination, Navigation])
  return (
    <>
      <div className='testimonials-container'>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            1280: {
              maxWidth: 1280,
              slidesPerView: 4,
            },
          }}
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          pagination={true}
          loop={true}
          className='pagination'>
          <section>
            <PersonCard image={profile1} />
          </section>
        </Swiper>
      </div>
    </>
  )
}

export default PersonsSection
