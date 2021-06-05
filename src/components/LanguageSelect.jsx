import React,{useState} from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import i18n from '../i18n'

const LanguageSelect = () => {
  const [language,setLanguage]= useState('English')
  const handleChange = (event) => {
    setLanguage(event.target.value)
    i18n.changeLanguage(event.target.value)
  }
  return (
    <div>
      <Select
      style={styles.menu}
        data-cy='language-dropdown'
        inputProps={{
          name: 'language',
          id: 'age-native-simple',
        }}
       
        value={language}
        displayEmpty
        onChange={handleChange}>
        <MenuItem data-cy='english' value={'English'}>
          English
        </MenuItem>
        <MenuItem data-cy='svenska' value={'Svenska'}>
          Svenska
        </MenuItem>
      </Select>
    </div>
  )
}

export default LanguageSelect

const styles = {
menu:{ 
  textAlign: 'right',
  color: 'white',
  textDecorationColor:"white"
}
}