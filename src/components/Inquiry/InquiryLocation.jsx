import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const InquiryLocation = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='location-question-container'>
      <Question text='Where would you like to be situated?' />
      <Answer
        text=''
        type='multi-select'
        placeholder='Choose locations'
        questionKey='location'
      />
    </div>
  )
}

export default InquiryLocation
