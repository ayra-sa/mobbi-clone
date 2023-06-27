import {Box, Container, Toolbar} from '@mui/material'
import CarouselComponent from './CarouselComponent'
import { SwiperSlide } from 'swiper/react';
import CardHeroItem from './CardHeroItem';
import SectionWrapper from './SectionWrapper';


type Props = {}

const dataImages = [
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
  {
    title: "TOYOTA AGYA TRD AT/2017",
    image: "images/car.jpeg",
  },
];

export default function Hero({}: Props) {
  return (
    <SectionWrapper bgColor='#EBF4F3'>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '1rem' }}>
            <CarouselComponent>
              {dataImages.map((data,index) => (
                <SwiperSlide key={index}>
                  <CardHeroItem image={data.image} title={data.title} />
                </SwiperSlide>
              ))}
            </CarouselComponent>
        </Box>
      </Container>
    </SectionWrapper>
  )
}