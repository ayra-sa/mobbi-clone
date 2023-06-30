import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import SectionWrapper from "../SectionWrapper";
import CardItem from "../CardItem";
import CardNews from "../card/CardNews";

type Props = {};

const slides = [
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
  {
    image: "https://placeimg.com/640/480/tech",
    title: "Trik Membeli Mobil Bekas",
    link: "#",
  },
];

export default function News({}: Props) {
  return (
    <SectionWrapper bgColor="#EBF4F3">
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component={"h4"}>
            Berita, Tips Review
          </Typography>
          <Link href="#" underline="none">
            Lainya
          </Link>
        </Box>
        {/* <Grid container spacing={0}>
          <Grid item xs>
            <CardNews />
          </Grid>
          <Grid item xs>
            <CardNews />
          </Grid>
          <Grid item xs>
            <CardNews />
          </Grid>
        </Grid>
      </Container> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={7}>
            <CardNews />
          </Grid>
          <Grid item xs={12} md={4} lg={5} container direction="column">
            <Grid item xs>
              <CardNews />
            </Grid>
            <Grid item xs>
              <CardNews />
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={4} lg={3}>
          </Grid> */}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
