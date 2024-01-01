import React from "react";
import SearchBar from "./SearchBar.js";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";
import { AppBar, Stack, Toolbar, styled } from "@mui/material";
import User from "./User.js";

interface NavbarInterface {
  drawerWidth: number;
}

const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
});

const Navbar: React.FC<NavbarInterface> = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
        backgroundColor: "primary.light",
        boxShadow: "none",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <SearchBar />

        <StyledStack>
          <LanguageSelector />
          <Notifications />
          <User />
        </StyledStack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
