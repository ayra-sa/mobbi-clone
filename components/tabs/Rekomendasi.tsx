import { Box, Container, Divider, styled } from '@mui/material'
import React from 'react'
import { Heading3 } from '../typography/Text'
import Carousel from '../carousel/Carousel'
import RecommendationCard from '../card/RecommendationCard'

type Props = {}

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
    padding: "2rem 0"
  });

export default function Rekomendasi({}: Props) {
  return (
    <BoxContainer>
        <Container>
          <Heading3>Rekomendasi Mobil</Heading3>
          <Carousel dots slidesToShow={4} slidesToScroll={4}>
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
          <Divider />
        </Container>
      </BoxContainer>
  )
}