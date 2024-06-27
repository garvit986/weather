import React, { FC, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {city as cityType } from '../CityDetails'


interface SearchBarProps {
    selectedCity: (city: string) => void;
  }

const SearchBar: FC<SearchBarProps> = ({selectedCity}) => {

    const [city, setCity] = useState<string>('')
  const handleChange = (event: SelectChangeEvent) => {
    const cityy = event.target.value as string
    setCity(cityy);
    selectedCity(cityy)
    localStorage.setItem('lastCity', cityy)
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={city}
          onChange={handleChange}
          label="City"
        >
          <MenuItem value="">
          </MenuItem>
          {cityType.map((item)=>(
            <MenuItem key={item.city} value={item.city}>{item.city}</MenuItem>
          ))}       
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchBar;