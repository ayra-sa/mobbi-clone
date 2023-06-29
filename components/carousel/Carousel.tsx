import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import RecommendationCard from "../card/RecommendationCard";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
    // group: number
    view: number
    slidesPerGroup?: number
};

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

export default function Carousel({children, view, ...otherProps}: Props) {
  return (
    <Swiper
      slidesPerView={view}
      // slidesPerGroup={group}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      loop
      navigation
      modules={[Pagination, Navigation]}
      style={{ padding: "2rem 0" }}
      {...otherProps}
    >
      {/* {cars.map((car, index) => (
        <SwiperSlide key={index}>
          <RecommendationCard
            image={car.image}
            location={car.location}
            merk={car.merk}
            price={car.price}
          />
        </SwiperSlide>
      ))} */}
      {children}
    </Swiper>
  );
}
