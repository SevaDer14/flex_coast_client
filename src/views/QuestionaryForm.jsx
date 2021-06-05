import React from 'react'
import Question from '../components/Question'
import TypeField from '../components/inputs/TypeField'
import Button from '@material-ui/core/Button'

const QuestionaryForm = () => {
  return (
    <div className='form-container'>
      <Question text='Where can we reach you?' />
      <TypeField text='My email is' type='email' />
      <Button variant='outlined' className='submit-btn' data-cy='submit-btn'>
        Submit
      </Button>
    </div>
  )
}

export default QuestionaryForm
