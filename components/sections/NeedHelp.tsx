import { Box, Container, Typography, Button } from "@mui/material";
import SectionWrapper from "../SectionWrapper";
import { ButtonSecondary } from "../button/ButtonRounded";

type Props = {};

export default function NeedHelp({}: Props) {
  return (
    <Box
      sx={{
        py: "3rem",
        px: { xs: "1rem", md: "2rem" },
        // borderRadius: { xs: 0, md: "1rem" },
        textAlign: "left",
        bgcolor: "skyblue",
        // maxWidth: { xs: "100%", md: "80%" },
        marginX: "auto",
        color: "white",
      }}
    >
      <Container>
        <Typography variant="h3" component={"h2"} color={"bgNav"}>
          Butuh Bantuan?
        </Typography>
        <Typography variant="subtitle1" component={"p"} color={"bgNav"}>
          Punya pertanyaan atau kendala? Isi online form, tim kami akan segera
          membantu kamu.
        </Typography>

        <ButtonSecondary sx={{ mt: "3rem", width: {xs: '60%',md: '15%'} }} size="small">
          Hubungi Kami
        </ButtonSecondary>
      </Container>
    </Box>
  );
}
