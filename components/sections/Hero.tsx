import { Box, Container, Toolbar } from "@mui/material";
import CarouselHero from "../carousel/CarouselHero";

type Props = {};


export default function Hero({}: Props) {
  return (
    <Box sx={{ bgcolor: "#17376D", pb: "4rem", pt: "7rem" }}>
      <Container>
        <CarouselHero />
      </Container>
    </Box>
  );
}
