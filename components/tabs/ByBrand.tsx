import { Box, Container, Paper, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { Heading3 } from '../typography/Text'
import Carousel from '../carousel/Carousel'
import BrandCard from '../card/BrandCard'
import Result from '../Result'

type Props = {}

const brands = [
    { brand: "Mitsubishi", amount: "4k" },
    { brand: "Abc", amount: "4k" },
    { brand: "Def", amount: "4k" },
    { brand: "Drea", amount: "4k" },
    { brand: "Kill", amount: "4k" },
    { brand: "Reas", amount: "4k" },
    { brand: "Mnb", amount: "4k" },
  ];

  const BoxContainer = styled(Box)({
    padding: "2rem 0",
    backgroundColor: '#ffb401'
  });

  const PaperBox = styled(Paper)({
    borderRadius: '20px',
    overflow: 'hidden'
  })

export default function ByBrand({}: Props) {
    const [activeButton, setActiveButton] = useState<string | null>(
        brands[0].brand
      );
    
      const handleButtonClick = (br: string) => {
        setActiveButton(br);
      };
  return (
    <BoxContainer>
        <Container>
          <PaperBox>
            <Box sx={{p: '2rem'}}>
              <Heading3>Cari Berdasarkan Merek</Heading3>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Mobil impianmu sudah menunggu. Temukan diantara beragam pilihan
                merek yang kami tawarkan.
              </Typography>
            </Box>

            <Box sx={{padding: "2rem 1rem"}}>
              <Carousel dots={false} slidesToScroll={1} slidesToShow={5}>
                {brands.map((brand) => (
                  <BrandCard
                    key={brand.brand}
                    amount={brand.amount}
                    brand={brand.brand}
                    handleClick={() => handleButtonClick(brand.brand)}
                  />
                ))}
            </Carousel>
            </Box>

            <Result activeButton={activeButton} />
          </PaperBox>
        </Container>
      </BoxContainer>
  )
}