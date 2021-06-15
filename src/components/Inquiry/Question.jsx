import React from 'react'
import agent from '../../assets/Jehn.png'

const Question = ({ text, dataCy = 'question', hero }) => {
  return (
    <>
      <div className='question-container'>
        <img src={agent} alt='agent' />
        <p data-cy={dataCy}>{text}</p>
      </div>
      {hero && (
        <>
          <em>Jens Østergaard</em>
          <br />
          <em>
            <a href='https://www.linkedin.com/search/results/people/?keywords=jens%20%C3%B8stergaard%20brand&origin=CLUSTER_EXPANSION'>
              LinkedIn
            </a>
          </em>
        </>
      )}
    </>
  )
}

export default Question
