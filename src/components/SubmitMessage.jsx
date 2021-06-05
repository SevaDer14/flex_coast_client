import React from 'react'
import Question from './Question.jsx'
import { useSelector } from 'react-redux'

const SubmitMessage = () => {
  const { submitMessage } = useSelector((state) => state)

  return (
    <div>
      <Question text={submitMessage} />
    </div>
  )
}

export default SubmitMessage
