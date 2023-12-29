import React from "react";
import SearchBar from "./SearchBar.js";
import { StyledStack } from "./NavbarStyles";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";
import { AppBar } from "@mui/material";
import { grey } from "@mui/material/colors";
import User from "./User.js";

interface NavbarInterface {
  drawerWidth: number;
}

const Navbar: React.FC<NavbarInterface> = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        p: "1rem 3rem",
        backgroundColor: grey[100],
        boxShadow: "none",
      }}>
      <StyledStack sx={{ justifyContent: "space-between" }}>
        <SearchBar />

        <StyledStack>
          <LanguageSelector />
          <Notifications />
          <User />
        </StyledStack>
      </StyledStack>
    </AppBar>
  );
};

export default Navbar;
