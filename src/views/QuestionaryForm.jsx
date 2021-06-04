import React from 'react'
import Question from '../components/Question'
import TypeField from '../components/inputs/TypeField'

const QuestionaryForm = () => {
  return (
    <>
      <Question />
      <TypeField />
      <button data-cy='submit-btn'>Submit</button>
    </>
  )
}

export default QuestionaryForm
