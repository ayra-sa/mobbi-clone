import React from "react";
import { Box, Slider, TextField } from "@mui/material";

interface RangeSliderProps {
  value: [number | "", number | ""];
  onChange: any;
  // onChange: (newValue: [number | '', number | '']) => void;
  min?: number;
  max?: number;
  step?: number;
}

const RangeSliderInput: React.FC<RangeSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      onChange([newValue[0], newValue[1]]);
    }
  };

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue =
        event.target.value === "" ? "" : Number(event.target.value);
      const updatedValue: any = [...value];
      updatedValue[index] = newValue;
      onChange(updatedValue);
    };

  const handleBlur = (index: number) => () => {
    const updatedValue: any = [...value];
    if (updatedValue[index] === "") {
      updatedValue[index] = "";
    } else if (updatedValue[index] < min) {
      updatedValue[index] = min;
    } else if (updatedValue[index] > max) {
      updatedValue[index] = max;
    }
    onChange(updatedValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value.map((val) => (val === "" ? 0 : val))}
        onChange={handleSliderChange}
        min={min}
        max={max}
        // step={step}
        aria-labelledby="range-slider"
      />
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TextField
          value={value[0]}
          size="small"
          onChange={handleInputChange(0)}
          onBlur={handleBlur(0)}
          inputProps={{
            step,
            min,
            max,
            type: "number",
            "aria-labelledby": "range-slider",
          }}
        />
        <TextField
          value={value[1]}
          size="small"
          onChange={handleInputChange(1)}
          onBlur={handleBlur(1)}
          inputProps={{
            step,
            min,
            max,
            type: "number",
            "aria-labelledby": "range-slider",
          }}
        />
      </Box>
    </Box>
  );
};

export default RangeSliderInput;
