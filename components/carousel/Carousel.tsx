import Slider, { Settings } from "react-slick";
import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";

type Props = {
    children: ReactNode
    dots?: boolean
    slidesToShow?: number;
  slidesToScroll?: number;
};

const NavButton = styled(IconButton)({
  color: '#fff',
  backgroundColor: 'red'
})

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green'}}
      onClick={onClick}
    >
      Prev
    </div>
  );
}


export default function Carousel({children, dots = true, slidesToShow = 1, slidesToScroll = 1}: Props) {
  const settings: Settings = {
    dots, // Aktifkan pagination dots
    infinite: true, // Aktifkan looping
    speed: 500, // Kecepatan transisi slide (ms)
    slidesToShow, // Jumlah slide yang ditampilkan secara bersamaan
    slidesToScroll, // Jumlah slide yang akan digeser saat navigasi
    prevArrow: <SamplePrevArrow />,
    nextArrow: (
      <IconButton
        sx={{ color: '#fff', position: 'absolute', top: '50%', right: '-32px', transform: 'translateY(-50%)' }}
      >
        <ChevronRight />
      </IconButton>
    ),
  };

  return (
    // <Swiper
    //   slidesPerView={view}
    //   spaceBetween={20}
    //   navigation
    //   modules={[Pagination, Navigation]}
    //   style={{ padding: "2rem 0" }}
    //   {...otherProps}
    // >
    //   {children}
    // </Swiper>
    <div className="custom-slider">
      <Slider {...settings}>
        {children}
      </Slider>

    </div>
  );
}
