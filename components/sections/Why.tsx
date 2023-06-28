import { Box, Container, Typography } from "@mui/material";
import React from "react";
import SectionWrapper from "../SectionWrapper";

type Props = {};

export default function Why({}: Props) {
  return (
    <SectionWrapper bgColor="#009ee8">
      <Container>
        <Typography variant="h4" component={"h4"}>
          Mengapa mobbi?
        </Typography>

        <Box>
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
        </Box>
      </Container>
    </SectionWrapper>
  );
}
