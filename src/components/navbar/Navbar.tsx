import React from "react";
import SearchBar from "./SearchBar.js";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";
import { IconButton, Toolbar } from "@mui/material";
import UserSetting from "./UserSetting.js";
import { Menu } from "@mui/icons-material";
import { useNavbarContext } from "../../hooks/navbarContext.js";
import { StyledAppBar } from "./NavbarStyles.js";
import { StyledStackRow } from "../Styles.js";

const Navbar: React.FC = () => {
  const { DRAWER_WIDTH, setIsSideBarActive } = useNavbarContext();

  return (
    <StyledAppBar DRAWER_WIDTH={DRAWER_WIDTH}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <StyledStackRow>
          <IconButton
            sx={{ display: { xs: "block", lg: "none" }, pt: 1.5 }}
            onClick={() => setIsSideBarActive(true)}>
            <Menu />
          </IconButton>
          <SearchBar />
        </StyledStackRow>

        <StyledStackRow>
          <LanguageSelector />
          <Notifications />
          <UserSetting />
        </StyledStackRow>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;
