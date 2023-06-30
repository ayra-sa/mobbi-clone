import React from "react";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const StyledImage = styled(Image)({
  width: '90%',
  height: 'auto',
  borderRadius: 30,
})

const images = [
  {url: 'https://placeimg.com/620/280/tech'},
  {url: 'https://placeimg.com/620/280/nature'},
  {url: 'https://placeimg.com/620/280/people'},
  {url: 'https://placeimg.com/620/280/tech'},
  {url: 'https://placeimg.com/620/280/nature'},
]

export default function CarouselHero({}: Props) {
  const settings = {
    dots: true, // Aktifkan pagination dots
    infinite: true, // Aktifkan looping
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow: 3, // Jumlah slide yang ditampilkan secara bersamaan
    slidesToScroll: 1, // Jumlah slide yang akan digeser saat navigasi
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box key={index}>
          <StyledImage
            alt="image"
            src={image.url}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
        </Box>
      ))}
    </Slider>
  );
}
