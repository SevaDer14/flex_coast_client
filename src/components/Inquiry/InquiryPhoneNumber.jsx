import React from 'react'
import Question from './Question'
import Answer from './Answer'
import { useTranslation } from 'react-i18next'

const PhoneNumber = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='phone-number-container'>
      <Question text={t('question.name')} />
      <Answer
        text={t('answer.name')}
        type='text'
        placeholder={t('answer.companyPlaceholder')}
        questionKey='company'
      />
    </div>
  )
}

export default PhoneNumber
