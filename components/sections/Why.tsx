import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionWrapper from "../SectionWrapper";
import WhyCard from "../card/WhyCard";

type Props = {};

const choices = [
  {title: 'Safe', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Transparent', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Good', description: 'Informasi kondisi unit yang detail dan akurat'},
  {title: 'Fast', description: 'Informasi kondisi unit yang detail dan akurat'},
]

export default function Why({}: Props) {
  return (
    <SectionWrapper bgColor="#009ee8">
      <Container>
        <Typography variant="h4" component={"h4"} sx={{textAlign: 'center'}} color={"#fff"}>
          Mengapa mobbi?
        </Typography>

        <Grid container spacing={2} sx={{ mt: 4 }}>
            {choices.map((choice, index) => (
              <Grid item xs key={index}>
                <WhyCard title={choice.title} description={choice.description} />
              </Grid>
            ))}
          </Grid>

        {/* <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box component={"figure"} sx={{ width: "30%" }}>
              IMAGE
            </Box>
            <Box sx={{ width: "70%" }}>
              <Typography variant="h4" component={"h4"}>
                Safe and Verified
              </Typography>
              <Typography variant="subtitle1" component={"p"}>
                Proses yang aman dan terkendali
              </Typography>
            </Box>
          </Box>
        </Box> */}
      </Container>
    </SectionWrapper>
  );
}
