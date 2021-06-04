import React from 'react'

const QuestionaryForm = () => {
  return (
    <>
      <div data-cy='email-container'>
        <p data-cy='question'>Where can we reach you?</p>
        <input data-cy='email' name='email' type='email' placeholder='Email' />
        <button data-cy='done-btn'>Done</button>
      </div>
      <button data-cy='submit-btn'>Submit</button>
    </>
  )
}

export default QuestionaryForm
