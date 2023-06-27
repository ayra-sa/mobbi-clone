import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  IconButton,
} from "@mui/material";
import ImageItem from "./ImageItem";

type Props = {};

const footerLinkMenuLokasi = [
  { menu: "Batam", href: "" },
  { menu: "Tanjung Pinang", href: "" },
];

const footerLinkMenuPelayanan = [
  { menu: "Jual Mobil Bekas", href: "" },
  { menu: "Jual Motor Bekas", href: "" },
  { menu: "Beli Mobil Bekas", href: "" },
  { menu: "Sewa Mobil", href: "" },
  { menu: "Service Mobil", href: "" },
];

const socialMedia = [
  {
    label: "facebook",
    link: "htpps://facebook.com",
    icon: <Facebook />,
  },
  {
    label: "instagram",
    link: "instagram.com",
    icon: <Instagram />,
  },
  {
    label: "twitter",
    link: "twitter.com",
    icon: <Twitter />,
  },
  {
    label: "youtube",
    link: "youtube.com",
    icon: <YouTube />,
  },
];

const mitra = [
  {
    image: 'https://placeimg.com/150/50/any'
  },
  {
    image: 'https://placeimg.com/150/50/any'
  },
  {
    image: 'https://placeimg.com/150/50/any'
  },
  {
    image: 'https://placeimg.com/150/50/any'
  },
  {
    image: 'https://placeimg.com/150/50/any'
  },
  {
    image: 'https://placeimg.com/150/50/any'
  },
]

export default function Footer({}: Props) {
  return (
    <Box component="footer" sx={{ bgcolor: "#02A3FE", py: 4, color: "white" }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Link href="#" underline="none" color={"inherit"}>
              <Typography variant="h6">Logo</Typography>
            </Link>
            <Typography>
              Pusat Jual Beli Mobil, Motor Bekas dan Service di Batam
            </Typography>
            <Stack direction={"row"} spacing={1}>
              {socialMedia.map((socmed) => (
                <IconButton
                  key={socmed.label}
                  href={socmed.link}
                  color="inherit"
                >
                  {socmed.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: "flex", columnGap: "1rem" }}>
              <Box>
                <Typography variant="h6">Lokasi</Typography>
                <List component="ul">
                  {footerLinkMenuLokasi.map((menuLokasi) => (
                    <ListItem
                      key={menuLokasi.menu}
                      component="li"
                      sx={{ padding: "unset" }}
                    >
                      <Link
                        href={menuLokasi.href}
                        underline="none"
                        color={"inherit"}
                      >
                        <ListItemText primary={menuLokasi.menu} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography variant="h6">Pelayanan</Typography>
                <List component="ul">
                  {footerLinkMenuPelayanan.map((menuPelayanan) => (
                    <ListItem
                      key={menuPelayanan.menu}
                      component="li"
                      sx={{ padding: "unset" }}
                    >
                      <Link
                        href={menuPelayanan.href}
                        underline="none"
                        color={"inherit"}
                      >
                        <ListItemText primary={menuPelayanan.menu} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Mitra Kami</Typography>
            <Grid container spacing={1}>
              {mitra.map((m, index) => (
                <Grid key={index} item xs={4}>
                  <ImageItem image={m.image} alt="mitra logo" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
