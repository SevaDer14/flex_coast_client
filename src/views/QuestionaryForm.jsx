import React from 'react'
import Question from '../components/Question'
import TypeField from '../components/inputs/TypeField'
import Button from '@material-ui/core/Button'

const QuestionaryForm = () => {
  return (
    <div className='form-container'>
      <div data-cy='email-container'>
        <Question text='Where can we reach you?' />
        <TypeField
          text='My email is'
          type='email'
          placeholder='your.name@company.com'
        />
      </div>

      <Button
        variant='outlined'
        circular
        className='submit-btn'
        data-cy='submit-btn'>
        Submit
      </Button>
    </div>
  )
}

export default QuestionaryForm
