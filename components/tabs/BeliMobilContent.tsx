import React, { ChangeEvent, useState } from 'react'
import SelectItem from '../inputs/SelectItem'
import { SelectChangeEvent } from '@mui/material';
import RangeSliderInput from '../inputs/RangeSliderInput';
import Find from './Find';

type Props = {}

export default function BeliMobilContent({}: Props) {
    const [value, setValue] = useState<number[]>([20, 80]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const inputArray = inputValue.split(',').map(Number);

    if (inputArray.length === 2) {
      setValue(inputArray);
    }
  };
  return (
    <Find />
        // <RangeSliderInput defaultValue={[100, 2000]} max={2000} min={100} inputMax={2000} />
    // <SelectItem handleChange={handleInputChange} value=''>
    // </SelectItem>
  )
}