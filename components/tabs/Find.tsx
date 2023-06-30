import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SelectMultipleItem from "../inputs/SelectMultipleItem";
import { ArrowRight, Handshake, Search } from "@mui/icons-material";
import { Heading3, Heading4 } from "../typography/Text";
import RangeSliderInput from "../inputs/RangeSliderInput";

type Props = {};

const options = [
  { label: "transmisi", value: "Transmisi" },
  { label: "at", value: "AT" },
  { label: "mt", value: "MT" },
  { label: "manual", value: "Manual" },
];

const BoxContainer = styled(Box)({
  padding: "1rem 0",
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 0 2rem 0",
  padding: ".5rem 1rem",
  color: theme.palette.common.white,
}));

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  width: 30,
  height: 30,
}));

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  border: `1px solid ${theme.palette.text.primary}`,
  borderRadius: "40px",
  width: "80%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2),
    borderRight: `1px solid ${theme.palette.text.primary}`,
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "20ch",
    // },
  },
}));

export default function Find({}: Props) {
  const [keyword, setKeyword] = useState("");
  const [optionValue, setOptionValue] = useState<string[]>([]);
  const [value, setValue] = React.useState<[number, number]>([30, 70]);

  const handleChangeRange = (newValue: [number, number]) => {
    setValue(newValue);
  };

  const formattedRangeValue = value.join(' - ');

  const handleChangeSelect = (event: SelectChangeEvent<typeof optionValue>) => {
    const {
      target: { value },
    } = event;
    setOptionValue(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  return (
    <BoxContainer>
      <Container>
        <Heading4>Temukan mobil impian</Heading4>

        <TextField
          value={formattedRangeValue}
          label="Range Value"
          variant="outlined"
          disabled
        />

        <RangeSliderInput
          value={value}
          onChange={handleChangeRange}
          min={0}
          max={100}
          step={10}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <SearchContainer>
            <StyledInputBase
              placeholder="Search..."
              value={keyword}
              onChange={handleChange}
              //   onKeyPress={handleKeyPress}
            />
            <SelectMultipleItem
              options={options}
              value={optionValue}
              // placeholder="Transmisi"
              handleChange={handleChangeSelect}
            />
          </SearchContainer>

          <IconButton size="medium" sx={{ bgcolor: "red", color: "white" }}>
            <Search />
          </IconButton>
        </Box>

        <StyledPaper>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Handshake />
            <Typography variant="body1" component={"p"}>
              Belum tahu mobil impianmu? Coba fitur rekomendasi kami!
            </Typography>
          </Box>
          <ArrowButton>
            <ArrowRight />
          </ArrowButton>
        </StyledPaper>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
