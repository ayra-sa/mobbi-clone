import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "@/styles/globals.css";
import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

type Props = {
  children: ReactNode;
};

export default function CarouselComponent({ children }: Props) {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      slidesPerGroup={3}
      breakpoints={breakpoints}
      navigation={{
        nextEl: ".btnNext",
        prevEl: ".btnPrev",
      }}
      pagination={{
        clickable: true,
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {children}

      <Box sx={{ position: {xs: 'relative', md: "absolute"}, zIndex: "29", bottom: "0", right: "0", textAlign: {xs: 'center', md: 'unset'} }}>
        <ButtonPrev />
        <ButtonNext />
      </Box>
    </Swiper>
  );
}
