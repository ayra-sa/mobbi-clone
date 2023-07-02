import { Box, Container, Toolbar } from "@mui/material";
import CarouselHero from "../carousel/CarouselHero";

type Props = {};


export default function Hero({}: Props) {
  return (
    <Box sx={{ bgcolor: "#17376D", py: '4rem', px: '2rem' }}>
        <CarouselHero />
      <Container>
      </Container>
    </Box>
  );
}
