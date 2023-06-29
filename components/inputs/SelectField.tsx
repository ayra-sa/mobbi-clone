import { Box, FormControl, InputLabel, MenuItem, NativeSelect, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react'

type Props = {
    defaultValue: string | number
    options: string[] | number[]
}

export default function SelectField({defaultValue, options}: Props) {
    const [optionValue, setOptionValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
      setOptionValue(event.target.value as string);
    };

    // const options = [
    //     {value: 'certified', label: 'Certified'},
    //     {value: 'lelang', label: 'Lelang'},
    //   ]
  
    return (
      <Box>
        <FormControl fullWidth>
          <Select
        //   variant='standard'
            // labelId="demo-simple-select-label"
            // id="demo-simple-select"
            // value={optionValue}
            defaultValue={defaultValue}
            // label="Age"
            // onChange={handleChange}
          >
            {options.map(option => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
            {/* <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </Box>
    );
}