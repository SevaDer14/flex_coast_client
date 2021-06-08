import React from 'react'
import Question from '../Question'
import Answer from '../Answer'
import { useTranslation } from 'react-i18next'

const EmailInquiry = () => {
  const { t } = useTranslation()

  return (
    <div data-cy='office-type-container'>
      <Question text={t('question.office_type')} />
      <Answer
        text={t('answer.email')}
        type='radio'
        placeholder='user@company.com'
        questionKey='office_type'
      />
    </div>
  )
}

export default EmailInquiry
