// import { NavItem } from '@/typing'
import { NavMenu } from "@/typing";
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

// type Props = {
//   navItems: NavMenu[]
//   container: Element | (() => Element | null) | null | undefined
//   drawerWidth: number
// };

interface Props {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  window?: () => Window;
}

const drawerWidth = 240;

export default function NavMobile({
  mobileOpen,
  window,
  handleDrawerToggle,
}: Props) {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link
        href="#"
        underline="none"
        sx={{
          display: "block",
          color: "black",
          p: 2,
        }}
      >
        <Typography variant="h6" component="span">
          Logonas
        </Typography>
      </Link>
      <Divider />
      <List>
        {/* {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))} */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
