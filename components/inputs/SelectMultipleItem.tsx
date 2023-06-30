import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string[];
  placeholder?: string;
  // handleChange: (event: SelectChangeEvent<string | string[]>) => void;
  handleChange: any
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: 250,
    },
  },
};


const SelectContainer = styled(Select)(({ theme }) => ({
  borderRadius: "10px",
  // backgroundColor: "red",
  border: "0",
  outline: "0",
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(1),
  //   width: "auto",
  // },
}));

export default function SelectMultipleItem({
  options,
  placeholder,
  value,
  handleChange,
}: Props) {
  return (
    <FormControl>
      <Select
        variant="standard"
        multiple
        displayEmpty
        value={value}
        onChange={handleChange}
        // input={<OutlinedInput color="primary" />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span>Transmisi</span>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <ListItemText primary={option.label} />
            <Checkbox checked={value.indexOf(option.value) > -1} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
