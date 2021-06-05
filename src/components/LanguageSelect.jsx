import React from 'react'
import Select from '@material-ui/core/Select'
import i18n from '../i18n'

const LanguageSelect = () => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  return (
    <div>
      <Select
        data-cy='language-dropdown'
        inputProps={{
          name: 'language',
          id: 'age-native-simple',
        }}
        onChange={handleChange}>
        <option aria-label='None' value='' />
        <option data-cy='english' value={'en'}>English</option>
        <option data-cy='svenska' value={'se'}>Svenska</option>
      </Select>
    </div>
  )
}

export default LanguageSelect
