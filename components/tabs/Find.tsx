import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
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
import RecommendationCard from "../card/RecommendationCard";
import Carousel from "../carousel/Carousel";
import BrandCard from "../card/BrandCard";
import Result from "../Result";
import ChoiceCard from "../card/ChoiceCard";
import ImageItem from "../ImageItem";
import StepCard from "../card/StepCard";
import Rekomendasi from "./Rekomendasi";

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
  margin: "1rem 0",
  padding: "0 1rem",
}));

export default function Find({}: Props) {
  const [keyword, setKeyword] = useState("");
  const [optionValue, setOptionValue] = useState<string[]>([]);

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

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box sx={{ display: "flex" }}>
            <TextField
              placeholder="Search..."
              value={keyword}
              onChange={handleChange}
              //   onKeyPress={handleKeyPress}
              variant="standard"
              size="medium"
            />
            <SelectMultipleItem
              options={options}
              value={optionValue}
              // placeholder="Transmisi"
              handleChange={handleChangeSelect}
            />
          </Box>

          <IconButton size="medium" sx={{ bgcolor: "blue", color: "white" }}>
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
          <IconButton sx={{ color: "white" }}>
            <ArrowRight />
          </IconButton>
        </StyledPaper>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
