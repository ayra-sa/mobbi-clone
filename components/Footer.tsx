import {
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

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

export default function Footer({}: Props) {
  const theme = useTheme();
  return (
    <Box component="footer" sx={{ bgcolor: '#02A3FE', py: 4, color: 'white' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Link href="#" underline="none" color={"inherit"}>
              <Typography variant="h6">Logo</Typography>
            </Link>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', columnGap: '1rem' }}>
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
            <Typography variant="h6">Kolom 3</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
