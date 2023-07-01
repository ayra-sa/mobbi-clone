import { Box, Container, Divider, styled } from "@mui/material";
import React from "react";
import { Heading3 } from "../typography/Text";
import Carousel from "../carousel/Carousel";
import RecommendationCard from "../card/RecommendationCard";

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

const BoxContainer = styled(Box)({
  padding: "2rem 0",
});

export default function Rekomendasi({}: Props) {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      },
    },
  ]

  return (
    <BoxContainer>
      <Container>
        <Heading3>Rekomendasi Mobil</Heading3>
        <Box sx={{my: 2}}>
          <Carousel dots={false} slidesToShow={4} slidesToScroll={4} responsive={responsive}>
            {cars.map((car, index) => (
              <RecommendationCard
                key={index}
                image={car.image}
                location={car.location}
                merk={car.merk}
                price={car.price}
              />
            ))}
          </Carousel>
        </Box>
        <Divider />
      </Container>
    </BoxContainer>
  );
}
