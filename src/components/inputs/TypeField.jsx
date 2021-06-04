import React from 'react'

const TypeField = () => {
  return (
    <div data-cy='type-field-container'>
      <input data-cy='email' name='email' type='email' placeholder='Email' />
      <button data-cy='done-btn'>Done</button>
    </div>
  )
}

export default TypeField
