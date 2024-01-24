import React from "react";
import SearchBar from "./SearchBar.js";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";
import { AppBar, IconButton, Toolbar, alpha } from "@mui/material";
import UserSetting from "./UserSetting.js";
import { Menu } from "@mui/icons-material";
import { useNavbarContext } from "../../hooks/navbarContext.js";
import { StyledStackRow } from "../Styles.js";
import { common } from "../../theme/palette.js";

const Navbar: React.FC = () => {
  const { DRAWER_WIDTH, setIsSideBarActive } = useNavbarContext();

  return (
    <AppBar
      sx={{
        width: { xs: "100%", lg: `calc(100% - ${DRAWER_WIDTH}px)` },
        marginLeft: { xs: 0, lg: `${DRAWER_WIDTH}px` },
        boxShadow: "none",
        backgroundColor: alpha(common.white, 0.5),
        backdropFilter: "blur(10px)",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <StyledStackRow>
          {/* ============ Mobile SideBar Controller ============== */}
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
    </AppBar>
  );
};

export default Navbar;
