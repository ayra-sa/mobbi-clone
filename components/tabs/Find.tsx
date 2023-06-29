import {
  Box,
  Divider,
  IconButton,
  Paper,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import SelectMultipleItem from "../inputs/SelectMultipleItem";
import { ArrowRight, Handshake, Search } from "@mui/icons-material";
import { Heading3 } from "../typography/Heading";
import { SwiperSlide } from "swiper/react";
import RecommendationCard from "../card/RecommendationCard";
import Carousel from "../carousel/Carousel";
import BrandCard from "../card/BrandCard";
import Result from "../Result";

type Props = {};

const cars = [
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
  {
    image: "/images/car.jpeg",
    merk: "2018 Daihatsu New",
    price: 12343,
    location: "Kota Jakarta Utara",
  },
];


const options = [
  { label: "transmisi", value: "Transmisi" },
  { label: "at", value: "AT" },
  { label: "mt", value: "MT" },
  { label: "manual", value: "Manual" },
];

const brands = [
    {brand: 'Mitsubishi', amount: '4k'},
    {brand: 'Abc', amount: '4k'},
    {brand: 'Def', amount: '4k'},
    {brand: 'Drea', amount: '4k'},
    {brand: 'Kill', amount: '4k'},
    {brand: 'Reas', amount: '4k'},
    {brand: 'Mnb', amount: '4k'},
]

console.log(Math.min(brands.length, 5))

export default function Find({}: Props) {
  const [keyword, setKeyword] = useState("");
  const [optionValue, setOptionValue] = useState<string[]>([]);

  const [activeButton, setActiveButton] = useState<string | null>(brands[0].brand);

  const handleButtonClick = (br: string) => {
    setActiveButton(br);
  };

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
    <Box>
      <Typography variant="h4" component={"h2"}>
        Temukan mobil impian
      </Typography>

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
            placeholder="Transmisi"
            handleChange={handleChangeSelect}
          />
        </Box>

        <IconButton size="medium" sx={{ bgcolor: "blue", color: "white" }}>
          <Search />
        </IconButton>
      </Box>

      <Paper sx={{ display: "flex", my: 4 }}>
        <Handshake />
        <Typography variant="body1" component={"p"}>
          Belum tahu mobil impianmu? Coba fitur rekomendasi kami!
        </Typography>
        <IconButton>
          <ArrowRight />
        </IconButton>
      </Paper>

      <Divider />

      <Box>
        <Heading3>Rekomendasi Mobil</Heading3>

        <Carousel view={4} slidesPerGroup={4}>
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <RecommendationCard
                image={car.image}
                location={car.location}
                merk={car.merk}
                price={car.price}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </Box>

      <Box sx={{ bgcolor: "orange", p: 4 }}>
        <Paper>
          <Heading3>Cari Berdasarkan Merek</Heading3>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Mobil impianmu sudah menunggu. Temukan diantara beragam pilihan
            merek yang kami tawarkan.
          </Typography>

          <Carousel view={5} slidesPerGroup={5}>
            {brands.map(brand => (
                <SwiperSlide key={brand.brand}>
                    <BrandCard amount={brand.amount} brand={brand.brand} br={brand.brand} handleClick={() => handleButtonClick(brand.brand)} />
                </SwiperSlide>
            ))}
            
          </Carousel>

          <Result activeButton={activeButton} />

        </Paper>
      </Box>
    </Box>
  );
}
