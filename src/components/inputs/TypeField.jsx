import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'

const TypeField = ({ text, type }) => {
  return (
    <div className='type-field-container'>
      <h3>{text}</h3>
      <input
        variant='outlined'
        data-cy={type}
        name={type}
        type={type}
        placeholder={type}
      />
      <IconButton className='done-btn' data-cy='done-btn'>
        <ExpandMoreIcon />
      </IconButton>
    </div>
  )
}

export default TypeField
