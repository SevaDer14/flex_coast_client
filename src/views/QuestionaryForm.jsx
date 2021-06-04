import React from 'react'
import Question from '../components/Question'
import TypeField from '../components/inputs/TypeField'

const QuestionaryForm = () => {
  return (
    <div className='form-container'>
      <Question />
      <TypeField />
      <button data-cy='submit-btn'>Submit</button>
    </div>
  )
}

export default QuestionaryForm
