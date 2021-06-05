import React from 'react'
import Question from '../components/Question'
import Answer from '../components/Answer'
import Button from '@material-ui/core/Button'
import Inquiries from '../modules/Inquiries'
import { useSelector } from 'react-redux'

const QuestionaryForm = () => {
  const { submitMessage, formData } = useSelector((state) => state)

  return (
    <div className='form-container'>
      <div data-cy='email-container'>
        <Question text='Where can we reach you?' />
        <Answer
          text='My email is'
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
