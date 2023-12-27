import React from "react";
import { StyledIcon } from "./NavbarStyles";
import { Search } from "@mui/icons-material";

const SearchComponent: React.FC = () => {
  return (
    <StyledIcon>
      <Search />
    </StyledIcon>
  );
};

export default SearchComponent;
