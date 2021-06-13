import React from 'react'
import avatar from '../assets/avatar.png'
import iconCity from '../assets/iconCityPurple.svg';
import { useTranslation } from 'react-i18next'

const FantasticOffer = () => {
  const { t } = useTranslation()
  const Offer = ({ image, title, content }) => {
    return (
      <div className='offer'>
        <img src={iconCity}/>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    )
  }
  return (
    <div className='compelling-container' data-cy='compelling-container'>
      <div className='offer-title'>
        <h1>Flexible workspace where and how you need it</h1>
      </div>
      <div className='offer-container'>
        <Offer
          image={avatar}
          title='Any size space'
          content='From a single desk, all the way up to configured offices.'
        />
        <Offer
          image={avatar}
          title='On your terms'
          content='Month, quarter or longer term.'
        />
        <Offer
          image={avatar}
          title='Best Locations'
          content='Choose a single location, or access any building worldwide.'
        />
      </div>
    </div>
  )
}

export default FantasticOffer
