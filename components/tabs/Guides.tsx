import { Box, Container, styled } from "@mui/material";
import React from "react";
import { Heading3 } from "../typography/Text";
import StepCard from "../card/StepCard";

type Props = {};
const guides = [
  {
    image: "https://placeimg.com/620/280/tech",
    title: "Lorem ipsum dolor amet",
  },
  {
    image: "https://placeimg.com/620/280/tech",
    title: "Lorem ipsum dolor amet",
  },
  {
    image: "https://placeimg.com/620/280/tech",
    title: "Lorem ipsum dolor amet",
  },
  {
    image: "https://placeimg.com/620/280/tech",
    title: "Lorem ipsum dolor amet",
    detail:
      "Mobil kamu siap diambil di dealer mobbi atau kami antarkan. Dan tentu siap kamu gunakan!",
  },
];

const BoxContainer = styled(Box)({
  padding: "2rem 0",
});
export default function Guides({}: Props) {
  return (
    <BoxContainer>
      <Container>
        <Heading3>Panduan Transaksi</Heading3>

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            mt: "2rem",
            rowGap: '20px',
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {guides.map((guide, index) => (
            <StepCard
              key={index}
              index={index}
              img={guide.image}
              title={guide.title}
              detail={guide?.detail}
            />
          ))}
        </Box>
      </Container>
    </BoxContainer>
  );
}
