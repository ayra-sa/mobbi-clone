import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { ChangeEvent, ReactNode, useState } from "react";
import RangeSliderInput from "./RangeSliderInput";


type Props = {
//   value: string;
//   handleChange: (event: SelectChangeEvent) => void;
//   handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // options: Option[]
//   children: ReactNode;
};

export default function SelectItem({ }: Props) {
  return (
    <FormControl>
      <Select
        value={number}
        onChange={handleInputChange}
        displayEmpty
        type=""
        inputProps={{ "aria-label": "Without label" }}
      >
        <RangeSliderInput defaultValue={numbers} max={2000} min={100} inputMax={2000} />
        {/* {children} */}
      </Select>
    </FormControl>
  );
}
