import React from "react";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const StyledImage = styled(Image)(({theme}) => ({
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    width: "90%",
    borderRadius: 30,
  }
}))

const images = [
  { url: "https://placeimg.com/620/280/tech" },
  { url: "https://placeimg.com/620/280/nature" },
  { url: "https://placeimg.com/620/280/people" },
  { url: "https://placeimg.com/620/280/tech" },
  { url: "https://placeimg.com/620/280/nature" },
];

export default function CarouselHero({}: Props) {
  const settings = {
    dots: true, // Aktifkan pagination dots
    infinite: true, // Aktifkan looping
    // speed: 500,
    // dotsClass: "custom-dots",
    slidesToShow: 3, // Jumlah slide yang ditampilkan secara bersamaan
    slidesToScroll: 1, // Jumlah slide yang akan digeser saat navigasi
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: undefined,
          nextArrow: undefined,
        },
      },
    ],
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
