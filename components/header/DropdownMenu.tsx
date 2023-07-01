import React, { FC, MouseEvent, useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import {
  ArrowDownward,
  ArrowDropDown,
  ArrowDropUp,
  ArrowUpward,
} from "@mui/icons-material";

type MenuItem = {
//   string;
  //   onClick: () => void;
};

type NavMenuDropdownProps = {
  menuLabel: string;
  menuItems: string[];
};

const NavMenuDropdown: FC<NavMenuDropdownProps> = ({
  menuLabel,
  menuItems,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-controls={open ? "mymenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
        sx={{ color: "white" }}
        disableRipple
      >
        {menuLabel}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "mybutton",
        }}
      >
        {menuItems.map((menuItem, index) => (
          <MenuItem key={index} onClick={() => console.log("helo")}>
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavMenuDropdown;
