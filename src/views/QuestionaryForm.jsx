import React from 'react'
import Question from '../components/Question'
import Button from '@material-ui/core/Button'
import Inquiries from '../modules/Inquiries'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import EmailInquiry from '../components/questionnaireBlocks/EmailInquiry'
import CompanySizeInquiry from '../components/questionnaireBlocks/CompanySizeInquiry'

const QuestionaryForm = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const { t } = useTranslation()

  return (
    <div className='form-container'>
      <h2 className='welcomeMessage' data-cy='welcome-message'>
        {t('welcomeMessage')}
      </h2>
      <EmailInquiry />
      <CompanySizeInquiry />
      {submitMessage ? (
        <>
          <Question dataCy='on-submit-message' text={submitMessage} />
        </>
      ) : (
        formData.email &&
        formData.size && (
          <Button
            data-cy='submit-btn'
            onClick={() => Inquiries.create(formData)}>
            {t('submitButton')}
          </Button>
        )
      )}
    </div>
  )
}

export default QuestionaryForm
