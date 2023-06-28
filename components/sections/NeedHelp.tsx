import { Box, Container, Typography, Button } from "@mui/material";
import SectionWrapper from "../SectionWrapper";

type Props = {};

export default function NeedHelp({}: Props) {
  return (
    <Box>
      <Container sx={{px: {xs: 0, sm: 1}}}>
        <Box
          sx={{
            py: "3rem",
            px: {xs: '1rem', md: '2rem'},
            borderRadius: {xs: 0, md: "1rem"},
            textAlign: "left",
            bgcolor: "#105A7F",
            maxWidth: {xs: "100%", md: "80%"},
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
            color="secondary"
            sx={{ mt: "3rem", textTransform: "capitalize" }}
          >
            Hubungi Kami
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
