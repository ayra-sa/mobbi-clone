import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { Menu, Person, Search } from "@mui/icons-material";
import { useState } from "react";
import NavMobile from "./NavMobile";
import SearchBar from "../inputs/SearchBar";
import { ButtonPrimary } from "../button/ButtonRounded";
import NavMenuDropdown from "./NavMenuDropdown";

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

const DrawerContainer = styled(Drawer)(({ theme }) => ({
  height: '100%',
  backgroundColor: alpha(theme.palette.text.secondary, .85),
  "& .MuiDrawer-paper": {
    height: 'auto',
    borderRadius: '20px',
    top: 10,
    left: 10,
    right: 10
  }
}));

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchMobileOpen, setSearchMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleSearchMobile = () => {
    setSearchMobileOpen((prevState) => !prevState);
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
          <Box sx={{display: {xs: 'none', md: 'block'}}}>
            <SearchBar />
          </Box>
          <Stack
            spacing={3}
            direction={"row"}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {navItems.map((navItem, index) => (
              <NavMenuDropdown
                key={index}
                menuLabel={navItem.menu}
                menuItems={navItem.dropdownMenu}
              />
            ))}
            <ButtonPrimary startIcon={<Person />}>Masuk/Daftar</ButtonPrimary>
          </Stack>
          <Box sx={{display: {xs: 'block', md: 'none'}}}>
            <IconButton
              onClick={handleSearchMobile}
              sx={{ ml: 2, display: { md: "none" }, color: "white" }}
            >
              <Search />
            </IconButton>
            {searchMobileOpen && (
              <DrawerContainer
                // container={container}
                variant="temporary"
                open={searchMobileOpen}
                anchor="left"
                onClose={handleSearchMobile}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <SearchBar />
              </DrawerContainer>
            )}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: "none" }, color: "white" }}
            >
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <NavMobile
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
}
