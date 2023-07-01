import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu, Person } from "@mui/icons-material";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import NavMobile from "./NavMobile";
import SearchBar from "../inputs/SearchBar";
import { ButtonPrimary } from "../button/ButtonRounded";

const navItems = [
  {
    menu: "Beli",
    dropdownMenu: ["Beli Mobil", "Preorder", "Lelang"],
  },
  {
    menu: "Jual",
    dropdownMenu: ["Jual Mobil", "Preorder", "Lelang"],
  },
  {
    menu: "Blog",
    dropdownMenu: ["Blog", "Preorder"],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#17376D" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            href="#"
            underline="none"
            sx={{
              color: "white",
              display: "block",
            }}
          >
            <Typography variant="h6" component="span">
              Logo
            </Typography>
          </Link>
          <SearchBar />
          <Stack
            spacing={3}
            direction={"row"}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((navItem, index) => (
              <DropdownMenu
                key={index}
                menuLabel={navItem.menu}
                menuItems={navItem.dropdownMenu}
              />
            ))}
            <ButtonPrimary startIcon={<Person />}>Masuk/Daftar</ButtonPrimary>
          </Stack>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" }, color: "white" }}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <NavMobile
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
