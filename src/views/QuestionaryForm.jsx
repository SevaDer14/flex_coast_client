import React from 'react'
import Question from '../components/Question'
import CustomButton from '../components/custom/CustomButton'
import Inquiries from '../modules/Inquiries'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import EmailInquiry from '../components/Inquiry/EmailInquiry'
import CompanySizeInquiry from '../components/Inquiry/CompanySizeInquiry'
import OfficeTypeInquiry from '../components/Inquiry/OfficeTypeInquiry'
import Header from '../components/Header'

const QuestionaryForm = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const { t } = useTranslation()

  return (
    <>
      <Header />
      <div className='form-container'>
        <h2 className='welcomeMessage' data-cy='welcome-message'>
          {t('welcomeMessage')}
        </h2>

        <EmailInquiry />
        {formData.email && <CompanySizeInquiry />}
        {formData.size && <OfficeTypeInquiry />}
        {submitMessage ? (
          <>
            <Question dataCy='on-submit-message' text={submitMessage} />
          </>
        ) : (
          formData.office_type && (
            <CustomButton
              dataCy='submit-btn'
              onClick={() => Inquiries.create(formData)}>
              {t('submitButton')}
            </CustomButton>
          )
        )}
      </div>
    </>
  )
}

export default QuestionaryForm
