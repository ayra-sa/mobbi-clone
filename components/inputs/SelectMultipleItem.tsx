import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

type Props = {
  options: string[]
  value: string[]
  handleChange: (event: SelectChangeEvent<string | string[]>) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function SelectMultipleItem({options, value, handleChange}: Props) {
  // const [personName, setPersonName] = useState<string[]>([]);

  // const handleChange = (event: SelectChangeEvent<typeof personName>) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(typeof value === "string" ? value.split(",") : value);
  // };
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
      <Select
        multiple
        value={value}
        onChange={handleChange}
        // input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemText primary={option} />
            <Checkbox checked={value.indexOf(option) > -1} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
