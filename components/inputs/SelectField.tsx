import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import React, { useState } from "react";

type Props = {
  defaultValue: string | number;
  options: string[] | number[];
};

export default function SelectField({ defaultValue, options }: Props) {

  const StyledSelect = styled(Select)({
    border: '0',
    outline: '0',
    backgroundColor: 'transparent',
    padding: '0',
  })

  return (
    <Box>
      <FormControl fullWidth sx={{ '& .MuiSelect-outlined': { border: 'none' } }}>
        <Select defaultValue={defaultValue} variant="outlined">
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
