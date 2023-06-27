import { Box, Container, Typography, Button } from "@mui/material";
import SectionWrapper from "./SectionWrapper";

type Props = {};

export default function NeedHelp({}: Props) {
  return (
    <SectionWrapper>
      <Container>
        <Box
          sx={{
            py: "3rem",
            borderRadius: "1rem",
            textAlign: "center",
            bgcolor: "#105A7F",
            maxWidth: "80%",
            marginX: "auto",
            color: "white",
          }}
        >
          <Typography variant="h3" component={"h2"}>
            Butuh Bantuan?
          </Typography>
          <Typography variant="subtitle1" component={"p"}>
            Punya pertanyaan atau kendala? Isi online form, tim kami akan segera
            membantu kamu.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: "3rem", textTransform: "capitalize" }}
          >
            Hubungi Kami
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
}
