import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ChangeEvent, ReactNode, useState } from "react";
import RangeSliderInput from "./RangeSliderInput";


type Props = {
  value: string | number;
  onChange: (value: string | number) => void;
  options: { value: string | number; label: string }[];
  defaultValue?: string | number
  // handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // options: Option[]
  // children: ReactNode;
};

export default function SelectItem({ value, onChange, options, defaultValue }: Props) {
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string | number;
    onChange(selectedValue);
  };

  return (
    <div>
      <FormControl variant="standard">
        <Select value={value} onChange={handleChange} displayEmpty>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
