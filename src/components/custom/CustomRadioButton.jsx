import React from 'react'

const CustomRadioButton = ({ data, disabled, onChange, inputValue }) => {
  return (
    <div className='radio-group'>
      {data.map((item) => {
        return (
          <div key={item.label} style={{ display: 'inline' }}>
            <input
              disabled={disabled}
              type='radio'
              id={item.dataCy}
              data-cy={`${item.dataCy}-btn`}
              value={item.value}
              name='selector'
              checked={inputValue === item.value}
              required
              onChange={onChange}
            />
            <label data-cy={`${item.dataCy}-label`} for={item.dataCy}>
              {item.label}
            </label>
          </div>
        )
      })}
      {/* <input
        disabled={disabled}
        type='radio'
        id={dataCys.dataCy_1}
        data-cy={`${dataCys.dataCy_1}-btn`}
        value={values.value_1}
        name='selector'
        checked={inputValue === values.value_1}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCys.dataCy_1}-label`} for={dataCys.dataCy_1}>
        {labels.label_1}
      </label>
      <input
        disabled={disabled}
        type='radio'
        id={dataCys.dataCy_2}
        data-cy={`${dataCys.dataCy_2}-btn`}
        value={values.value_2}
        name='selector'
        checked={inputValue === values.value_2}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCys.dataCy_2}-label`} for={dataCys.dataCy_2}>
        {labels.label_2}
      </label>
      <input
        disabled={disabled}
        type='radio'
        id={dataCys.dataCy_3}
        data-cy={`${dataCys.dataCy_3}-btn`}
        value={values.value_3}
        name='selector'
        checked={inputValue === values.value_3}
        required
        onChange={onChange}
      />
      <label data-cy={`${dataCys.dataCy_3}-label`} for={dataCys.dataCy_3}>
        {labels.label_3}
      </label> */}
    </div>
  )
}

export default CustomRadioButton
