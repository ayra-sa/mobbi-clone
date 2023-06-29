// import styled from '@emotion/styled';
import { InputBase, MenuItem, SelectChangeEvent, alpha, styled } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import SelectMultipleItem from "./SelectMultipleItem";
import SelectItem from "./SelectItem";
import SelectField from "./SelectField";

type Props = {};

export default function SearchBar({}: Props) {

  const [optionValue, setOptionValue] = useState('');

  const handleChange = (value: string | number) => {
    setOptionValue(optionValue)
  }

  console.log(optionValue)

  const options = [
    'Certified',
    'Lelang'
  ]

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "50px",
    backgroundColor: "#FFF",
    // "&:hover": {
    //   backgroundColor: alpha(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    // color: theme.palette.text,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        // "&:focus": {
        //   width: "20ch",
        // },
      },
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
      <SelectField defaultValue={'Certified'} options={options} />
      {/* <SelectItem value={optionValue} onChange={handleChange} options={options} /> */}
    </Search>
  );
}
