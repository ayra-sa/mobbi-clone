import React, { ChangeEvent, FC, useState } from "react";
import { Box, Slider, TextField, TextFieldProps } from "@mui/material";

type Props = {
    defaultValue: [number, number]
    min: number
    max: number
    inputMax: number
    // onRangeChange: (value: [number, number]) => void;
    textFieldProps?: TextFieldProps
}

export default function RangeSliderInput({defaultValue, min, max, textFieldProps, inputMax}: Props) {
  const [rangeValue, setRangeValue] = useState<[number, number]>(defaultValue);

  const handleRangeChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setRangeValue(newValue as [number, number]);
    //   onRangeChange(newValue as [number, number]);
    }
  };

  console.log(rangeValue)

  return (
    <div>
      <Slider
        value={rangeValue}
        onChange={handleRangeChange}
        min={rangeValue[0]}
        max={rangeValue[1]}
        step={1}
        valueLabelDisplay="auto"
      />

      <Box display="flex" justifyContent="space-between">
        <TextField
          label="Min"
          type="number"
          value={rangeValue[0]}
          onChange={(event) =>
            setRangeValue([Number(event.target.value), rangeValue[1]])
          }
          inputProps={{
            min: rangeValue[0].toString()
          }}
          {...textFieldProps}
        />
        <TextField
          label="Max"
          type="number"
          value={rangeValue[1]}
          onChange={(event) =>
            setRangeValue([rangeValue[0], Number(event.target.value)])
          }
          inputProps={{
            max: rangeValue[1].toString()
          }}
          {...textFieldProps}
        />
      </Box>
    </div>
  );
};

