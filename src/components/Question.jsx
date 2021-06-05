import React from 'react'

const Question = ({ text, dataCy = 'question' }) => {
  return (
    <div className='question-container'>
      <p data-cy={dataCy}>{text}</p>
    </div>
  )
}

export default Question
