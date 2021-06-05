import React from 'react'

const Question = ({ text }) => {
  return (
    <div className='question-container'>
      <p data-cy='question'>{text}</p>
    </div>
  )
}

export default Question
