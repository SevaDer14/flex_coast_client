import React from 'react'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Button from '@material-ui/core/Button'
import Inquiries from '../modules/Inquiries'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const QuestionaryForm = () => {
  const { submitMessage, formData } = useSelector((state) => state)
  const { t } = useTranslation()

  return (
    <div className='form-container'>
      <h2>{t('welcomeMessage')}</h2>
      <div data-cy='email-container'>
        <Question text={t('question.email')} />
        <Answer
          text={t('answer.email')}
          type='email'
          placeholder='your.name@company.com'
          questionKey='email'
        />
      </div>

      {submitMessage ? (
        <>
          <Question dataCy='on-submit-message' text={submitMessage} />
        </>
      ) : (
        <Button
          variant='outlined'
          circular
          className='submit-btn'
          data-cy='submit-btn'
          onClick={() => Inquiries.create(formData)}>
          Submit
        </Button>
      )}
    </div>
  )
}

export default QuestionaryForm
