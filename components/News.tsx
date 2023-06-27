import { Box, Container, Typography } from "@mui/material";
import SectionWrapper from "./SectionWrapper";
import CardItem from "./CardItem";
import CarouselComponent from "./CarouselComponent";
import { SwiperSlide } from "swiper/react";

type Props = {};

const slides = [
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
];

export default function News({}: Props) {
  return (
    <SectionWrapper bgColor="#EBF4F3">
      <Container>
        <Box sx={{ display: "flex", columnGap: "1rem" }}>
          <Typography variant="h3" width={"30%"} component="h2">
            Berita, Tips & Review
          </Typography>
          <Box sx={{width: '70%'}}>
            <CarouselComponent>
                {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <CardItem
                    imageSrc={slide.image}
                    link={slide.link}
                    title={slide.title}
                    />
                </SwiperSlide>
                ))}
            </CarouselComponent>
          </Box>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
