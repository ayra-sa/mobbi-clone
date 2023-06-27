import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Box, Container, Typography } from "@mui/material";
import TestimonialSlide from "./TestimonialSlide";
import ImageItem from "./ImageItem";
import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

type Props = {};

const testimonialData = [
  {
    name: "Alex Damien",
    job: "Pengusaha",
    photo: "https://placeimg.com/200/80/people",
    testimoniTitle: "Kualitas Bagus",
    testimoniDetail: "Kualitas sangat bagus sekali, top selalu",
  },
  {
    name: "Dedi Kusnandar",
    job: "Pengusaha",
    photo: "https://placeimg.com/200/80/people",
    testimoniTitle: "Luar Biasa",
    testimoniDetail: "Kualitas sangat bagus sekali, top selalu",
  },
  {
    name: "Harry Jun",
    job: "Pengusaha",
    photo: "https://placeimg.com/200/80/people",
    testimoniTitle: "Very Recomended",
    testimoniDetail: "Kualitas sangat bagus sekali, top selalu",
  },
];

export default function Testimonial({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionWrapper>
      <Container>
        <Box>
          <Box>
            <Typography variant="h3" component={"h1"}>
              Testimonial Pelanggan
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "flex-start", md: "center" },
              gap: "2rem",
              flexDirection: { xs: "column-reverse", md: "row" },
              mt: {xs: '1.5rem', md: '6px'}
            }}
          >
            <Box sx={{ flex: "1", position: "relative", width: {xs: '100%', md: 'auto'} }}>
              {testimonialData.map((data, index) => (
                <TestimonialSlide
                  key={index}
                  index={index}
                  customerImage={data.photo}
                  customerName={data.name}
                  customerJob={data.job}
                  title={data.testimoniTitle}
                  description={data.testimoniDetail}
                  currentIndex={currentIndex}
                />
              ))}
              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  bottom: "0",
                  display: "flex",
                  columnGap: "10px",
                }}
              >
                <ButtonPrev handleClick={previousImage} />
                <ButtonNext handleClick={nextImage} />
              </Box>
            </Box>
            <Box sx={{ flex: "1" }}>
              <ImageItem
                alt="testimonial"
                image="https://placeimg.com/640/480/tech"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
