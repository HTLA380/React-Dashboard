import React from "react";
import SearchComponent from "./SearchComponent";
import { StyledAppBar, StyledAvatar, StyledStack } from "./NavbarStyles";
import LanguageSelector from "./LanguageSelector.js";
import Notifications from "./Notifications.js";

const Navbar: React.FC = () => {
  return (
    <StyledAppBar>
      <StyledStack sx={{ justifyContent: "space-between" }}>
        <SearchComponent />
        <StyledStack>
          <LanguageSelector />
          <Notifications />
          <StyledAvatar>N</StyledAvatar>
        </StyledStack>
      </StyledStack>
    </StyledAppBar>
  );
};

export default Navbar;
