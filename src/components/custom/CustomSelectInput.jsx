import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import ListItemText from '@material-ui/core/ListItemText'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'

const locations = [
  'Lindholmen',
  'Gamlestaden',
  'Järntorget',
  'Linnè',
  'Nordstan',
  'Korsvägen',
  'Majorna',
  'Avenyn',
  'Haga',
  'Stenpiren',
  'Eriksberg',
]

const CustomSelectInput = ({ locationValue }) => {
  return (
    <FormControl>
      <InputLabel>Locations</InputLabel>
      <Select
        // labelId='demo-mutiple-checkbox-label'
        data-cy='location-select'
        multiple
        value={locationValue}
        // onChange={handleChange}
        input={<Input />}
        renderValue={(selected) => selected.join(', ')}
        // MenuProps={MenuProps}
      >
        {locations.map((location) => (
          <MenuItem key={location} value={location}>
            <Checkbox checked={locationValue.indexOf(location) > -1} />
            <ListItemText primary={location} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelectInput
