import React from 'react'
import Question from '../Question'
import Answer from '../Answer'
import { useTranslation } from 'react-i18next'

const OfficeTypeInquiry = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='office-type-container'>
      <Question text={t('question.office_type')} />
      <Answer
        text={t('answer.office_type')}
        type='toggle-btn'
        questionKey='office_type'
      />
    </div>
  )
}

export default OfficeTypeInquiry
