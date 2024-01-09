import React from "react";
import SearchBar from "./SearchBar.js";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";
import { AppBar, IconButton, Stack, Toolbar, styled } from "@mui/material";
import User from "./User.js";
import { Menu } from "@mui/icons-material";
import { useNavbarContext } from "../../hooks/navbarContext.js";

const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: 5,
});

const Navbar: React.FC = () => {
  const { DRAWER_WIDTH, setIsSideBarActive } = useNavbarContext();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { lg: `calc(100% - ${DRAWER_WIDTH}px)` },
        ml: { lg: `${DRAWER_WIDTH}px` },
        backgroundColor: "rgba(241, 241, 241, 0.651)",
        boxShadow: "none",
        backdropFilter: "blur(10px)",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <IconButton
            sx={{ display: { xs: "block", lg: "none" }, pt: 1.5 }}
            onClick={() => setIsSideBarActive(true)}>
            <Menu />
          </IconButton>
          <SearchBar />
        </Stack>

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
