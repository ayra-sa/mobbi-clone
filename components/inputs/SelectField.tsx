import {
  Box,
  FormControl,
  InputBase,
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

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "0",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["box-shadow"]),
    // Use the system font instead of the default Roboto font.
    // fontFamily: [
    //   '-apple-system',
    //   'BlinkMacSystemFont',
    //   '"Segoe UI"',
    //   'Roboto',
    //   '"Helvetica Neue"',
    //   'Arial',
    //   'sans-serif',
    //   '"Apple Color Emoji"',
    //   '"Segoe UI Emoji"',
    //   '"Segoe UI Symbol"',
    // ].join(','),
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "transparent",
      border: "0",
      outline: "0",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function SelectField({ defaultValue, options }: Props) {
  const StyledSelect = styled(Select)({
    border: "0",
    outline: "0",
    backgroundColor: "transparent",
    padding: "0",
  });

  return (
    <Box>
      <FormControl
        fullWidth
        sx={{ "& .MuiSelect-outlined": { border: "none" } }}
      >
        <Select
          defaultValue={defaultValue}
          variant="standard"
          input={<StyledInput />}
          // MenuProps={{
          //   anchorOrigin: {
          //     vertical: "bottom",
          //     horizontal: "center",
          //   },
          //   transformOrigin: {
          //     vertical: "top",
          //     horizontal: "center",
          //   },
          //   PaperProps: {
          //     style: {
          //       maxHeight: 200,
          //       width: 250,
          //     },
          //   },
          // }}
        >
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
