import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'

const TypeField = ({ text, type, placeholder }) => {
  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <input data-cy='input' type={type} placeholder={placeholder} />
      <IconButton className='done-btn' data-cy='done-btn'>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  )
}

export default TypeField
