import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  Link,
} from "@mui/material";
import NextLink from "next/link";

type Props = {};

const navItems = [
  { menu: "Beli", href: "#" },
  { menu: "Jual", href: "#" },
  { menu: "Info", href: "#" },
  { menu: "Bantuan", href: "#" },
];

export default function Header({}: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="relative"
        sx={{ background: "#02A3FE" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="#" underline="none" color={"white"}>
            Logo
          </Link>
          {/* <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, columnGap: "2rem" }}>
            {navItems.map((item) => (
              //   <Button key={item} sx={{ color: "#fff" }}>
              //     {item}
              //   </Button>
              <Link
                key={item.menu}
                href={item.href}
                color="inherit"
                underline="none"
              >
                {item.menu}
              </Link>
              //   <NextLink key={item.menu} href={item.href}>
              //   </NextLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
