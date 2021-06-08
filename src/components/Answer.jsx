import React, { useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CheckIcon from '@material-ui/icons/Check'
import IconButton from '@material-ui/core/IconButton'
import store from '../state/store/configureStore'

const Answer = ({ text, type, placeholder, questionKey }) => {
  const [inputValue, setInputValue] = useState('')
  const [filled, setFilled] = useState(false)
  
  const setAnswer = (event) => {
    event.preventDefault()
    setFilled(true)
    store.dispatch({
      type: 'SET_ANSWERS',
      payload: { key: questionKey, answer: inputValue },
    })
  }

  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <div>
        <form onSubmit={(event) => setAnswer(event)}>
          {type === 'toggle-btn' ? (
            <div className='radio-group'>
              <input
                type='radio'
                id='own-room'
                data-cy='own-room-btn'
                value='own-room'
                name='selector'
                onChange={(event) => {
                  setInputValue(event.target.value)
                }}
                
              />
              <label data-cy='own-room-lable' for='own-room'>Own room</label>
              <input
                type='radio'
                id='open-space'
                data-cy='open-space-btn'
                value='open-space'
                name='selector'
                onChange={(event) => {
                  setInputValue(event.target.value)
                }}
              />
              <label data-cy='open-space-lable' for='open-space'>Open space</label>
            </div>
          ) : (
            <input
              className={'input'}
              disabled={filled}
              data-cy='input'
              type={type}
              value={inputValue}
              required
              onChange={(event) => {
                setInputValue(event.target.value)
              }}
              placeholder={placeholder}
            />
          )}

          <IconButton
            className={filled ? 'done-btn-filled' : 'done-btn'}
            type='submit'
            data-cy='done-btn'>
            {filled ? (
              <CheckIcon className={filled ? 'icon-filled' : 'icon'} />
            ) : (
              <ExpandMoreIcon className={filled ? 'icon-filled' : 'icon'} />
            )}
          </IconButton>
        </form>
      </div>
    </div>
  )
}

export default Answer
