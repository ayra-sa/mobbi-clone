import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageItem from "../ImageItem";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";
import Image from "next/image";

type Props = {};

export default function CarouselHero({}: Props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      loop
      navigation
      autoplay
      modules={[Pagination, Navigation, Autoplay]}
    >
      <SwiperSlide>
        <Box>
          <Image
            alt="image"
            src="https://placeimg.com/620/280/tech"
            width={400}
            height={200}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image
            alt="image"
            src="https://placeimg.com/620/280/people"
            width={400}
            height={200}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image
            alt="image"
            src="https://placeimg.com/620/280/nature"
            width={400}
            height={200}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image
            alt="image"
            src="https://placeimg.com/620/280/tech"
            width={400}
            height={200}
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box>
          <Image
            alt="image"
            src="https://placeimg.com/620/280/animal"
            width={400}
            height={200}
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
