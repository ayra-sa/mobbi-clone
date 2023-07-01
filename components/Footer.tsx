import { Facebook, FacebookOutlined, Instagram } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  styled,
} from "@mui/material";


type Props = {};


const footerMenu = [
  {
    labelMenu: "mobbi",
    listMenu: [
      { menu: "Profil", link: "#" },
      { menu: "About", link: "#" },
      { menu: "News", link: "#" },
      { menu: "Blog", link: "#" },
      { menu: "Register", link: "#" },
    ],
  },
  {
    labelMenu: "Layanan",
    listMenu: [
      { menu: "Profil", link: "#" },
      { menu: "About", link: "#" },
      { menu: "News", link: "#" },
      { menu: "Blog", link: "#" },
    ],
  },
  {
    labelMenu: "Blog",
    listMenu: [
      { menu: "Profil", link: "#" },
      { menu: "Blog", link: "#" },
      { menu: "Register", link: "#" },
    ],
  },
];

const socialMedia = [
  {
    label: "facebook",
    link: "htpps://facebook.com",
    icon: <FacebookOutlined />,
  },
  {
    label: "instagram",
    link: "instagram.com",
    icon: <Instagram />,
  },
];

const IconWrapper = styled('a')(({theme}) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.text.secondary,
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '100%'
}))

export default function Footer({}: Props) {
  return (
    <Box component="footer" sx={{ bgcolor: "#17376D", py: 4, color: "white" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid container>
              {footerMenu.map((menu) => (
                <Grid key={menu.labelMenu} xs item>
                  <Stack key={menu.labelMenu} spacing={1}>
                    <Typography variant="body1" color={"footerHeading"}>
                      {menu.labelMenu}
                    </Typography>
                    {menu.listMenu.map((list, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        component={"a"}
                        href={list.link}
                        color={"footerText"}
                      >
                        {list.menu}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Download Aplikasi Sekaran!</Typography>
          </Grid>
        </Grid>
        <Stack direction={'row'} spacing={3} sx={{my: '2rem'}}>
          {socialMedia.map(socmed => (
            <IconWrapper key={socmed.label} href={socmed.link} target="_blank">
              {socmed.icon}
            </IconWrapper>
          ))}
        </Stack>
        <Typography variant="caption">© mobbi 2022 Hak Cipta Dilindungi.</Typography>
      </Container>
    </Box>
  );
}
