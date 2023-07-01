import {
  Checkbox,
  FormControl,
  InputBase,
  ListItemText,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  value: string[];
  placeholder?: string;
  // handleChange: (event: SelectChangeEvent<string | string[]>) => void;
  handleChange: any;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      // width: "100%",
    },
  },
};

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: "transparent",
    border: "1px solid red",
    padding: "10px 26px 10px 12px",
    fontSize: ".8rem",
    // [theme.breakpoints.up("md")]: {
    //   width: "100%",
    // },
    "&:focus": {
      borderRadius: 4,
      backgroundColor: "transparent",
      border: "0",
      outline: "0",
      // boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function SelectMultipleItem({
  options,
  value,
  handleChange,
}: Props) {
  return (
    <FormControl sx={{ width: {xs: "100%", md: "20%"} }}>
      <Select
        sx={{ height: "100%" }}
        variant="standard"
        multiple
        displayEmpty
        value={value}
        onChange={handleChange}
        input={<StyledInput />}
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
