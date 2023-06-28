import {Box, Container, Toolbar} from '@mui/material'
import CarouselComponent from '../CarouselComponent'
import { SwiperSlide } from 'swiper/react';
import CardHeroItem from '../CardHeroItem';
import SectionWrapper from '../SectionWrapper';
import CarouselHero from '../carousel/CarouselHero';


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
    <Box sx={{bgcolor: '#17376D', pb: '4rem', pt: '7rem'}}>
      <Container>
        {/* <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: '1rem', mt: {xs: '2rem', md: '3rem'} }}>
            <CarouselComponent>
              {dataImages.map((data,index) => (
                <SwiperSlide key={index}>
                  <CardHeroItem image={data.image} title={data.title} />
                </SwiperSlide>
              ))}
            </CarouselComponent>
        </Box> */}
      </Container>
        <CarouselHero />
    </Box>
  )
}